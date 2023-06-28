import { IconCarWrapper } from './IconCarWrapper/IconCarWrapper'
import { MdDirectionsCar } from 'react-icons/md'
import { Typography } from '../Typography/Typography'
import React from 'react'

const IconCar = () => {
  return (
    <IconCarWrapper>
      <MdDirectionsCar />
      <Typography variant='Name' textAlign='center'>
        Otwórz edycję pojazdu <br /> aby dodać zdjęcie
      </Typography>
    </IconCarWrapper>
  )
}

export default IconCar
