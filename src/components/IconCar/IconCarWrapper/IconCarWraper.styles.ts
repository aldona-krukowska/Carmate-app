import styled from 'styled-components'
import { IconCarWrapperProps } from './IconCarWraper.types'

export const IconCarWrapper = styled.span<IconCarWrapperProps>`
  /* font-size: ${({ theme }) => theme.fontSize.xxl}; */
  font-size: 4rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  align-items: center;
  justify-content: center;
  width: 33rem;
  height: 22.6rem;
  color: ${({ theme }) => theme.colors.accent};
  background-color: ${({ theme }) => theme.colors.lightGray};
`

export const Styled = { IconCarWrapper }
