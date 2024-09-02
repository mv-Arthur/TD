import React from "react";
import styled from "styled-components";
import { CustomChangeEvent, Input, InputErrorType } from "../input/Input";

export const Form: React.FC = React.memo(() => {
     const [errors, setErrors] = React.useState<InputErrorType[]>([]);

     const onChangeHandle = (event: CustomChangeEvent) => setErrors([...errors, event.error]);

     const onFocusHandle = (error: InputErrorType) => setErrors([...errors, error]);

     return (
          <S.Wrapper>
               <Input
                    limit={3}
                    onChange={onChangeHandle}
                    variant="name"
                    placeholder="Название задачи"
                    marginbottom={10}
                    onFocus={onFocusHandle}
               />
               <Input
                    limit={3}
                    onChange={onChangeHandle}
                    variant="descr"
                    placeholder="Описание"
                    onFocus={onFocusHandle}
               />

               {errors[0].status && <S.Error>{errors[0].text}</S.Error>}
          </S.Wrapper>
     );
});

class S {
     static Wrapper = styled.div`
          width: 100%;
          min-height: 160px;
          padding: 10px;
          border: 1px solid ${(props) => props.theme.line};
          border-radius: 10px;
     `;

     static Error = styled.span`
          color: red;
     `;
}
