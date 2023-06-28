import React from 'react'
import { Styled } from './Input.styles'
import { InputProps } from './Input.types'

export const StyledInput = ({
  variant,
  disabled = false,
  inputLabel,
  helpText,
  type,
  name,
  id,
  defaultValue,
  trailingIcon: Icon = null,
  onClick,
  inputError,
}: InputProps & React.HTMLProps<HTMLInputElement>) => {
  return (
    <Styled.InputWrapper>
      <Styled.Input
        disabled={disabled}
        type={type}
        name={name}
        id={id}
        placeholder=' '
        defaultValue={defaultValue}
      />
      {Icon && (
        <Styled.TrailingIcon onClick={onClick}>
          <Icon />
        </Styled.TrailingIcon>
      )}

      <Styled.Label htmlFor={id}>{inputLabel}</Styled.Label>
      {helpText && <Styled.HelpText variant={variant}>{helpText}</Styled.HelpText>}
      {inputError && <Styled.InputError>{inputError}</Styled.InputError>}
    </Styled.InputWrapper>
  )
}
