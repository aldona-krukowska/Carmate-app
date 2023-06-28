import styled, { css } from 'styled-components'
import { InputProps } from './Input.types'
import { IconWrapper } from '../IconWrapper/IconWrapper.styles'

const InputWrapper = styled.div`
  position: relative;
  height: fit-content;
  flex-grow: 1;
`

const TrailingIcon = styled(IconWrapper)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 1.6rem;
  transition: transform 0.3s ease-in-out;
`

const HelpText = styled.div<{ variant: string | undefined }>`
  font-size: ${({ theme }) => theme.fontSize.xxs};
  position: absolute;
  top: calc(100% + 0.4rem);
  padding: 0 1.6rem;

  ${({ variant }) =>
    variant === 'basic' &&
    css`
      color: ${({ theme }) => theme.colors.accent};
    `}

  ${({ variant }) =>
    variant === 'error' &&
    css`
      color: ${({ theme }) => theme.colors.error};
    `}
`
const InputError = styled.div`
  font-size: ${({ theme }) => theme.fontSize.xxs};
  position: absolute;
  top: calc(100% + 0.4rem);
  padding: 0 1.6rem;
  color: ${({ theme }) => theme.colors.error};
`
const Input = styled.input<InputProps>`
  display: flex;
  align-items: flex-start;
  flex-grow: 1;
  padding: 0.8rem 1.6rem;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  min-width: 28rem;
  height: 5.6rem;
  width: 100%;
  border-radius: 4px;
  line-height: 1rem;
  cursor: text;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.accent};
  border: 1px solid ${({ theme }) => theme.colors.gray};

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.accent};
  }

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.secondary};
    outline: none;
  }

  &:invalid {
    border: 2px solid ${({ theme }) => theme.colors.error};
  }
`

const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.accent};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 1.6rem;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  pointer-events: none;
  transition: top 0.3s, font-size 0.3s;

  ${Input}:focus ~ &, ${Input}:not(:placeholder-shown) ~ & {
    top: 0;
    left: 1.2rem;
    font-size: ${({ theme }) => theme.fontSize.xs};
    padding: 0 0.4rem;
    background-color: ${({ theme }) => theme.colors.white};
  }

  ${Input}:invalid ~ & {
    color: ${({ theme }) => theme.colors.error};
  }
`
export const Styled = {
  InputWrapper,
  Input,
  Label,
  HelpText,
  TrailingIcon,
  InputError,
}
