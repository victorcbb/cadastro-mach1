import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: `'Roboto', sans-serif`,
    body: `'Roboto', sans-serif`,
  },
  styles: {
    global: {
      "::-webkit-scrollbar": {
        width: "1rem"
      },
      "::-webkit-scrollbar-thumb": {
        border: ".2rem solid transparent",
        backgroundClip: "padding-box",
        backgroundColor: "blue.500",
        borderRadius: "1rem",
      },
      html: {
        scrollBehavior: "smooth",
        overflowY: "overlay"
      },
      body: {
        bg: "blue.900",
        color: "gray.50",
      },
      header: {
        zIndex: "10",
        position: "fixed",
        top: "0",
        left: "0",
      }
    }
  }
})