import { createGlobalStyle } from "styled-components";
import BackgroundImg from "../assets/img/background.png";
import CalculatorFont from "../assets/fonts/Calculator.ttf";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "Calculator";
        src: url(${CalculatorFont});
    }
    
    *{
        border: 0;
        padding: 0;
        margin: 0;
        list-style: none;
        text-decoration: none;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    body{
        background-image: url(${BackgroundImg});
        background-position: center;
        background-repeat: no-repeat;
        display: flex;
        height: 100vh;
        align-items: center;
        justify-content: center;
    }
`;
