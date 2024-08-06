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
               </S.TextWrap>
          </S.Wrapper>
     );
};

const S = {
     Wrapper: styled.div``,
     Header: styled.h3``,
     Description: styled.p``,
     TextWrap: styled.div``,
};
