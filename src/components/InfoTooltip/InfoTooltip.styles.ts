import styled from 'styled-components'

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
  margin-bottom: -10px;
  margin-left: -240px;
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
    bottom: -10%;
    left: 50%;
    margin-left: 95px;
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
