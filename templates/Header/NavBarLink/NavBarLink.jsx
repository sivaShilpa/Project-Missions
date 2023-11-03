'use client'
import React from 'react'
import { Box, Link, Typography } from '@mui/material'
import headerStyles from '../../../styles/Header/styles'
import { usePathname } from 'next/navigation'

const NavBarLink = ({ text, link, icon }) => {
    const pathname = usePathname()
    return (
        <Box sx={{ ...headerStyles.navbarItem }}>
            <Box>{icon}</Box>
            <Box id='text' sx={pathname == link ? { ...headerStyles.linkTextWrapActive } : { ...headerStyles.linkTextWrap }}>
                <Link href={link} sx={{ 'textDecoration': 'none' }}>
                    <Typography id='linkText' sx={{ ...headerStyles.navBarText }}>{text}</Typography>
                </Link>
                <Box id='linkTextLine'></Box>
            </Box>
        </Box>
    )
}

export default NavBarLink