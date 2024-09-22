import React from "react";
import { InputErrorType } from "../useInputValue/useInputValue";

export const useErrorPriority = (initialValue: InputErrorType[] = []) => {
     const [errors, setErrors] = React.useState<InputErrorType[]>(initialValue);

     const initialize = (error: InputErrorType) => setErrors((prev) => [...prev, error]); //must be called once

     const setPriority = (id: string) => {
          setErrors((prev) => {
               if (!prev.length) return prev;

               const copy = [...prev];

               for (let i = 0; i < copy.length; i++) {
                    if (copy[i].id === id) {
                         const founded = copy[i];
                         const zero = copy[0];
                         copy[0] = founded;
                         copy[i] = zero;
                         // console.log(copy);
                         return copy;
                    }
               }

               return prev;
          });
     };

     return { initialize, errors, setPriority };
};
