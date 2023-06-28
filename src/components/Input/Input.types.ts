import { IconType } from 'react-icons'

export type InputProps = {
  variant?: 'basic' | 'error'
  helpText?: string
  inputLabel?: string
  disabled?: boolean
  type?: 'text' | 'select' | 'password' | 'email' | 'name' | null
  name: string
  id: string
  defaultValue?: string | number | null
  trailingIcon?: IconType | null
  onClick?: () => void
  inputError?: string
}
