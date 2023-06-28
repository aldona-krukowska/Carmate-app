import { Styled } from './IconWrapper.styles'
import { IconWrapperProps } from './IconWrapper.types'
import React from 'react'

export const IconWrapper = ({ children }: IconWrapperProps) => {
  return <Styled.IconWrapper>{children}</Styled.IconWrapper>
}
