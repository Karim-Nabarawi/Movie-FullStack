import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
    html {
        &::-webkit-scrollbar{
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb {
            background-color: darkgrey;
        }
        &::-webkit-scrollbar-track {
            background: white;
        }
    }
    body {
        background: #e9e9e9;
    }

    form > a {
        margin-left: 10px;
    }
`;

export default GlobalStyles;
