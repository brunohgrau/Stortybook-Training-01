import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { globalTheme } from "./globalTheme";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <>
      <ThemeProvider theme={globalTheme}>
        <LandingPage />
      </ThemeProvider>
    </>
  );
}

export default App;
