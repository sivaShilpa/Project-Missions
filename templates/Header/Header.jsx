import React from 'react'
import { AppBar, Grid, Link, Box, useMediaQuery } from '@mui/material'
import Image from 'next/image'
import NavBarLink from './NavBarLink'
import SideButton from './SideButton/SideButton'
import headerStyles from '../../styles/Header/styles'
import ICONS from '../../constants/icons'
import ROUTES from '../../constants/routes'
import Avatar from './Avatar/Avatar'
import headerTheme from '../../themes/Header/theme'

const BUTTONS = [
    {
        icon: ICONS.diamondicon,
        number: '20,000',
        background: headerTheme.palette.diamondsBackground,
        borderColor: headerTheme.palette.diamondsBorder
    },
    {
        icon: ICONS.coinicon,
        number: '11,000',
        background: headerTheme.palette.coinsBackground,
        borderColor: headerTheme.palette.coinsBorder
    }
]


const Header = () => {
    const isMdScreen = useMediaQuery('(max-width: 1024px)')
    const isLgScreen = useMediaQuery('(min-width: 1025px )')
    return (
        <AppBar sx={{ ...headerStyles.appbarStyles }}>
            <Grid sx={{ ...headerStyles.appbarGridContainer }}>
                <Grid item>
                    <Link href={ROUTES.HOME}>
                        {isMdScreen ? <Image src={ICONS.homeLogoSmall} alt='homeLogo' width={36} />
                            : <Image src={ICONS.homeLogo} alt='homeLogo' />}
                    </Link>
                </Grid>
                <Grid sx={{ ...headerStyles.navBarStyles }}>
                    {ROUTES.navbarPages.map(el =>
                        <NavBarLink {...el} />
                    )}
                </Grid>
                <Box sx={{ ...headerStyles.sideBar }}>
                    {BUTTONS.map(el =>
                        <SideButton {...el} />
                    )}
                    <Avatar />
                </Box>
            </Grid>
        </AppBar>
    )
}

export default Header