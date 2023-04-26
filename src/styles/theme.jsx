import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
        pokemonWhite: "#FFFDF9",
        pokemonRed: "#FF0000",
        pokemonPink: "#FCE2DB",
        pokemonBlue: "#3B4CCA",
        pokemonYellow: "#ffcb05"

    },
    fonts: ["sans-serif", "Roboto"],
    fontSizes: {
        xsmall: "1.2rem",
        small: "1.4rem",
        xmedium: "1.8rem",
        medium: "2rem",
        large: "2.2rem",
        xlarge: "4rem"
    },
    fontWeight: {
        regular: 500,
        bold: 600,
        xbold: 700,
        xlbold: 800
    }

};

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;