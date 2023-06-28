import { StyledBoxWrapper } from '../../../components/BoxWrapper/BoxWrapper'
import { StyledButton } from '../../../components/Button/Button'
import { Styled } from '../../../components/Typography/Typography.styles'
import React, { useState, useEffect } from 'react'
import { Table } from '../../../components/Table/Table'
import { ReviewType } from '../../../components/ReviewForm/ReviewForm.types'
import { db } from '../../../api/firebase'
import { collection, onSnapshot, query, where } from 'firebase/firestore'
import { StyledLink } from './ServiceHistoryPage.styles'
import { useCarsCollection } from '../../../contexts/CarsCollectionContext/CarsCollectionContext'
import { EmptyState } from '../EmptyState/EmptyState'

export const ServiceHistoryPage = () => {
  const { selectedCar } = useCarsCollection()
  const columns = [
    { field: 'date', header: 'Data' },
    { field: 'title', header: 'Nazwa' },
    { field: 'mileage', header: 'Przebieg' },
    { field: 'description', header: 'Opis' },
  ]

  const [inspectionData, setInspectionData] = useState<ReviewType[]>([])
  const [serviceData, setServiceData] = useState<ReviewType[]>([])
  const [currentView, setCurrentView] = useState<string>('inspectionView')

  const serviceRef = collection(db, 'servicing')

  const getServices = (querySnapshot: any): ReviewType[] => {
    return querySnapshot.docs.map((doc: any) => ({
      id: doc.id,
      ...doc.data(),
    }))
  }

  useEffect(() => {
    if (selectedCar) {
      const carId = selectedCar?.id
      const qService = query(serviceRef, where('carID', '==', carId))

      onSnapshot(qService, (querySnapshot: any) => {
        const services = getServices(querySnapshot)

        const inspectionItems = services.filter(
          (item: ReviewType) => item.category === 'techniczny',
        )
        setInspectionData(inspectionItems)

        const serviceItems = services.filter((item: ReviewType) => item.category === 'serwisowy')
        setServiceData(serviceItems)
      })
    } else {
      return
    }
  }, [selectedCar])

  const changeView = (newView: string) => {
    setCurrentView(newView)
  }

  return (
    <>
      {selectedCar ? (
        <StyledBoxWrapper flexDirection='column'>
          <StyledBoxWrapper flexDirection='column'>
            <StyledBoxWrapper justifyContent='flex-start' padding='2.4rem 0' margin='0 0 0 6rem'>
              <Styled.Title>Historia przeglądów</Styled.Title>
            </StyledBoxWrapper>
            <StyledBoxWrapper justifyContent='flex-start' margin='0 0 0 6rem'>
              <StyledBoxWrapper>
                <StyledBoxWrapper padding='0 1.2rem 0 0'>
                  <StyledButton
                    buttonLabel='Techniczne'
                    variant='text'
                    icon={null}
                    type='button'
                    onClick={() => changeView('inspectionView')}
                  />
                </StyledBoxWrapper>
                <StyledBoxWrapper padding='0 0 0 1.2rem'>
                  <StyledButton
                    buttonLabel='Serwisowe'
                    variant='text'
                    icon={null}
                    type='button'
                    onClick={() => changeView('serviceView')}
                  />
                </StyledBoxWrapper>
              </StyledBoxWrapper>
              <StyledBoxWrapper width='69rem' justifyContent='flex-end'>
                <StyledBoxWrapper>
                  <StyledLink to='/add-service'>
                    <StyledButton
                      buttonLabel='Dodaj przegląd'
                      variant='secondary'
                      icon={null}
                      type='button'
                    />
                  </StyledLink>
                </StyledBoxWrapper>
              </StyledBoxWrapper>
            </StyledBoxWrapper>
          </StyledBoxWrapper>

          {currentView === 'inspectionView' && (
            <div>
              <StyledBoxWrapper justifyContent='flex-start' margin='2.4rem 0 0 6rem'>
                <Table data={inspectionData} columns={columns} />
              </StyledBoxWrapper>
            </div>
          )}

          {currentView === 'serviceView' && (
            <div>
              <StyledBoxWrapper justifyContent='flex-start' margin='2.4rem 0 0 6rem'>
                <Table data={serviceData} columns={columns} />
              </StyledBoxWrapper>
            </div>
          )}
        </StyledBoxWrapper>
      ) : (
        <EmptyState />
      )}
    </>
  )
}
