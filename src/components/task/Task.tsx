import { Radio } from "../radio/Radio";
import sprite from "../../sprite.svg";
import { S } from "./task.styled";
import React from "react";

export const Task: React.FC = React.memo(() => {
     return (
          <S.Wrapper>
               <Radio />
               <S.TextWrap>
                    <S.Header>Дожить</S.Header>
                    <S.Description>Хотя бы до обеда</S.Description>
                    <S.Tags>
                         Входящие{" "}
                         <S.Svg>
                              <use xlinkHref={`${sprite}#incoming`} />
                         </S.Svg>
                    </S.Tags>
               </S.TextWrap>
          </S.Wrapper>
     );
});
