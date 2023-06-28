import { IconType } from 'react-icons'

export type IconButtonProps = {
  icon?: IconType | null
  onClick?: () => void
  variant?: 'default' | 'active' | 'inactive' | 'error'
  radius?: boolean
}
