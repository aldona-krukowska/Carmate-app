import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyles = createGlobalStyle(
  ({ theme }) => css`
    html {
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-size: 62.5%;
    }
    *,
    *:before,
    *:after {
      box-sizing: inherit;
      margin: 0;
      padding: 0;
      font-family: 'Roboto', sans-serif;
    }
    body {
      background-color: ${theme.colors.white};
      color: ${theme.colors.black};
      font-size: ${theme.fontSize.m};
      font-weight: ${theme.fontWeight.medium};
      min-height: 100vh;
      height: 100%;
    }
  `,
)
