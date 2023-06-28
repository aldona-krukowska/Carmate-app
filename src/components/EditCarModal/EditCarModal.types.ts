import { IconType } from 'react-icons'

export interface EditCarModalProps {
  showEditCarModal: boolean
  setShowEditCarModal: React.Dispatch<React.SetStateAction<boolean>>
  icon?: IconType | null
}

export type ImageInputProps = {
  value: string
}
