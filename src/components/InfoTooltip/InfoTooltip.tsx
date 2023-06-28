import { MdInfoOutline } from 'react-icons/md'
import { Tooltip, TooltipButton } from './InfoTooltip.styles'
import { IconWrapper } from '../IconWrapper/IconWrapper.styles'
import { InfoTooltipProps } from './InfoTooltip.types'
import React from 'react'

export const InfoTooltip = ({ tooltipText }: InfoTooltipProps) => {
  return (
    <TooltipButton>
      <IconWrapper>
        <MdInfoOutline />
      </IconWrapper>
      <Tooltip>{tooltipText}</Tooltip>
    </TooltipButton>
  )
}
