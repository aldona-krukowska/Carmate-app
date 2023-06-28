import { IconButtonProps } from './IconButton.types'
import { Styled } from './IconButton.styles'
import React from 'react'

export const StyledIconButton = ({
  onClick,
  icon: Icon,
  variant = 'default',
  radius,
}: IconButtonProps & React.HTMLProps<HTMLButtonElement>) => {
  return (
    <Styled.IconButton onClick={onClick} variant={variant} radius={radius}>
      {Icon && <Icon />}
    </Styled.IconButton>
  )
}
