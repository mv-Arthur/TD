import React from "react";
import styled from "styled-components";
import { Input } from "../input/Input";

export const Form: React.FC = React.memo(() => {
     return (
          <S.Wrapper>
               <Input
                    onChange={(str) => console.log(str)}
                    variant="name"
                    placeholder="Название задачи"
                    marginbottom={10}
               />
               <Input onChange={(str) => console.log(str)} variant="descr" placeholder="Описание" />
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
}
