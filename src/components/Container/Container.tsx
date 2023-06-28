import { Styled } from './Container.styles'
import { ContainerProps } from './Container.types'
import React from 'react'

export const Container = ({ cRadius, cHeight, cWidth, children }: ContainerProps) => {
  return (
    <Styled.Container cRadius={cRadius} cHeight={cHeight} cWidth={cWidth}>
      {children}
    </Styled.Container>
  )
}
