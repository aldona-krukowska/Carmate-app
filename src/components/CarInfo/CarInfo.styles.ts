import styled, { css } from 'styled-components'

export const CarInfoDetails = styled.div<{ isOpen: boolean }>`
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;
  width: 100%;

  ${({ isOpen }) =>
    isOpen &&
    css`
      max-height: 60rem;
      padding-bottom: 1.6rem;
    `}
`

export const Divider = styled.div`
  width: 0.1rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.lightGray};
  margin: 0 1.6rem;
`
