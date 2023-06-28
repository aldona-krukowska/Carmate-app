import { StyledBoxWrapper } from '../BoxWrapper/BoxWrapper'
import { Container } from '../Container/Container'
import { IconWrapper } from '../IconWrapper/IconWrapper'
import { Typography } from '../Typography/Typography'
import { MdSupportAgent, MdBuild } from 'react-icons/md'
import { StyledButton } from '../Button/Button'
import { Divider, StyledReviewLink } from './CarRewievs.styles'
import React from 'react'

export const CarReviews = () => {
  return (
    <StyledBoxWrapper flexDirection='column' alignItems='flex-start' maxWidth='38.9rem'>
      <StyledBoxWrapper margin='0 0 1.6rem 0'>
        <Typography variant='SubTitle'>Przeglądy</Typography>
      </StyledBoxWrapper>
      <Container cRadius cWidth>
        <StyledBoxWrapper margin='0 1.6rem' alignItems='center'>
          <StyledBoxWrapper flexDirection='column' alignItems='center' padding='1.6rem'>
            <StyledBoxWrapper flexDirection='column' alignItems='center' gap='0.8rem'>
              <IconWrapper>
                <MdSupportAgent />
              </IconWrapper>
              <Typography variant='SubTitle'>Serwisowy</Typography>
            </StyledBoxWrapper>
            <StyledBoxWrapper
              margin='3.2rem 0 0 0'
              flexDirection='column'
              alignItems='center'
              gap='0.4rem'
            >
              <Typography variant='Title' colored>
                275700 km
              </Typography>
              <Typography variant='Caption'>Jokerson SA</Typography>
            </StyledBoxWrapper>
          </StyledBoxWrapper>
          <Divider />
          <StyledBoxWrapper flexDirection='column' alignItems='center' padding='1.6rem'>
            <StyledBoxWrapper flexDirection='column' alignItems='center' gap='0.8rem'>
              <IconWrapper>
                <MdBuild />
              </IconWrapper>
              <Typography variant='SubTitle'>Techniczny</Typography>
            </StyledBoxWrapper>
            <StyledBoxWrapper
              margin='3.2rem 0 0 0'
              flexDirection='column'
              alignItems='center'
              gap='0.4rem'
            >
              <Typography variant='Title' colored>
                09.05.2023
              </Typography>
              <Typography variant='Caption'>Ważny do: 09.05.2024</Typography>
            </StyledBoxWrapper>
          </StyledBoxWrapper>
        </StyledBoxWrapper>
        <StyledBoxWrapper flexDirection='column' padding='1.6rem' width='100%'>
          <StyledReviewLink to='/service-history'>
            <StyledButton
              isFlex={1}
              variant='ghost'
              buttonLabel='POKAŻ HISTORIĘ PRZEGLĄDÓW'
              icon={null}
            />
          </StyledReviewLink>
        </StyledBoxWrapper>
      </Container>
    </StyledBoxWrapper>
  )
}
