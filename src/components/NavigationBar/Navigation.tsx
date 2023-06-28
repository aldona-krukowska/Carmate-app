import { LogOut } from '../auth/LogOut/LogOut'
import { NavigationBar } from './Navigation.styles'
import { NavLinkButton } from './NavigationButton.styles'
import { MdHome, MdUpdate, MdCarRepair } from 'react-icons/md'
import { Logo } from '../Logo/Logo'
import { StyledBoxWrapper } from '../BoxWrapper/BoxWrapper'
import { IconWrapper } from '../IconWrapper/IconWrapper'
import React from 'react'

export const Navigation = () => (
  <NavigationBar>
    <StyledBoxWrapper flexDirection='column' gap={'3.2rem'} height='100%'>
      <StyledBoxWrapper>
        <Logo />
      </StyledBoxWrapper>
      <StyledBoxWrapper
        flexDirection='column'
        justifyContent='flex-start'
        alignItems='center'
        width={'27.6rem'}
        gap={'0.8rem'}
        height={'75rem'}
      >
        <NavLinkButton to='/user-page'>
          <IconWrapper>
            <MdHome />
          </IconWrapper>
          Pulpit
        </NavLinkButton>
        <NavLinkButton to='/service-history'>
          <IconWrapper>
            <MdUpdate />
          </IconWrapper>
          Historia przeglądów
        </NavLinkButton>
        <NavLinkButton to='/service-list'>
          <IconWrapper>
            <MdCarRepair />
          </IconWrapper>
          Lista serwisów
        </NavLinkButton>
      </StyledBoxWrapper>
      <StyledBoxWrapper flexDirection='column' padding='0 1.6rem'>
        <LogOut />
      </StyledBoxWrapper>
    </StyledBoxWrapper>
  </NavigationBar>
)
