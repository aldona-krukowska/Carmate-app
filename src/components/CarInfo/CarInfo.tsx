import { MdMiscellaneousServices, MdFormatColorFill, MdLocalGasStation } from 'react-icons/md'
import { Container } from '../Container/Container'
import { IconWrapper } from '../IconWrapper/IconWrapper'
import { Typography } from '../Typography/Typography'
import { StyledBoxWrapper } from '../BoxWrapper/BoxWrapper'
import { StyledButton } from '../Button/Button'
import React, { useState, useRef } from 'react'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../../api/firebase'
import { Loader } from '../Loader/Loader'
import { clearForm } from '../../utils/clearForm'

import { CarInfoDetails, Divider } from './CarInfo.styles'
import { StyledInput } from '../Input/Input'
import { useCarsCollection } from '../../contexts/CarsCollectionContext/CarsCollectionContext'

export const CarInfo = () => {
  const formRef = useRef<HTMLFormElement | null>(null)
  const [showDetails, setShowDetails] = useState(false)
  const { selectedCar } = useCarsCollection()

  const getFormData = (event: React.FormEvent<Element>) => {
    event.preventDefault()

    const form = event.target as HTMLFormElement

    const { enginePower, engineCapacity, oilType, lastOilChange } = form

    const car = {
      enginePower: enginePower.value,
      engineCapacity: engineCapacity.value,
      oilType: oilType.value,
      lastOilChange: lastOilChange.value,
    }

    return car
  }
  const toggleDetails = () => {
    if (!showDetails) {
      setShowDetails(true)
    } else {
      setShowDetails(false)
    }
  }

  const handleUpdate = (event: React.FormEvent, docId: string) => {
    const docRef = doc(db, 'cars', docId)
    updateDoc(docRef, getFormData(event)).then(() => {
      clearForm(event.target as HTMLFormElement)
    })
    setShowDetails(false)
  }

  if (selectedCar === null) {
    return <Loader />
  }
  return (
    <StyledBoxWrapper flexDirection='column' alignItems='flex-start' margin='0rem 0rem  3rem 0rem'>
      <StyledBoxWrapper margin='0 0 1.6rem 0'>
        <Typography variant='Title'>Dane pojazdu</Typography>
      </StyledBoxWrapper>
      <Container cRadius key={selectedCar.id}>
        <StyledBoxWrapper margin='0 1.6rem' alignItems='center'>
          <StyledBoxWrapper flexDirection='column' alignItems='center' padding='1.6rem'>
            <StyledBoxWrapper flexDirection='column' alignItems='center' gap='0.8rem'>
              <IconWrapper>
                <MdMiscellaneousServices />
              </IconWrapper>
              <Typography variant='SubTitle'>Silnik</Typography>
            </StyledBoxWrapper>
            <StyledBoxWrapper
              margin='3.2rem 0 0 0'
              flexDirection='column'
              alignItems='center'
              gap='0.4rem'
            >
              <Typography variant='Title' colored>
                {selectedCar.enginePower ? selectedCar.enginePower : '-'}
              </Typography>
              <Typography variant='Caption'>
                {selectedCar.engineCapacity ? selectedCar.engineCapacity : 'brak danych'}
              </Typography>
            </StyledBoxWrapper>
          </StyledBoxWrapper>
          <Divider />
          <StyledBoxWrapper flexDirection='column' alignItems='center' padding='1.6rem'>
            <StyledBoxWrapper flexDirection='column' alignItems='center' gap='0.8rem'>
              <IconWrapper>
                <MdFormatColorFill />
              </IconWrapper>
              <Typography variant='SubTitle'>Olej</Typography>
            </StyledBoxWrapper>
            <StyledBoxWrapper
              margin='3.2rem 0 0 0'
              flexDirection='column'
              alignItems='center'
              gap='0.4rem'
            >
              <Typography variant='Title' colored>
                {selectedCar.oilType ? selectedCar.oilType : '-'}
              </Typography>
              <Typography variant='Caption'>
                {selectedCar.lastOilChange ? selectedCar.lastOilChange : 'brak danych'}
              </Typography>
            </StyledBoxWrapper>
          </StyledBoxWrapper>
          <Divider />
          <StyledBoxWrapper flexDirection='column' alignItems='center' padding='1.6rem'>
            <StyledBoxWrapper flexDirection='column' alignItems='center' gap='0.8rem'>
              <IconWrapper>
                <MdLocalGasStation />
              </IconWrapper>
              <Typography variant='SubTitle'>Paliwo</Typography>
            </StyledBoxWrapper>
            <StyledBoxWrapper
              margin='3.2rem 0 0 0'
              flexDirection='column'
              alignItems='center'
              gap='0.4rem'
            >
              <Typography variant='Title' colored>
                {selectedCar.fuelType ? selectedCar.fuelType : '-'}
              </Typography>
              <Typography variant='Caption'>
                {selectedCar.fuelType ? selectedCar.fuelType : '-'}
              </Typography>
            </StyledBoxWrapper>
          </StyledBoxWrapper>
        </StyledBoxWrapper>

        <CarInfoDetails isOpen={showDetails}>
          <StyledBoxWrapper key={selectedCar.id} data-id={selectedCar.id} width='100%'>
            <StyledBoxWrapper
              flexDirection='column'
              alignItems='center'
              justifyContent='center'
              width='100%'
            >
              <StyledBoxWrapper flexDirection='column' width='100%' padding='0rem 1.6rem'>
                <form ref={formRef} onSubmit={(event) => handleUpdate(event, selectedCar.id)}>
                  <StyledBoxWrapper flexDirection='row' margin='0.4rem 0rem 3.3rem 0rem'>
                    <StyledInput
                      type='text'
                      name='enginePower'
                      id='enginePower'
                      inputLabel='Moc silnika'
                      defaultValue={selectedCar?.enginePower}
                    />
                  </StyledBoxWrapper>
                  <StyledBoxWrapper flexDirection='row' gap='1.6rem'>
                    <StyledInput
                      type='text'
                      name='engineCapacity'
                      id='engineCapacity'
                      inputLabel='Pojemność silnika'
                      defaultValue={selectedCar.engineCapacity}
                    />
                  </StyledBoxWrapper>

                  <StyledBoxWrapper flexDirection='row' margin='3.3rem 0rem'>
                    <StyledInput
                      type='text'
                      name='oilType'
                      id='oilType'
                      inputLabel='Typ oleju'
                      variant='basic'
                      defaultValue={selectedCar.oilType}
                    />
                  </StyledBoxWrapper>

                  <StyledBoxWrapper flexDirection='row' margin='3.3rem 0rem'>
                    <StyledInput
                      type='text'
                      name='lastOilChange'
                      id='lastOilChange'
                      inputLabel='Data ostatniej wymiany oleju'
                      defaultValue={selectedCar.lastOilChange}
                    />
                  </StyledBoxWrapper>

                  <StyledBoxWrapper flexDirection='row' gap='1.6rem' maxWidth='100%'>
                    <StyledButton
                      buttonLabel='ANULUJ'
                      variant='tertiary'
                      icon={null}
                      type='button'
                      onClick={toggleDetails}
                      isFlex={1}
                    />

                    <StyledButton
                      buttonLabel='ZAPISZ'
                      variant='primary'
                      icon={null}
                      type='submit'
                      isFlex={1}
                    />
                  </StyledBoxWrapper>
                </form>
              </StyledBoxWrapper>
            </StyledBoxWrapper>
          </StyledBoxWrapper>
        </CarInfoDetails>

        {!showDetails && (
          <StyledBoxWrapper flexDirection='column' padding='0 1.6rem 1.6rem'>
            <StyledButton
              variant='ghost'
              buttonLabel={'UZUPEŁNIJ DANE'}
              onClick={toggleDetails}
              icon={null}
            />
          </StyledBoxWrapper>
        )}
      </Container>
    </StyledBoxWrapper>
  )
}
