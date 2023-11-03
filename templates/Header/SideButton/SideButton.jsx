import { Box } from '@mui/material'
import React from 'react'
import headerStyles from '../../../styles/Header/styles'
import Image from 'next/image'

const SideButton = ({ icon, number, background, borderColor }) => {
  return (
    <Box sx={{ ...headerStyles.sideButton, background: background, borderColor: borderColor }}>
      <Image src={icon} alt="icon" />
      <Box sx={{}}>{number}</Box>
    </Box>
  )
}

export default SideButton