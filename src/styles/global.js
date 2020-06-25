import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }
    body{
        background: #fff;
    }
    input,
    button{
        outline: 0;
    }
    button{
        cursor: pointer;
    }
`;