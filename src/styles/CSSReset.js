import { createGlobalStyle } from 'styled-components'

export const CSSReset = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    
    html,
    body,
    #root {
        width: 100%;
        height: 100vh;
        margin: 0;
        padding: 0;
    }

`;