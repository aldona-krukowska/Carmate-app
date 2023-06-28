import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const NavLinkButton = styled(NavLink)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.8rem;
  padding: 0 1.6rem;
  color: ${({ theme }) => theme.colors.accent};
  max-width: 24.4rem;
  width: 100%;
  height: 5.6rem;
  border: none;
  border-radius: 4px;
  text-decoration: none;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: ${({ theme }) => theme.fontSize.m};

  &:hover {
    background-color: ${({ theme }) => theme.colors.tertiary};
    transition: all 0.2s ease-in-out;
  }
  &.active {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.lightViolet};
    transition: all 0.2s ease-in-out;

    svg {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`
