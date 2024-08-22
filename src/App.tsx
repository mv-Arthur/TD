import { GlobalStyle } from "./styled/GlobalStyle";
import { Todo } from "./pages/Todo";
import { ThemeProvider } from "styled-components";
import { theme } from "./styled/theme";

export const App = () => {
     return (
          <ThemeProvider theme={theme}>
               <GlobalStyle />
               <Todo />
          </ThemeProvider>
     );
};
