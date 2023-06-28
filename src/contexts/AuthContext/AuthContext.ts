import { createContext, useContext } from 'react'
import { AuthContextModel } from './AuthContext.types'

export const AuthContext = createContext<AuthContextModel>({} as AuthContextModel)

export const useAuth = (): AuthContextModel => {
  return useContext(AuthContext)
}
