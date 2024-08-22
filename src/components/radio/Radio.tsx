import React from "react";
import sprite from "../../sprite.svg";
import { S } from "./radio.styled";

export const Radio: React.FC = React.memo(() => {
     const [isCheked, setIsCheked] = React.useState(false);

     const handleClick = () => {
          setIsCheked(true);
          setTimeout(() => setIsCheked(false), 300);
     };

     return (
          <S.Radio className={isCheked ? "clicked" : ""} onClick={handleClick}>
               <S.Svg viewBox="0 -0.5 25 25" fill="none">
                    <use xlinkHref={`${sprite}#tick`} />
               </S.Svg>
          </S.Radio>
     );
});
