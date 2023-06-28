import { StyledBoxWrapper } from '../BoxWrapper/BoxWrapper'
import { Container } from '../Container/Container'
import { InfoTooltip } from '../InfoTooltip/InfoTooltip'
import { Typography } from '../Typography/Typography'
import { Circle, Line } from './Notifications.styles'
import React from 'react'

export const Notifications = () => {
  return (
    <>
      <StyledBoxWrapper margin='0 0 1.3rem' justifyContent='space-between'>
        <Typography variant='Title'>Powiadomienia</Typography>
        <InfoTooltip
          tooltipText='Tu pojawiają się najnowsze powiadomienia dotyczące zbliżających się przeglądów i
            serwisów'
        />
      </StyledBoxWrapper>

      <Container cRadius>
        <StyledBoxWrapper margin='3.2rem 1.6rem 3.2rem' flexDirection='column'>
          <StyledBoxWrapper flexDirection='column'>
            <StyledBoxWrapper flexDirection='row' justifyContent='space-between'>
              <Typography variant='Name'>Ważność ubezpieczenia</Typography>
              <Circle></Circle>
            </StyledBoxWrapper>

            <StyledBoxWrapper margin='0.4rem 0 0.8rem' justifyContent='flex-start'>
              <Typography variant='Caption'>21.03.2023</Typography>
            </StyledBoxWrapper>

            <StyledBoxWrapper margin='0 0 2.4rem' flexDirection='column'>
              <Typography variant='Paragraph'>
                Zbliża się termin ważności ubezpieczenia OC pojazdu. Skontaktuj się ze Swoim
                ubezpieczycielem w ciągu najbliższego tygodnia
              </Typography>
              <StyledBoxWrapper
                margin='2.4rem 0 2.4rem'
                justifyContent='center'
                alignItems='center'
                flexDirection='row'
              >
                <Line />
              </StyledBoxWrapper>
            </StyledBoxWrapper>

            <StyledBoxWrapper flexDirection='row' justifyContent='space-between'>
              <Typography variant='Name'>Wymiana opon</Typography>
              <Circle></Circle>
            </StyledBoxWrapper>

            <StyledBoxWrapper margin='0.4rem 0 0.8rem' justifyContent='flex-start'>
              <Typography variant='Caption'>21.03.2023</Typography>
            </StyledBoxWrapper>

            <StyledBoxWrapper margin='0 0 2.4rem' flexDirection='column'>
              <Typography variant='Paragraph'>
                Najwyższy czas na sezonową wymianę opon. Rozważ umówienie się na wizytę w zakładzie
                wulkanizacyjnym.
              </Typography>
              <StyledBoxWrapper
                margin='2.4rem 0 2.4rem'
                justifyContent='center'
                alignItems='center'
                flexDirection='row'
              >
                <Line />
              </StyledBoxWrapper>
            </StyledBoxWrapper>

            <StyledBoxWrapper flexDirection='row' justifyContent='space-between'>
              <Typography variant='Name'>Wymiana oleju</Typography>
              <Circle></Circle>
            </StyledBoxWrapper>

            <StyledBoxWrapper margin='0.4rem 0 0.8rem' justifyContent='flex-start'>
              <Typography variant='Caption'>21.03.2023</Typography>
            </StyledBoxWrapper>

            <StyledBoxWrapper margin='0 0 2.4rem'>
              <Typography variant='Paragraph'>
                Olej w silniku Twojego pojazdu powinien zostać wymieniony.
              </Typography>
            </StyledBoxWrapper>
          </StyledBoxWrapper>
        </StyledBoxWrapper>
      </Container>
    </>
  )
}
