import styled from "styled-components";

export const S = {
     Wrapper: styled.div`
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          gap: 6px;
          width: 100%;
          border-bottom: 0.5px solid rgba(32, 32, 32, 0.1);
          padding-bottom: 8px;
     `,
     Header: styled.h3`
          font-size: 14px;
          font-weight: 400;
          line-height: 10px;
          display: inline-block;
          margin-bottom: 10px;
          transform: translateY(4px);
     `,
     Description: styled.p`
          font-size: 12px;
          font-weight: 300;
     `,
     TextWrap: styled.div`
          display: flex;
          flex-direction: column;
          width: 100%;
     `,
     Tags: styled.div`
          align-self: flex-end;
          font-weight: 400;
          font-size: 12px;
          color: ${(props) => props.theme.primary};
          display: flex;
          align-items: flex-start;
          gap: 5px;
          line-height: 18px;
     `,
     Svg: styled.svg`
          width: 14px;
          aspect-ratio: 1;
          fill: #666;
     `,
};
