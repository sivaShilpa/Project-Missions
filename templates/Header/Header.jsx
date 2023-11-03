
import React from 'react'
import { AppBar, Grid, Link, Box } from '@mui/material'
import Image from 'next/image'
import NavBarLink from './NavBarLink'
import SideButton from './SideButton/SideButton'
import headerStyles from '../../styles/Header/styles'
import ICONS from '../../components/icons/icons'
import CONSTANTS from '../../constants/Header/constants'
import ROUTES from '../../routes/routes'
import Avatar from './Avatar/Avatar'

const Header = () => {
    return (
        <AppBar sx={{ ...headerStyles.appbarStyles }}>
            <Grid sx={{ ...headerStyles.appbarGridContainer }}>
                <Grid item>
                    <Link href={ROUTES.HOME}>
                        <Image src={ICONS.homeLogo} alt='homeLogo' />
                    </Link>
                </Grid>
                <Grid sx={{ ...headerStyles.navBarStyles }}>
                    {CONSTANTS.navbarPages.map(el =>
                        <NavBarLink {...el} />
                    )}
                </Grid>
                <Box sx={{ ...headerStyles.sideBar }}>
                    {CONSTANTS.buttons.map(el =>
                        <SideButton {...el} />
                    )}
                    <Avatar />
                </Box>
            </Grid>
        </AppBar>
    )
}

export default Header