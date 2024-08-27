import React from "react";
import { S } from "./input.styled";

export type VariantType = "name" | "descr";

type PropsType = {
     variant: VariantType;
     placeholder?: string;
     margintop?: number;
     marginbottom?: number;
     onChange: (value: CustomChangeEvent) => void;
     limit: number;
};

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

export type InputErrorType = {
     status: boolean;
     text: string;
};

export class CustomChangeEvent {
     value: string;
     error: InputErrorType = {
          status: false,
          text: "",
     };

     constructor(inputValue: string, limit: number, variant: VariantType) {
          this.value = inputValue;
          this.error.status = this.value.length > limit;
          this.error.text = this.error.status
               ? `Лимит ${variant === "name" ? "названия" : "описания"} : ${inputValue.length} / ${limit}`
               : "";
     }
}

export const Input: React.FC<PropsType> = React.memo((props) => {
     const [inputValue, setInputValue] = React.useState<string | null>("");

     React.useEffect(
          () => props.onChange(new CustomChangeEvent(inputValue as string, props.limit, props.variant)),
          // eslint-disable-next-line react-hooks/exhaustive-deps
          [inputValue],
     );

     return (
          <S.InputWrapper $margintop={props.margintop} $marginbottom={props.marginbottom}>
               <S.Input
                    $variant={props.variant}
                    onInput={(e) => {
                         setInputValue(e.currentTarget.textContent);
                         moveCaretToEnd(e.currentTarget);
                    }}
               >
                    {inputValue}
               </S.Input>
               {!inputValue && <S.Placeholder $variant={props.variant}>{props.placeholder}</S.Placeholder>}
          </S.InputWrapper>
     );
});
