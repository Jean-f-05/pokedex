import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
        pokemonWhite: "#FFFDF9",
        pokemonRed: "#FF0000",
        pokemonPink: "#FCE2DB",

    },
    fonts: ["sans-serif", "Roboto"],
    fontSizes: {
        small: "1em",
        medium: "2em",
        large: "3em"
    }

};

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;