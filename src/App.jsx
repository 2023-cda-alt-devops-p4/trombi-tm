import React from "react";
import styled, { ThemeProvider } from "styled-components";

import * as themes from "./themes";
import HomePage from "./pages/HomePage";

const App = () => {


  return (
    <ThemeProvider theme={themes.Default}>
      <AppContainer>
        <HomePage />
      </AppContainer>
    </ThemeProvider>
  )
}

export default App;

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  height: auto;
  display: flex;
  flex-direction: column;
`;