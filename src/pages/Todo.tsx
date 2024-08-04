import React from "react";
import styled from "styled-components";
import { Task } from "../components/task/Task";

export const Todo = () => {
     return (
          <S.Wrapper>
               <S.H2>Сегодня</S.H2>
               <S.Span>2 задачи</S.Span>
               <Task />
          </S.Wrapper>
     );
};

const S = {
     Wrapper: styled.section``,
     H2: styled.h2``,
     Span: styled.span``,
};
