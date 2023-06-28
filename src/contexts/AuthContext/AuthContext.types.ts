import { User } from 'firebase/auth'
import { Dispatch, ReactNode, SetStateAction } from 'react'

export interface AuthProviderProps {
  children?: ReactNode
}

export interface AuthContextModel {
  user: User | null
  setUser: Dispatch<SetStateAction<User | null>>
}
