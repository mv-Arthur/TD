import React from "react";
import styled from "styled-components";
import { Task } from "../components/task/Task";
import { Form } from "../components/form/Form";
import { Container } from "../styled/GlobalStyle";

export const Todo = () => {
     console.log("painted");
     return (
          <S.Wrapper>
               <Container>
                    <S.H2>Сегодня</S.H2>
                    <S.Span>2 задачи</S.Span>
                    <Task />
                    <Form />
               </Container>
          </S.Wrapper>
     );
};

const S = {
     Wrapper: styled.section``,
     H2: styled.h2``,
     Span: styled.span``,
};
