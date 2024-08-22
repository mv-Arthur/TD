import React from "react";
import { S } from "./input.styled";

export type VariantType = "name" | "descr";

type PropsType = {
     variant: VariantType;
     placeholder?: string;
     margintop?: number;
     marginbottom?: number;
     onChange: (value: string) => void;
};

export const Input: React.FC<PropsType> = React.memo((props) => {
     const [inputValue, setInputValue] = React.useState<string | null>("");

     props.onChange(inputValue as string);

     return (
          <S.InputWrapper $margintop={props.margintop} $marginbottom={props.marginbottom}>
               <S.Input
                    $variant={props.variant}
                    onInput={(e) => {
                         setInputValue(e.currentTarget.textContent);
                    }}
               ></S.Input>

               {!inputValue && <S.Placeholder $variant={props.variant}>{props.placeholder}</S.Placeholder>}
          </S.InputWrapper>
     );
});
