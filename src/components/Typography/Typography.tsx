import { Styled } from './Typography.styles'
import { TypographyType } from './Typography.types'
import React from 'react'

export const Typography = ({
  variant,
  textAlign,
  colored,
  weight = 'regular',
  children,
}: TypographyType) => {
  return variant === 'Heading' ? (
    <Styled.Heading textAlign={textAlign} colored={colored}>
      {children}
    </Styled.Heading>
  ) : variant === 'Title' ? (
    <Styled.Title textAlign={textAlign} colored={colored}>
      {children}
    </Styled.Title>
  ) : variant === 'Name' ? (
    <Styled.Name textAlign={textAlign} weight={weight}>
      {children}
    </Styled.Name>
  ) : variant === 'Caption' ? (
    <Styled.Caption textAlign={textAlign}>{children}</Styled.Caption>
  ) : variant === 'Paragraph' ? (
    <Styled.Paragraph textAlign={textAlign}>{children}</Styled.Paragraph>
  ) : variant === 'SubTitle' ? (
    <Styled.SubTitle textAlign={textAlign}>{children}</Styled.SubTitle>
  ) : variant === 'SmallTitle' ? (
    <Styled.SmallTitle textAlign={textAlign} colored={colored}>
      {children}
    </Styled.SmallTitle>
  ) : (
    <span>{children}</span>
  )
}
