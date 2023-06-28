import { StyledBoxWrapper } from '../BoxWrapper/BoxWrapper'
import { Container } from '../Container/Container'
import { TableComponent, TableHeaderComponent, TableRow } from './Table.styles'
import { Typography } from '../Typography/Typography'
import { TableProps } from './Table.types'
import React from 'react'

export const Table = ({ data }: TableProps) => {
  return (
    <StyledBoxWrapper>
      <Container cRadius>
        <TableComponent>
          <TableHeaderComponent>
            <tr>
              <StyledBoxWrapper>
                <StyledBoxWrapper
                  justifyContent='flex-start'
                  alignItems='center'
                  height='3.2rem'
                  width='15rem'
                  margin='1.6rem 1.6rem 0.8rem 1.6rem'
                >
                  <Typography variant='Name' weight='500'>
                    Data wpisu
                  </Typography>
                </StyledBoxWrapper>
                <StyledBoxWrapper
                  justifyContent='flex-start'
                  alignItems='center'
                  height='3.2rem'
                  width='15rem'
                  margin='1.6rem 1.6rem 0.8rem 1.6rem'
                >
                  <Typography variant='Name' weight='500'>
                    Nazwa przeglądu
                  </Typography>
                </StyledBoxWrapper>
                <StyledBoxWrapper
                  justifyContent='flex-start'
                  alignItems='center'
                  height='3.2rem'
                  width='15rem'
                  margin='1.6rem 1.6rem 0.8rem 1.6rem'
                >
                  <Typography variant='Name' weight='500'>
                    Wartość licznika (km)
                  </Typography>
                </StyledBoxWrapper>
                <StyledBoxWrapper
                  justifyContent='flex-start'
                  alignItems='center'
                  height='3.2rem'
                  width='34rem'
                  margin='1.6rem 1.6rem 0.8rem 1.6rem'
                >
                  <Typography variant='Name' weight='500'>
                    Opis serwisu (prace wykonane podczas przeglądu)
                  </Typography>
                </StyledBoxWrapper>
              </StyledBoxWrapper>
            </tr>
          </TableHeaderComponent>
          <tbody>
            {data &&
              data.map((row, index) => (
                <TableRow key={index}>
                  <StyledBoxWrapper>
                    <StyledBoxWrapper
                      justifyContent='flex-start'
                      alignItems='center'
                      height='9.6rem'
                      width='15rem'
                      margin='0.8rem 1.6rem 0.8rem 1.6rem'
                    >
                      <Typography variant='Name' weight='400'>
                        {row.date}
                      </Typography>
                    </StyledBoxWrapper>
                    <StyledBoxWrapper
                      justifyContent='flex-start'
                      alignItems='center'
                      height='9.6rem'
                      width='15rem'
                      margin='0.8rem 1.6rem 0.8rem 1.6rem'
                    >
                      <Typography variant='Name' weight='400'>
                        {row.reviewTitle}
                      </Typography>
                    </StyledBoxWrapper>
                    <StyledBoxWrapper
                      justifyContent='flex-end'
                      alignItems='center'
                      height='9.6rem'
                      width='15rem'
                      margin='0.8rem 1.6rem 0.8rem 1.6rem'
                    >
                      <Typography variant='Name' weight='400'>
                        {row.mileage}
                      </Typography>
                    </StyledBoxWrapper>
                    <StyledBoxWrapper
                      justifyContent='flex-start'
                      alignItems='center'
                      height='9.6rem'
                      width='34rem'
                      margin='0.8rem 1.6rem 0.8rem 1.6rem'
                    >
                      <Typography variant='Name' weight='400'>
                        {row.description}
                      </Typography>
                    </StyledBoxWrapper>
                  </StyledBoxWrapper>
                </TableRow>
              ))}
          </tbody>
        </TableComponent>
        {data ? null : <p>Brak informacji o przeglądach</p>}
      </Container>
    </StyledBoxWrapper>
  )
}
