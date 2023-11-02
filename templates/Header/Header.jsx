import React from 'react'
import { AppBar, Box, Card, Divider, Grid, Icon, Link, Paper, Typography, styled } from '@mui/material'
import Image from 'next/image'
import NavBarLink from '../../components/NavBarLink'
import headerStyles from '../../styles/Header/styles'
import ICONS from '../../components/icons/icons'
import CONSTANTS from '../../constants/constants'
import ROUTES from '../../routes/routes'
const Header = () => {
    return (
        <AppBar sx={{ ...headerStyles.appbarStyles }}>
            <Grid sx={{...headerStyles.appbarGridContainer}}>
                <Grid item>
                    <Link href={ROUTES.HOME}>
                        <Image src={ICONS.homeLogo} />
                    </Link>
                </Grid>
                <Grid sx={{...headerStyles.navBarStyles}}>                    
                    {CONSTANTS.navbarPages.map(el =>
                        <NavBarLink {...el} />
                    )}                  
                </Grid>
                <Grid item>
                 3rd item
                </Grid>
            </Grid>
        </AppBar>
    )
}

export default Header