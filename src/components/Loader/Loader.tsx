import { StyledBoxWrapper } from '../BoxWrapper/BoxWrapper'
import { Styled } from './Loader.styles'
import React from 'react'

export const Loader = () => {
  return (
    <StyledBoxWrapper alignItems='center' justifyContent='center' height='100vh' width='100%'>
      <Styled.LoaderLines />
      <Styled.LoaderSpinner />
    </StyledBoxWrapper>
  )
}
