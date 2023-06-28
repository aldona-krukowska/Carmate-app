interface Option {
  value: string
  label: string
}

export interface SelectProps {
  label?: string
  value: string
  options: Option[]
  onChange: (value: string) => void
  name: string
  id: string
  defaultValue: string
}
