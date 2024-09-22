import { renderHook, act } from "@testing-library/react";
import { useErrorPriority } from "./useError";

describe("useError hook testing all functions", () => {
     const testingKit = [
          { status: false, text: "first", id: "1" },
          { status: false, text: "second", id: "2" },
          { status: false, text: "third", id: "3" },
     ];

     test("initialize", () => {
          const { result } = renderHook(() => useErrorPriority());
          // act(() => {
          //      // result.current.initialize(testingKit[0]);
          //      // result.current.initialize(testingKit[1]);
          //      // result.current.initialize(testingKit[2]);
          // });
          expect(result.current.errors.length).toBe(3);
          expect(result.current.errors[1].text).toBe("second");
     });

     test("setPriority", () => {
          // const { result } = renderHook(() => useErrorPriority(testingKit));
          // act(() => {
          //      result.current.setPriority("2");
          // });
          // console.log(result.current.errors);
          // expect(result.current.errors[0].id).toBe("2");
          // expect(result.current.errors[1].id).toBe("1");
     });
});
