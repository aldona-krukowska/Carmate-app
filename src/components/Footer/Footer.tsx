import { Typography } from '../Typography/Typography'
import { Styled } from './Footer.styles'
import React from 'react'

export const Footer = () => {
  return (
    <Styled.Footer>
      <Typography variant='Caption'>
        © 2023 | Zaprojektowane i zakodowane z ❤️ przez Agatę, Aldonę, Mariusza i Mateusza
      </Typography>
      <Typography variant='Caption'>Grupa Reactors | InfoShare Academy edycja 10</Typography>
    </Styled.Footer>
  )
}
