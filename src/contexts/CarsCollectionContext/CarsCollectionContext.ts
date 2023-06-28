import { createContext, useContext } from 'react'
import { CarsCollectionContextModel } from './CarsCollectionContext.types'

export const CarsCollectionContext = createContext({} as CarsCollectionContextModel)

export const useCarsCollection = (): CarsCollectionContextModel => {
  return useContext(CarsCollectionContext)
}
