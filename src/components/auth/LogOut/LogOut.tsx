import React, { useState } from 'react'
import { auth } from '../../../api/firebase'
import { StyledButton } from '../../Button/Button'
import { Loader } from '../../Loader/Loader'

export const LogOut = () => {
  const [loggingOut, setLoggingOut] = useState(false)

  const handleLogout = async () => {
    try {
      setLoggingOut(true)
      await auth.signOut()
      console.log('Użytkownik został wylogowany') // na koniec można to usunąć
      console.log(auth.currentUser) // dla sprawdzenia czy currentUser === null
    } catch (error) {
      console.error('Błąd podczas wylogowywania:', error)
    } finally {
      setLoggingOut(false)
    }
  }

  if (loggingOut || auth.currentUser === null) {
    return <Loader />
  }

  return <StyledButton buttonLabel={'Wyloguj się'} variant={'tertiary'} onClick={handleLogout} />
}
