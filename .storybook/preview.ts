import { globalDecorators } from "./decorators";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

export const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};

export const decorators = globalDecorators;
