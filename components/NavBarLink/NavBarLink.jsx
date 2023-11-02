import React from 'react'
import { Grid, Box, Link, Typography, Divider } from '@mui/material'
import headerStyles from '../../styles/Header/styles'

const NavBarLink = ({ text, link, icon }) => {
    return (
        <Grid container sx={{ ...headerStyles.navbarItem }}>
            <Grid item id='icon'>{icon}</Grid>
            <Grid item id='text'>
                <Link href={link} sx={{'textDecoration':'none'}}>
                    <Typography sx={{...headerStyles.navBarText}}>{text}</Typography>
                    <Box></Box>
                </Link>
            </Grid>
        </Grid>
    )
}

export default NavBarLink