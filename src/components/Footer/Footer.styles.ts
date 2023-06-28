import styled from 'styled-components'

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 3.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.lightGray};
  color: ${({ theme }) => theme.colors.accent};
  flex-direction: row;
  padding: 0 3.2rem;
  z-index: 2;
`

export const Styled = { Footer }
