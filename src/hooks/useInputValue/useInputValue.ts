import React from "react";
import { VariantType } from "../../components/input/Input";
import { v4 as uuid } from "uuid";

const moveCaretToEnd = (target: HTMLDivElement) => {
     const range = document.createRange();
     const selection = window.getSelection();
     range.selectNodeContents(target);
     range.collapse(false);
     selection?.removeAllRanges();
     selection?.addRange(range);
     target.focus();
     range.detach();
};

export interface InputErrorType {
     text: string;
     id: string;
}

export class CustomChangeEvent {
     value: string = "";
     error: InputErrorType | null = null;
     inputId = uuid();
     variant: VariantType;
     limit: number;

     constructor(limit: number, variant: VariantType) {
          this.variant = variant;
          this.limit = limit;
     }

     setError() {
          this.error = {
               id: uuid(),
               text: `Лимит ${this.variant === "name" ? "названия" : "описания"} : ${this.value.length} / ${
                    this.limit
               }`,
          };
     }

     changeInputValue(value: string) {
          this.value = value;
          if (this.limit < this.value.length) this.setError();
          else this.error = null;
          return this;
     }
}

export const useInputValue = (
     limit: number,
     variant: VariantType,
     onChange: (changeEvent: CustomChangeEvent) => void,
) => {
     const ref = React.useRef<null | HTMLDivElement>(null);
     const [value, setValue] = React.useState("");

     const changeEvent = React.useMemo(() => {
          const changeEvent = new CustomChangeEvent(limit, variant);
          return changeEvent;
          // eslint-disable-next-line react-hooks/exhaustive-deps
     }, []);

     React.useEffect(() => {
          const current = ref.current;
          if (current) {
               const listener = (event: Event) => {
                    const target = event.target as Element;
                    moveCaretToEnd(target as HTMLDivElement);
                    setValue(target.textContent as string);
               };

               current.addEventListener("input", listener);

               return () => current.removeEventListener("input", listener);
          }
     }, []);

     React.useEffect(
          () => onChange(changeEvent.changeInputValue(value)),
          // eslint-disable-next-line react-hooks/exhaustive-deps
          [value],
     );

     return { ref, value };
};
