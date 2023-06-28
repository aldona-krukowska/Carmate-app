import styled from 'styled-components'
import { IconWrapperProps } from './IconWrapper.types'

export const IconWrapper = styled.span<IconWrapperProps>`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.4rem;
  height: 2.4rem;
  color: ${({ theme }) => theme.colors.accent};
`

export const Styled = { IconWrapper }
