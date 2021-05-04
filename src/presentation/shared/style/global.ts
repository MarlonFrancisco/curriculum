import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    html, body, #app {
        width: 100vw;
        height: 100vh;
        overflow-x: hidden;
    }
`;
