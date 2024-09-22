import React from "react";
import { S } from "./input.styled";
import { CustomChangeEvent, InputErrorType, useInputValue } from "../../hooks/useInputValue/useInputValue";

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

export const Input: React.FC<PropsType> = React.memo((props) => {
     const { ref, value } = useInputValue(props.limit, props.variant, props.onChange);

     return (
          <S.InputWrapper $margintop={props.margintop} $marginbottom={props.marginbottom}>
               <S.Input
                    ref={ref}
                    // onFocus={onFoucusHandler}
                    $variant={props.variant}
               >
                    {value}
               </S.Input>
               {!value && <S.Placeholder $variant={props.variant}>{props.placeholder}</S.Placeholder>}
          </S.InputWrapper>
     );
});
