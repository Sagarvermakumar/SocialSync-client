// theme/index.js
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: {
      50: "#f2e7fe",
      100: "#dbb4fe",
      200: "#c281fd",
      300: "#a94efc",
      400: "#901bfb",
      500: "#7601e2",
      600: "#5d01b0",
      700: "#44007e",
      800: "#2b004c",
      900: "#12001b",
    },
    bg: {
      primary: "#ffffff",
    },
  },
  styles: {
    global: {
      body: {
        bg: "bg.primary",
        color: "primary.800",
      },
    },
  },
});

export default theme;

// Example usage in a component
// <Box bg="primary.500" color="white">Primary Button</Box>
