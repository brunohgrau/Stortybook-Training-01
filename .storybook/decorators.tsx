import React from "react";
import { Decorator } from "@storybook/react";

export const withMaxWidth: Decorator = (StoryFn) => {
  return (
    <div
      style={{ maxWidth: "400px", margin: "auto", border: "1px solid black" }}
    >
      {StoryFn()}
    </div>
  );
};

export const globalDecorators = [];
