import styled from 'styled-components'

export const Circle = styled.div`
  width: 1.4rem;
  height: 1.4rem;
  background-color: ${({ theme, color }) => {
    switch (color) {
      case 'warning':
        return theme.colors.warning
      case 'error':
        return theme.colors.error
      case 'success':
        return theme.colors.success
      default:
        return theme.colors.primary
    }
  }};
  border-radius: 50%;
`
export const Line = styled.div`
  width: 100%;
  height: 0.1rem;
  background-color: ${({ theme }) => theme.colors.tertiary};
`

// Tooltip

export const TooltipButton = styled.button`
  position: relative;
  z-index: 2;
  cursor: help;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.accent};
  border: none;
`

export const Tooltip = styled.div`
  position: absolute;
  bottom: 150%;
  left: 50%;
  margin-bottom: 5px;
  margin-left: -80px;
  padding: 7px;
  width: 280px;
  border-radius: 4px;
  background-color: darkgrey;
  color: #fff;
  visibility: hidden;
  opacity: 0;
  pointer-events: none;
  text-align: center;
  font-size: 12px;
  line-height: 1.2;

  &:before {
    position: absolute;
    bottom: 150%;
    left: 50%;
    margin-left: -5px;
    width: 0;
    border-top: 5px solid darkgrey;
    border-right: 5px solid transparent;
    border-left: 5px solid transparent;
    content: ' ';
    font-size: 0;
    line-height: 0;
  }

  ${TooltipButton}:hover & {
    visibility: visible;
    opacity: 1;
  }
`
