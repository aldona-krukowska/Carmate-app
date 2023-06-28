import styled from 'styled-components'

const Logo = styled.h1`
  font-size: 3.2rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  text-transform: lowercase;
  font-weight: ${({ theme }) => theme.fontWeight.medium};

  span {
    color: ${({ theme }) => theme.colors.violet};
  }
`

export const Styled = { Logo }
