import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      primary700: string
      secondary: string
      secondary200: string
      tertiary: string
      tertiary100: string
      accent: string
      white: string
      black: string
      gray: string
      lightGray: string
      lightViolet: string
      violet: string
      warning: string
      error: string
      success: string
    }
    fontSize: {
      xxl: string
      xl: string
      l: string
      m: string
      s: string
      xs: string
      xxs: string
    }
    fontWeight: {
      bold: number
      medium: number
      regular: number
    }
  }
}
