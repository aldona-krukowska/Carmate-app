import { IconType } from 'react-icons'

export type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'text' | 'iconButton'
  buttonLabel?: string
  onClick?: () => void
  icon?: IconType | null
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset' | undefined
  isFlex?: number
}
