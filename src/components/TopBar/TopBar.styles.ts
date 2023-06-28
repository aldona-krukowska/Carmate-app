import styled from 'styled-components'

const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3.2rem 0;
  gap: 1rem;
`

const VerticalDash = styled.div`
  width: 5.6rem;
  height: 0px;
  border: 1px solid ${({ theme }) => theme.colors.tertiary};
  transform: rotate(90deg);
`

const Switch = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
  border-radius: 0.4rem;
  overflow: hidden;
`

export const Styled = { TopBar, Switch, VerticalDash }
