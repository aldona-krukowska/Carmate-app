import styled from 'styled-components'
import { ContainerProps } from './Container.types'

const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  border-radius: ${({ cRadius }) => (cRadius ? '0.4rem' : 'none')};
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
  background-color: white;
  height: ${({ cHeight }) => (cHeight ? '100%' : 'auto')};
  width: ${({ cWidth }) => (cWidth ? '100%' : 'fit-content')};
`

export const Styled = { Container }
