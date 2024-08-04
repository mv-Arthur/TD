import React from "react";
import styled from "styled-components";
import { Radio } from "../radio/Radio";

export const Task = () => {
     return (
          <S.Wrapper>
               <Radio />
          </S.Wrapper>
     );
};

const S = {
     Wrapper: styled.div``,
     Header: styled.h3``,
     Description: styled.p``,
};
