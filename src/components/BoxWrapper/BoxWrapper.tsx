import { Styled } from './BoxWrapper.styles'
import { BoxWrapperProps } from './BoxWrapper.types'
import React from 'react'

export const StyledBoxWrapper = ({
  children,
  flexDirection,
  justifyContent = 'center',
  alignItems,
  padding,
  margin,
  maxWidth,
  width,
  gap,
  height,
}: BoxWrapperProps & React.HTMLProps<HTMLButtonElement>) => {
  return (
    <Styled.BoxWrapper
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      alignItems={alignItems}
      padding={padding}
      margin={margin}
      maxWidth={maxWidth}
      width={width}
      gap={gap}
      height={height}
    >
      {children}
    </Styled.BoxWrapper>
  )
}
