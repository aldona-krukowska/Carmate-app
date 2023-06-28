import React, { useState } from 'react'
import { CarsCollectionProviderProps } from '../../contexts/CarsCollectionContext/CarsCollectionContext.types'
import { CarType } from '../../components/CarForm/CarForm.types'
import { CarsCollectionContext } from '../../contexts/CarsCollectionContext/CarsCollectionContext'

export const CarsCollectionProvider = ({ children }: CarsCollectionProviderProps) => {
  const [cars, setCars] = useState<CarType[] | null>(null)
  const [selectedCar, setSelectedCar] = useState<CarType | null>(null)

  const values = {
    cars,
    setCars,
    selectedCar,
    setSelectedCar,
  }

  return <CarsCollectionContext.Provider value={values}>{children}</CarsCollectionContext.Provider>
}
