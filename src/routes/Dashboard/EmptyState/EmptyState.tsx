import { useNavigate } from 'react-router-dom'
import { StyledBoxWrapper } from '../../../components/BoxWrapper/BoxWrapper'
import { StyledButton } from '../../../components/Button/Button'
import { Typography } from '../../../components/Typography/Typography'
import EmptyCar from '../../../images/emptyCar.png'
import React from 'react'

export const EmptyState = () => {
  const navigate = useNavigate()

  const handleAddCarFormOpen = () => {
    navigate('/add-car')
  }

  return (
    <StyledBoxWrapper
      justifyContent='center'
      alignItems='center'
      gap='2rem'
      flexDirection='column'
      width='100%'
    >
      <StyledBoxWrapper width='40rem' height='40rem'>
        <img src={EmptyCar} alt='Car illustration' style={{ width: '100%' }} />
      </StyledBoxWrapper>
      <StyledBoxWrapper maxWidth='44.6rem' alignItems='center' gap='2rem' flexDirection='column'>
        <Typography variant='Heading' textAlign='center' colored>
          Nie dodałeś jeszcze żadnego pojazdu
        </Typography>
        <Typography variant='Paragraph' textAlign='center'>
          Aby cieszyć się pełnią funkcjonalności carmate kliknij przycisk poniżej i uzupełnij
          formularz aby dodać swój pierwszy pojazd.
        </Typography>
      </StyledBoxWrapper>
      <StyledBoxWrapper>
        <StyledButton
          variant='primary'
          buttonLabel='+ Dodaj nowy pojazd'
          icon={null}
          onClick={() => handleAddCarFormOpen()}
        />
      </StyledBoxWrapper>
    </StyledBoxWrapper>
  )
}
