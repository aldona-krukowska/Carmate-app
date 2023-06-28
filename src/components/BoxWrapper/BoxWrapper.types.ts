import { ReactNode } from 'react'
import { CSSProperties } from 'styled-components'

export type BoxWrapperProps = {
  children: ReactNode
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-evenly'
  alignItems?: 'flex-start' | 'center' | 'flex-end'
  padding?: CSSProperties['padding']
  margin?: CSSProperties['margin']
  maxWidth?: CSSProperties['maxWidth']
  width?: CSSProperties['width']
  gap?: CSSProperties['gap']
  height?: CSSProperties['height']
}
