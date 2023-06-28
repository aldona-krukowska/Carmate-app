import styled, { css } from 'styled-components'
import { ButtonProps } from './Button.types'

const Button = styled.button<ButtonProps>`
  flex: ${({ isFlex }) => (isFlex ? isFlex : null)};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.4rem;
  padding: 0.8rem 1.6rem;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  gap: 1rem;
  text-transform: uppercase;
  line-height: 2.4rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  ${({ variant }) =>
    variant === 'primary' &&
    css`
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.white};
      border: none;

      &:hover:not(:disabled) {
        background-color: ${({ theme }) => theme.colors.primary700};
      }
    `}

  ${({ variant }) =>
    variant === 'secondary' &&
    css`
      background-color: ${({ theme }) => theme.colors.secondary};
      color: ${({ theme }) => theme.colors.white};
      border: none;

      &:hover:not(:disabled) {
        background-color: ${({ theme }) => theme.colors.secondary200};
      }
    `}

    ${({ variant }) =>
    variant === 'tertiary' &&
    css`
      background-color: ${({ theme }) => theme.colors.tertiary};
      color: ${({ theme }) => theme.colors.black};
      border: none;

      &:hover:not(:disabled) {
        background-color: ${({ theme }) => theme.colors.tertiary100};
      }
    `}

    ${({ variant }) =>
    variant === 'ghost' &&
    css`
      background-color: transparent;
      color: ${({ theme }) => theme.colors.primary};
      border: 1px solid ${({ theme }) => theme.colors.primary};
    `}

    ${({ variant }) =>
    variant === 'text' &&
    css`
      background-color: transparent;
      color: ${({ theme }) => theme.colors.black};
      border: none;
      text-transform: none;

      &:hover:not(:disabled) {
        background-color: ${({ theme }) => theme.colors.tertiary};
      }
    `}

    ${({ variant }) =>
    variant === 'iconButton' &&
    css`
      background-color: transparent;
      color: ${({ theme }) => theme.colors.black};
      border: none;
      text-transform: none;
      border-radius: 50%;
      padding: 16px;
      font-size: 18px;
      color: ${({ theme }) => theme.colors.accent};

      &:hover:not(:disabled) {
        background-color: ${({ theme }) => theme.colors.lightGray};
        color: ${({ theme }) => theme.colors.primary};
      }
    `}

    &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`
const IconWrapper = styled.span`
  font-size: ${({ theme }) => theme.fontSize.l};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.4rem;
  height: 2.4rem;
`

export const Styled = { Button, IconWrapper }
