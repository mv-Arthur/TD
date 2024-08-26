import React from "react";
import { S } from "./input.styled";

export type VariantType = "name" | "descr";

type Options = {
     limit: number;
};

type onChangeParamType = {
     value: string;
     error: string | boolean;
};

type PropsType = {
     variant: VariantType;
     placeholder?: string;
     margintop?: number;
     marginbottom?: number;
     onChange: (value: onChangeParamType) => void;
     options: Options;
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

export const Input: React.FC<PropsType> = React.memo((props) => {
     const [inputValue, setInputValue] = React.useState<string | null>("");

     React.useEffect(
          () =>
               props.onChange({
                    value: inputValue as string,
                    error:
                         (inputValue?.length as number) > props.options.limit &&
                         `Лимит названия задачи: ${inputValue?.length} / ${props.options.limit}`,
               }),
          [inputValue, props],
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
