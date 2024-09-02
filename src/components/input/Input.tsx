import React from "react";
import { S } from "./input.styled";

export type VariantType = "name" | "descr";

type HandlerType<T> = (value: T) => void;

type PropsType = {
     variant: VariantType;
     placeholder?: string;
     margintop?: number;
     marginbottom?: number;
     onChange: HandlerType<CustomChangeEvent>;
     limit: number;
     onFocus?: HandlerType<InputErrorType>;
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
               ? `Лимит ${variant === "name" ? "названия" : "описания"} : ${this.value.length} / ${limit}`
               : "";
     }
}

export const Input: React.FC<PropsType> = React.memo((props) => {
     const [inputValue, setInputValue] = React.useState<string | null>("");

     const changeEvent = new CustomChangeEvent(inputValue as string, props.limit, props.variant);

     React.useEffect(
          () => props.onChange(changeEvent),
          // eslint-disable-next-line react-hooks/exhaustive-deps
          [inputValue],
     );

     const onInputHandler = (e: React.FormEvent<HTMLDivElement>) => {
          setInputValue(e.currentTarget.textContent);
          moveCaretToEnd(e.currentTarget);
     };

     const onFoucusHandler = (e: React.FocusEvent<HTMLDivElement>) => props.onFocus?.(changeEvent.error);

     return (
          <S.InputWrapper $margintop={props.margintop} $marginbottom={props.marginbottom}>
               <S.Input onFocus={onFoucusHandler} $variant={props.variant} onInput={onInputHandler}>
                    {inputValue}
               </S.Input>
               {!inputValue && <S.Placeholder $variant={props.variant}>{props.placeholder}</S.Placeholder>}
          </S.InputWrapper>
     );
});
