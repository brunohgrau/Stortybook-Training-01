import React from "react";
import { Decorator } from "@storybook/react";
import { ThemeProvider } from "@mui/material/styles";
import { globalTheme } from "../src/globalTheme";

export const withTheme: Decorator = (StoryFn) => (
  <>
    <ThemeProvider theme={globalTheme}>
      <StoryFn />
    </ThemeProvider>
  </>
);

export const withMaxWidth: Decorator = (StoryFn) => {
  return (
    <div
      style={{ maxWidth: "400px", margin: "auto", border: "1px solid black" }}
    >
      {StoryFn()}
    </div>
  );
};

export const globalDecorators = [withTheme];
