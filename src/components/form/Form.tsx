import React from "react";
import styled from "styled-components";
import { CustomChangeEvent, Input, InputErrorType } from "../input/Input";

export const Form: React.FC = React.memo(() => {
     const [error, setError] = React.useState<InputErrorType>({
          text: "",
          status: false,
     });

     const onChangeHandle = (event: CustomChangeEvent) => {
          setError(event.error);
     };

     return (
          <S.Wrapper>
               <Input
                    limit={3}
                    onChange={onChangeHandle}
                    variant="name"
                    placeholder="Название задачи"
                    marginbottom={10}
               />
               <Input limit={3} onChange={onChangeHandle} variant="descr" placeholder="Описание" />

               {error.status && <S.Error>{error.text}</S.Error>}
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
