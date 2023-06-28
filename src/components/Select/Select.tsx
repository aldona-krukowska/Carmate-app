import { Styled } from './Select.styles'
import { MdArrowDropDown } from 'react-icons/md'
import { SelectProps } from './Select.types'
import React from 'react'

export const Select = ({
  label,
  value,
  options,
  onChange,
  name,
  id,
  defaultValue,
}: SelectProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value)
  }

  return (
    <Styled.SelectWrapper>
      <Styled.StyledSelect
        value={value}
        onChange={handleChange}
        name={name}
        id={id}
        defaultValue={defaultValue}
      >
        {options.map((option) => (
          <Styled.StyledOption key={option.value} value={option.value}>
            {option.label}
          </Styled.StyledOption>
        ))}
      </Styled.StyledSelect>
      <Styled.Label>{label}</Styled.Label>
      <Styled.TrailingIcon>
        <MdArrowDropDown />
      </Styled.TrailingIcon>
    </Styled.SelectWrapper>
  )
}
