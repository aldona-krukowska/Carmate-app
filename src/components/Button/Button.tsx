import { Styled } from './Button.styles'
import { ButtonProps } from './Button.types'
import { MdLogout } from 'react-icons/md'
import React from 'react'

export const StyledButton = ({
  buttonLabel,
  variant = 'primary',
  onClick,
  icon: Icon = MdLogout,
  disabled = false,
  type,
  isFlex,
}: ButtonProps & React.HTMLProps<HTMLButtonElement>) => {
  return (
    <Styled.Button
      variant={variant}
      onClick={onClick}
      disabled={disabled}
      type={type}
      isFlex={isFlex}
    >
      {buttonLabel}
      {Icon && (
        <Styled.IconWrapper>
          <Icon />
        </Styled.IconWrapper>
      )}
    </Styled.Button>
  )
}
