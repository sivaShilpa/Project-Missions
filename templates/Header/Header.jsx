import React from 'react'
import { AppBar, Grid, Link, Box } from '@mui/material'
import Image from 'next/image'
import NavBarLink from './NavBarLink'
import SideButton from './SideButton/SideButton'
import headerStyles from '../../styles/Header/styles'
import ICONS from '../../constants/icons'
import ROUTES from '../../constants/routes'
import Avatar from './Avatar/Avatar'
import headerTheme from '../../themes/Header/theme'

const buttons = [
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
    return (
        <AppBar sx={{ ...headerStyles.appbarStyles }}>
            <Grid sx={{ ...headerStyles.appbarGridContainer }}>
                <Grid item>
                    <Link href={ROUTES.HOME}>
                        <Image src={ICONS.homeLogo} alt='homeLogo' />
                    </Link>
                </Grid>
                <Grid sx={{ ...headerStyles.navBarStyles }}>
                    {ROUTES.navbarPages.map(el =>
                        <NavBarLink {...el} />
                    )}
                </Grid>
                <Box sx={{ ...headerStyles.sideBar }}>
                    {buttons.map(el =>
                        <SideButton {...el} />
                    )}
                    <Avatar />
                </Box>
            </Grid>
        </AppBar>
    )
}

export default Header