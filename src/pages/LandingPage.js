import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import getLPTheme from "../themes/getLPTheme";
import AppAppBar from "../components/AppBar/AppAppBar";
import Hero from "../components/Hero/Hero";
import LogoCollection from "../components/LogoCollection/LogoCollection";
import Features from "../components/Features/Features";
import Testemonials from "../components/Testemonials/Testemonials";
import Highlights from "../components/Highlights/Highlights";
import Pricing from "../components/Pricing/Pricing";
import Faq from "../components/FAQ/Faq";
import Footer from "../components/Footer/Footer";

const LandingPage = () => {
  const [mode, setMode] = useState("light");
  const LPtheme = createTheme(getLPTheme(mode));
  return (
    <>
      <ThemeProvider theme={LPtheme}>
        <CssBaseline />
        <AppAppBar />
        <Hero />
        <Box sx={{ bgcolor: "background.default" }}>
          <LogoCollection />
          <Features />
          <Divider />
          <Testemonials />
          <Divider />
          <Highlights />
          <Divider />
          <Pricing />
          <Divider />
          <Faq />
          <Divider />
          <Footer />
        </Box>
      </ThemeProvider>
    </>
  );
};

export default LandingPage;
