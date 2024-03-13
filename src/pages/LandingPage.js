import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppAppBar from "../components/AppBar/AppAppBar";

const LandingPage = () => {
  return (
    <>
      <CssBaseline />
      <AppAppBar />
    </>
  );
};

export default LandingPage;
