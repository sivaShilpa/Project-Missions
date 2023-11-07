import { Box } from '@mui/material'
import React from 'react'
import headerStyles from '../../../styles/Header/styles'
import Image from 'next/image'

const SideButton = ({ icon, number, background, borderColor }) => {
  return (
    <Box sx={{ ...headerStyles.sideButton(background, borderColor) }}>
      <Image src={icon} alt="icon" />
      <Box>{number}</Box>
    </Box>
  )
}

export default SideButton