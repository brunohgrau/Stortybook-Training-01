import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppAppBar from "../components/AppBar/AppAppBar";
import Hero from "../components/Hero/Hero";
import getLPTheme from "../themes/getLPTheme";

const LandingPage = () => {
  const [mode, setMode] = useState("light");
  const LPtheme = createTheme(getLPTheme(mode));
  return (
    <>
      <ThemeProvider theme={LPtheme}>
        <CssBaseline />
        <AppAppBar />
        <Hero />
        <Box sx={{ bgcolor: "background.default" }}></Box>
      </ThemeProvider>
    </>
  );
};

export default LandingPage;
