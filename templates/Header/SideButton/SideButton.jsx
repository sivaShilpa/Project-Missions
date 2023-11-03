import { Grid } from '@mui/material'
import React from 'react'
import headerStyles from '../../../styles/Header/styles' 

const SideButton = ({icon, number, background, borderColor}) => {
  return (
    <Grid container item sx={{...headerStyles.sideButton, backgroundColor:{background}, borderColor:{borderColor}}}>
        <Grid item>{icon}</Grid>
        <Grid item>{number}</Grid>
    </Grid>
  )
}

export default SideButton