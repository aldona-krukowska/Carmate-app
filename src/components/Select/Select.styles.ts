import styled from 'styled-components'
import { IconWrapper } from '../IconWrapper/IconWrapper.styles'

const SelectWrapper = styled.div`
  position: relative;
  height: fit-content;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`

const TrailingIcon = styled(IconWrapper)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 1.6rem;
  transition: transform 0.3s ease-in-out;
`

const StyledSelect = styled.select`
  display: flex;
  align-items: center;
  flex-grow: 1;
  padding: 0.8rem 1.6rem;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  min-width: 28rem;
  height: 5.6rem;
  width: 100%;
  border-radius: 4px;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.accent};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  appearance: none;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.accent};
  }

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.secondary};
    outline: none;
  }
`

const Label = styled.div`
  font-size: ${({ theme }) => theme.fontSize.xs};
  padding: 0 0.4rem;
  color: ${({ theme }) => theme.colors.accent};
  background-color: ${({ theme }) => theme.colors.white};
  position: absolute;
  top: 0;
  transform: translateY(-50%);
  left: 1.2rem;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  pointer-events: none;
  transition: top 0.3s, font-size 0.3s;
`

const StyledOption = styled.option`
  padding: 1.6rem;
  line-height: 1rem;
  font-size: ${({ theme }) => theme.fontSize.m};

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGray};
  }
`

export const Styled = {
  SelectWrapper,
  StyledSelect,
  Label,
  StyledOption,
  TrailingIcon,
}
