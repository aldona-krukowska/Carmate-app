import { Styled } from './IconCarWraper.styles'
import { IconCarWrapperProps } from './IconCarWraper.types'
import React from 'react'

export const IconCarWrapper = ({ children }: IconCarWrapperProps) => {
  return <Styled.IconCarWrapper>{children}</Styled.IconCarWrapper>
}
