import { Styled } from './TopBar.styles'
import { StyledIconButton } from '../IconButton/IconButton'
import { MdOutlineLightMode, MdNightlightRound, MdPerson } from 'react-icons/md'
import { StyledBoxWrapper } from '../BoxWrapper/BoxWrapper'
import React, { useState } from 'react'
import { UserModal } from '../Modals/UserModal'
import { DropDown } from './DropDown/DropDown'
import { useCarsCollection } from '../../contexts/CarsCollectionContext/CarsCollectionContext'

export const TopBar = () => {
  const [showUserModal, setShowUserModal] = useState<boolean>(false)
  const { selectedCar } = useCarsCollection()

  const openUserModal = () => {
    setShowUserModal((prev) => !prev)
  }

  return (
    <Styled.TopBar>
      {selectedCar ? <DropDown /> : <div></div>}

      <StyledBoxWrapper justifyContent='space-between' alignItems='center'>
        <Styled.Switch>
          <StyledIconButton icon={MdOutlineLightMode} variant='active' />
          <StyledIconButton icon={MdNightlightRound} />
        </Styled.Switch>

        <Styled.VerticalDash />

        <StyledIconButton radius icon={MdPerson} onClick={openUserModal} />
        <UserModal showUserModal={showUserModal} setShowUserModal={setShowUserModal} />
      </StyledBoxWrapper>
    </Styled.TopBar>
  )
}
