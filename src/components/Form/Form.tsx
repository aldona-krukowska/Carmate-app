import React, { useState } from 'react'
import { StyledBoxWrapper } from '../BoxWrapper/BoxWrapper'
import { StyledButton } from '../Button/Button'
import { StyledInput } from '../Input/Input'
import { FormProps } from './Form.types'
import { MdVisibilityOff, MdVisibility } from 'react-icons/md'
import { useLocation } from 'react-router-dom'

export const Form = ({ submitText, onSubmit }: FormProps) => {
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const location = useLocation()
  const path = location.pathname

  return (
    <form onSubmit={onSubmit}>
      <StyledBoxWrapper flexDirection='column' alignItems='center'>
        <StyledBoxWrapper flexDirection='column' gap='1.6rem' padding='0 0 3.3rem 0'>
          {path !== '/auth/login' && (
            <StyledInput name='name' type='name' id='name' inputLabel='Podaj imię i nazwisko' />
          )}

          <StyledInput name='email' type='email' id='email' inputLabel='Podaj email' />
          <StyledInput
            type={showPassword ? 'text' : 'password'}
            name='password'
            id='password'
            inputLabel='Podaj hasło'
            trailingIcon={showPassword ? MdVisibility : MdVisibilityOff}
            onClick={togglePasswordVisibility}
          />
        </StyledBoxWrapper>
        <StyledButton buttonLabel={submitText} variant='primary' icon={null} />
      </StyledBoxWrapper>
    </form>
  )
}
