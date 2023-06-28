import { Dispatch, ReactNode, SetStateAction } from 'react'
import { CarType } from '../../components/CarForm/CarForm.types'

export interface CarsCollectionProviderProps {
  children?: ReactNode
}

export interface CarsCollectionContextModel {
  cars: CarType[] | null
  setCars: Dispatch<SetStateAction<CarType[] | null>>
  selectedCar: CarType | null
  setSelectedCar: Dispatch<SetStateAction<CarType | null>>
}
