import styled from "styled-components";

export const S = {
     Radio: styled.div`
          border-radius: 50%;
          border: 1px solid ${(props) => props.theme.primary};
          width: 18px;
          height: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 300ms;
          &.clicked {
               transform: scale(1.3);
          }
     `,

     Svg: styled.svg`
          stroke: rgba(102, 102, 102, 0);
          width: 90%;
          height: 90%;
          transition: stroke 0.3s;
          transform: scale(1);
          &:hover {
               stroke: ${(props) => props.theme.primary};
          }
     `,
};
