import { createGlobalStyle } from "styled-components";
import { DefaultTheme } from "./DefaultThemeInterface";

export const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    background-color: ${props => props.theme.body};
    font-family: 'Nunito Sans', sans-serif;
}

`;
