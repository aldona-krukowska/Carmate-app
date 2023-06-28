import styled, { css } from 'styled-components'

export const CarDetails = styled.div<{ isOpen: boolean }>`
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;

  ${({ isOpen }) =>
    isOpen &&
    css`
      max-height: 20rem;
      padding-top: 1.6rem;
    `}
`

export const CarPhoto = styled.img`
  width: 33rem;
  height: 22.6rem;
`
