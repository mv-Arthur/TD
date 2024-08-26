import styled from "styled-components";
import { VariantType } from "./Input";

export class S {
     static TextStyle = styled.div<{ $variant: VariantType }>`
          font-size: ${(props) => (props.$variant === "name" ? 14 : 13)}px;
     `;

     static Input = styled(this.TextStyle).attrs({ contentEditable: true, suppressContentEditableWarning: true })`
          resize: none;
          border: none;
          background: none;
          outline: none;
          cursor: text;
     `;

     static Placeholder = styled(this.TextStyle)`
          position: absolute;
          top: 0;
          left: 0;
          z-index: -1;
          color: ${(props) => props.theme.light};
     `;

     static InputWrapper = styled.div<{ $margintop?: number; $marginbottom?: number }>`
          position: relative;
          margin-top: ${(props) => props.$margintop}px;
          margin-bottom: ${(props) => props.$marginbottom}px;
     `;
}
