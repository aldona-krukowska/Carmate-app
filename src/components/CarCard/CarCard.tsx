import React, { useState } from 'react'
import { StyledBoxWrapper } from '../BoxWrapper/BoxWrapper'
import { StyledButton } from '../Button/Button'
import { Container } from '../Container/Container'
import { Typography } from '../Typography/Typography'
import { CarDetails, CarPhoto } from './CarCard.styles'
import { Loader } from '../Loader/Loader'
import { EditCarModal } from '..//EditCarModal/EditCarModal'
import { useCarsCollection } from '../../contexts/CarsCollectionContext/CarsCollectionContext'
import IconCar from '../IconCar/IconCar'

export const CarCard = () => {
  const [showEditCarModal, setShowEditCarModal] = useState<boolean>(false)
  const [showDetails, setShowDetails] = useState(false)
  const { selectedCar } = useCarsCollection()

  const openEditCarModal = () => {
    setShowEditCarModal((prev) => !prev)
    selectedCar
  }

  const toggleDetails = () => {
    setShowDetails(!showDetails)
  }

  if (selectedCar === null) {
    return <Loader />
  }

  return (
    <>
      {selectedCar && (
        <Container key={selectedCar.id} cRadius>
          <StyledBoxWrapper flexDirection='column' padding='1.6rem' gap='0.4rem'>
            <Typography variant='Heading'>{selectedCar?.brand}</Typography>
            <Typography variant='Caption'>{selectedCar?.model}</Typography>
          </StyledBoxWrapper>

          <StyledBoxWrapper>
            {selectedCar.imgURL ? (
              <CarPhoto id='carImg' src={selectedCar?.imgURL} alt='Zdjęcie samochodu' />
            ) : (
              <IconCar />
            )}
          </StyledBoxWrapper>

          <StyledBoxWrapper flexDirection='row' justifyContent='space-between' padding='1.6rem'>
            <StyledBoxWrapper flexDirection='column' gap='0.4rem'>
              <Typography variant='Caption'>Ważność ubezpieczenia</Typography>
              <Typography variant='Title' colored>
                2023-02-12
              </Typography>
            </StyledBoxWrapper>

            <StyledBoxWrapper
              flexDirection='column'
              margin-top='2.4rem'
              alignItems='flex-end'
              gap='0.4rem'
            >
              <Typography variant='Caption'>Aktualny przebieg</Typography>
              <Typography variant='Title' colored>
                245674 km
              </Typography>
            </StyledBoxWrapper>
          </StyledBoxWrapper>
          <CarDetails isOpen={showDetails}>
            <StyledBoxWrapper flexDirection='column' gap='0.4rem' padding='1.6rem'>
              <StyledBoxWrapper flexDirection='column' gap='1rem' key={selectedCar.id}>
                <StyledBoxWrapper justifyContent='space-between'>
                  <Typography variant='Caption'>Numer VIN</Typography>
                  <Typography variant='Name'>{selectedCar?.VIN}</Typography>
                </StyledBoxWrapper>
                <StyledBoxWrapper justifyContent='space-between'>
                  <Typography variant='Caption'>Numer rejestracyjny</Typography>
                  <Typography variant='Name'>{selectedCar?.licensePlate}</Typography>
                </StyledBoxWrapper>
                <StyledBoxWrapper justifyContent='space-between'>
                  <Typography variant='Caption'>Data pierwszej rejestracji</Typography>
                  <Typography variant='Name'>{selectedCar?.registrationDate}</Typography>
                </StyledBoxWrapper>
                <StyledBoxWrapper justifyContent='space-between'>
                  <Typography variant='Caption'>Rok produkcji</Typography>
                  <Typography variant='Name'>{selectedCar?.year}</Typography>
                </StyledBoxWrapper>
              </StyledBoxWrapper>
            </StyledBoxWrapper>
          </CarDetails>
          <StyledBoxWrapper
            flexDirection='row'
            justifyContent='flex-end'
            padding='1.6rem'
            gap='1.6rem'
          >
            <StyledButton
              buttonLabel='EDYTUJ'
              onClick={openEditCarModal}
              icon={null}
              variant='ghost'
              type='button'
            />
            <StyledButton
              buttonLabel={!showDetails ? 'SZCZEGÓŁY AUTA' : 'ZWIŃ SZCZEGÓŁY'}
              onClick={toggleDetails}
              icon={null}
              variant='primary'
              type='button'
            />
          </StyledBoxWrapper>
          <EditCarModal
            showEditCarModal={showEditCarModal}
            setShowEditCarModal={setShowEditCarModal}
          />
        </Container>
      )}
    </>
  )
}
