import styled from 'styled-components'

const LoaderLines = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  content: '';
  height: 40px;
  width: 70px;
  background-image: linear-gradient(${({ theme }) => theme.colors.accent} 45px, transparent 0),
    linear-gradient(${({ theme }) => theme.colors.accent} 45px, transparent 0),
    linear-gradient(${({ theme }) => theme.colors.accent} 45px, transparent 0);
  background-repeat: no-repeat;
  background-size: 30px 4px;
  background-position: 0px 11px, 8px 35px, 0px 60px;
  animation: lineDropping 0.75s linear infinite;

  @keyframes lineDropping {
    0% {
      background-position: 100px 11px, 115px 35px, 105px 60px;
      opacity: 1;
    }
    50% {
      background-position: 0px 11px, 20px 35px, 5px 60px;
    }
    60% {
      background-position: -30px 11px, 0px 35px, -10px 60px;
    }
    75%,
    100% {
      background-position: -30px 11px, -30px 35px, -30px 60px;
      opacity: 0;
    }
  }
`

const LoaderSpinner = styled.span`
  width: 48px;
  height: 48px;
  border: 3px dotted ${({ theme }) => theme.colors.accent};
  border-style: solid solid dotted dotted;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation 2s linear infinite;

  &::after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    border: 3px dotted ${({ theme }) => theme.colors.secondary200};
    border-style: solid solid dotted;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    animation: rotationBack 1s linear infinite;
    transform-origin: center center;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes rotationBack {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export const Styled = { LoaderLines, LoaderSpinner }
