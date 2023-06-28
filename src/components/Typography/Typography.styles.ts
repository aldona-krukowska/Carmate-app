import styled from 'styled-components'
import { TypographyProps } from './Typography.types'

const Heading = styled.h2<TypographyProps>`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  text-align: ${({ textAlign }) => textAlign};
  color: ${({ colored, theme }) => (colored ? theme.colors.primary : theme.colors.black)};
`
const Title = styled.h3<TypographyProps>`
  font-size: ${({ theme }) => theme.fontSize.xl};
  text-align: ${({ textAlign }) => textAlign};
  color: ${({ colored, theme }) => (colored ? theme.colors.primary : theme.colors.black)};
`

const SmallTitle = styled.h3<TypographyProps>`
  font-size: ${({ theme }) => theme.fontSize.m};
  text-align: ${({ textAlign }) => textAlign};
  color: ${({ colored, theme }) => (colored ? theme.colors.primary : theme.colors.accent)};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`

const SubTitle = styled.h3<TypographyProps>`
  font-size: ${({ theme }) => theme.fontSize.l};
  text-align: ${({ textAlign }) => textAlign};
`

const Name = styled.p<TypographyProps>`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ weight }) => weight};
  text-align: ${({ textAlign }) => textAlign};
`
const Paragraph = styled.p<TypographyProps>`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: 150%;
  color: ${({ theme }) => theme.colors.accent};
  text-align: ${({ textAlign }) => textAlign};
`

export const Caption = styled.p<TypographyProps>`
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.colors.gray};
  text-align: ${({ textAlign }) => textAlign};
`

export const Styled = { Heading, Title, SubTitle, SmallTitle, Name, Caption, Paragraph }
