import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const CarAddButton = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  justify-content: center;
  border-radius: 0.4rem;
  padding: 0.8rem 1.6rem;
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  gap: 1rem;
  font-weight: medium;
  line-height: 2.4rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.violet};
  border: 0.1rem dashed ${({ theme }) => theme.colors.violet};
  width: 32.9rem;
  height: 9.3rem;
`
