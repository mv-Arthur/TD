import React from "react";
import styled from "styled-components";
import { Input } from "../input/Input";

export const Form: React.FC = React.memo(() => {
     const [error, setError] = React.useState("");

     return (
          <S.Wrapper>
               <Input
                    options={{ limit: 500 }}
                    onChange={(str) => console.log(str)}
                    variant="name"
                    placeholder="Название задачи"
                    marginbottom={10}
               />
               <Input
                    options={{ limit: 16383 }}
                    onChange={(str) => console.log(str)}
                    variant="descr"
                    placeholder="Описание"
               />

               {error && <S.Error>{error}</S.Error>}
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
