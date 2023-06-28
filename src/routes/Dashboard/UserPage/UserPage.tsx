import React, { useState } from 'react'
import { StyledBoxWrapper } from '../../../components/BoxWrapper/BoxWrapper'
import { CarAddButton } from '../../../components/CarAddButton/CarAddButton'
import { CarCard } from '../../../components/CarCard/CarCard'
import { CarInfo } from '../../../components/CarInfo/CarInfo'
import { CarReviews } from '../../../components/CarReviews/CarReviews'
import { EditCarModal } from '../../../components/EditCarModal/EditCarModal'
import { Notifications } from '../../../components/Notifications/Notifications'
import { useCarsCollection } from '../../../contexts/CarsCollectionContext/CarsCollectionContext'
import { EmptyState } from '../EmptyState/EmptyState'
import { Loader } from '../../../components/Loader/Loader'

export const UserPage = () => {
  const { selectedCar } = useCarsCollection()
  const [showEditCarModal, setShowEditCarModal] = useState<boolean>(false)

  if (selectedCar === null) {
    return <Loader />
  }

  return (
    <StyledBoxWrapper gap='3.2rem' justifyContent='flex-start'>
      {selectedCar ? (
        <>
          <StyledBoxWrapper flexDirection='column' justifyContent='flex-start' gap='2.4rem'>
            <CarCard />
            <CarAddButton to='/add-car'>Dodaj auto +</CarAddButton>
          </StyledBoxWrapper>
          <StyledBoxWrapper flexDirection='column' justifyContent='flex-start' gap='2.4rem'>
            <CarInfo />
            <CarReviews />
          </StyledBoxWrapper>
          <StyledBoxWrapper flexDirection='column' justifyContent='flex-start' maxWidth='38.9rem'>
            <Notifications />
          </StyledBoxWrapper>
          <EditCarModal
            showEditCarModal={showEditCarModal}
            setShowEditCarModal={setShowEditCarModal}
          />
        </>
      ) : (
        <EmptyState />
      )}
    </StyledBoxWrapper>
  )
}
