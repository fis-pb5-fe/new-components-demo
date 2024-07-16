import type { Preview } from "@storybook/react";
import "./../src/styles/vendors/tio.scss";
import "./../src/styles/design-system/design-system.scss";
import "./../src/styles/index.scss";
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
