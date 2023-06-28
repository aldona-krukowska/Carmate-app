import React, { useState } from 'react'
import { AuthContext } from '../../contexts/AuthContext/AuthContext'
import { AuthProviderProps } from '../../contexts/AuthContext/AuthContext.types'
import { User } from 'firebase/auth'

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null)

  const values = {
    user,
    setUser,
  }
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}
