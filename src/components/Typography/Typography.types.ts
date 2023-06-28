import { ReactNode } from 'react'

export type TypographyType = {
  variant: 'Heading' | 'Title' | 'SubTitle' | 'SmallTitle' | 'Name' | 'Paragraph' | 'Caption'
  textAlign?: string
  children: ReactNode
  colored?: boolean
  weight?: string
}

export type TypographyProps = {
  textAlign?: string
  colored?: boolean
  weight?: string
}
