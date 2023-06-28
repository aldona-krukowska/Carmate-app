import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Divider = styled.div`
  width: 0.1rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.lightGray};
  margin: 0 1.6rem;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
`

export const StyledReviewLink = styled(StyledLink)`
  display: flex;
`
