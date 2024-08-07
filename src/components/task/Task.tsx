import React from "react";
import styled from "styled-components";
import { Radio } from "../radio/Radio";

export const Task = () => {
     return (
          <S.Wrapper>
               <Radio />
               <S.TextWrap>
                    <S.Header>Дожить</S.Header>
                    <S.Description>Хотя бы до обеда</S.Description>
                    <S.Tags>Входящие</S.Tags>
               </S.TextWrap>
          </S.Wrapper>
     );
};

const S = {
     Wrapper: styled.div`
          display: flex;
          gap: 6px;
     `,
     Header: styled.h3`
          color: rgb(32, 32, 32);
          font-size: 14px;
          font-weight: 400;
     `,
     Description: styled.p``,
     TextWrap: styled.div``,
     Tags: styled.div``,
};
