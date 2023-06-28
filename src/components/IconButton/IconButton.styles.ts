import styled, { css } from 'styled-components'
import { IconButtonProps } from './IconButton.types'

export const IconButton = styled.button<IconButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.7rem;
  width: 5.6rem;
  height: 5.6rem;
  font-size: ${({ theme }) => theme.fontSize.xxl};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border: none;
  color: ${({ theme }) => theme.colors.primary700};
  border-radius: ${({ radius }) => (radius ? '50%' : 'none')};

  ${({ variant }) =>
    variant === 'default' &&
    css`
      background-color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.accent};

      &:hover:not(:disabled) {
        background-color: ${({ theme }) => theme.colors.tertiary};
      }
    `}

  ${({ variant }) =>
    variant === 'active' &&
    css`
      background-color: ${({ theme }) => theme.colors.lightViolet};
      color: ${({ theme }) => theme.colors.primary};

      &:hover:not(:disabled) {
        background-color: ${({ theme }) => theme.colors.tertiary};
      }
    `}

    ${({ variant }) =>
    variant === 'error' &&
    css`
      background-color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.error};

      &:hover:not(:disabled) {
        background-color: ${({ theme }) => theme.colors.tertiary};
      }
    `}
`

export const Styled = { IconButton }
