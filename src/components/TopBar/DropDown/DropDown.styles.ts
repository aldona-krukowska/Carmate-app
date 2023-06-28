import styled, { css } from 'styled-components'
import { Caption } from '../../Typography/Typography.styles'

const StyledArrowDown = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease-in-out;
  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: rotate(-180deg);
    `}
`

const DropDownWrapper = styled.div`
  position: relative;
  &:hover {
    cursor: pointer;
  }
`

const DropDownList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding: 1.6rem;
  position: absolute;
  width: 100%;
  min-width: 27.6rem;
  top: calc(100% + 1.2rem);
  margin: 0;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 0.4rem;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
`

const StyledCaption = styled(Caption)`
  color: ${({ theme }) => theme.colors.accent};
`

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  list-style: none;
  cursor: pointer;
  padding: 1.6rem;
  border-radius: 0.4rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.tertiary};
  }
`

export const Styled = { StyledArrowDown, DropDownWrapper, DropDownList, ListItem, StyledCaption }
