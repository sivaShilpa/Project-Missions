import { Button, Box } from '@mui/material'
import React from 'react'
import headerStyles from '../../../styles/Header/styles' 

const SideButton = ({icon, number, background, borderColor}) => {
  return (
    <Button sx={{...headerStyles.sideButton, backgroundColor:{background}, borderColor:{borderColor}}}>
        <Box>{icon}</Box>
        <Box>{number}</Box>
    </Button>
  )
}

export default SideButton