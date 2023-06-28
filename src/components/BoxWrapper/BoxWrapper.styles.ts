import styled, { css } from 'styled-components'
import { BoxWrapperProps } from './BoxWrapper.types'

const BoxWrapper = styled.div<BoxWrapperProps>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  max-width: ${({ maxWidth }) => maxWidth};
  width: ${({ width }) => width};
  gap: ${({ gap }) => gap};
  height: ${({ height }) => height}; 
`

export const Styled = { BoxWrapper }
