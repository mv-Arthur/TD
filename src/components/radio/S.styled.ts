import styled from "styled-components";

export const S = {
     Radio: styled.div`
          border-radius: 50%;
          border: 1px solid rgb(153, 153, 153);
          width: 18px;
          aspect-ratio: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 300ms;
          &.clicked {
               transform: scale(1.3);
          }
     `,

     Svg: styled.svg`
          stroke: rgba(153, 153, 153, 0);
          width: 90%;
          aspect-ratio: 1;
          transition: stroke 0.3s;
          transform: scale(1);
          &:hover {
               stroke: rgba(153, 153, 153, 10);
          }
     `,
};
