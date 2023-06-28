import { useState } from 'react'
import { StyledBoxWrapper } from '../../BoxWrapper/BoxWrapper'
import { IconWrapper } from '../../IconWrapper/IconWrapper'
import { Typography } from '../../Typography/Typography'
import { Styled } from './DropDown.styles'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { useCarsCollection } from '../../../contexts/CarsCollectionContext/CarsCollectionContext'
import { CarType } from '../../CarForm/CarForm.types'

export const DropDown = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { cars, selectedCar, setSelectedCar } = useCarsCollection()

  const toggling = () => {
    setIsOpen(!isOpen)
  }

  const onOptionClicked = (value: CarType, index: number) => () => {
    setSelectedCar(value)
    localStorage.setItem('carIndex', JSON.stringify(index))
    setIsOpen(false)
  }

  return (
    <Styled.DropDownWrapper onClick={toggling}>
      <StyledBoxWrapper gap='1.2rem' alignItems='center' justifyContent='center'>
        <Typography variant='SubTitle'>
          {selectedCar?.brand} {selectedCar?.model}
        </Typography>
        <IconWrapper>
          <Styled.StyledArrowDown isOpen={isOpen}>
            <MdKeyboardArrowDown />
          </Styled.StyledArrowDown>
        </IconWrapper>
      </StyledBoxWrapper>
      {isOpen && (
        <Styled.DropDownList>
          {cars !== null
            ? cars.map((car, index) => {
                const { brand, model, licensePlate, VIN } = car

                return (
                  <Styled.ListItem key={VIN} onClick={onOptionClicked(car, index)}>
                    <Typography variant='SmallTitle' weight='medium' colored>
                      {brand} {model}
                    </Typography>
                    <Styled.StyledCaption>{licensePlate}</Styled.StyledCaption>
                  </Styled.ListItem>
                )
              })
            : 'Nie ma auta'}
        </Styled.DropDownList>
      )}
    </Styled.DropDownWrapper>
  )
}
