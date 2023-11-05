import { Box } from '@mui/material'
import React from 'react'
import ICONS from '../../../components/icons/icons'
import Image from 'next/image'
import headerStyles from '../../../styles/Header/styles'

const Avatar = () => {
    return (
        <Box>
            <Box sx={{ ...headerStyles.avatar }}><Image src={ICONS.avataricon} alt="avatar" /></Box>
            <Box sx={{ ...headerStyles.avatarStatus }}><Image src={ICONS.statusOnlineicon} alt='statusOnline' /></Box>
        </Box>
    )
}

export default Avatar