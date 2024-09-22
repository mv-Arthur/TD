import React from "react";
import styled from "styled-components";
import { Input } from "../input/Input";
import { useErrorPriority } from "../../hooks/useError/useError";
import { CustomChangeEvent, InputErrorType } from "../../hooks/useInputValue/useInputValue";

const useError = () => {
     const [currentError, setCurrentError] = React.useState<InputErrorType | null>(null);
     const stack: CustomChangeEvent[] = React.useMemo(() => [], []);

     const restocking = (changeEvent: CustomChangeEvent) => {
          console.log(changeEvent);
          stack.push(changeEvent);
          setCurrentError(changeEvent.error);
     };

     const removal = (inputId: string) => {
          for (let i = 0; i < stack.length; i++) {
               if (stack[i].inputId === inputId) {
                    stack.splice(i, 1);
                    break;
               }
          }
          const index = Math.floor(Math.random() * stack.length);
          if (stack[index]) setCurrentError(stack[index].error);
     };

     const changePriority = (inputId: string) => {};

     console.log(stack);

     return { currentError, restocking, removal };
};

export const Form: React.FC = React.memo(() => {
     // const [error, setError] = React.useState<InputErrorType>();
     // const { initialize, errors, setPriority } = useErrorPriority();

     const { currentError, restocking, removal } = useError();
     const onChangeHandle = (event: CustomChangeEvent) => {
          // setError(event.error)
          if (event.error) restocking(event);
          else removal(event.inputId);

          // console.log(event);
     };
     console.log(currentError);
     const onFocusHandle = (error: InputErrorType) => {
          // setError(error);
          // setPriority(error.id);
          // console.log(error);
     };

     return (
          <S.Wrapper>
               <Input
                    limit={3}
                    onChange={onChangeHandle}
                    variant="name"
                    placeholder="Название задачи"
                    marginbottom={10}
                    onFocus={onFocusHandle}
               />
               <Input
                    limit={3}
                    onChange={onChangeHandle}
                    variant="descr"
                    placeholder="Описание"
                    onFocus={onFocusHandle}
               />

               {/* {error?.status && <S.Error>{error?.text}</S.Error>} */}
          </S.Wrapper>
     );
});

class S {
     static Wrapper = styled.div`
          width: 100%;
          min-height: 160px;
          padding: 10px;
          border: 1px solid ${(props) => props.theme.line};
          border-radius: 10px;
     `;

     static Error = styled.span`
          color: red;
     `;
}
