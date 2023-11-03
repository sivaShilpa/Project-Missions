import { Box } from '@mui/material'
import React from 'react'
import ICONS from '../../../components/icons/icons'
import Image from 'next/image'

const Avatar = () => {
    return (
        <Box sx={{position:'static', marginRight: '40px'}}>
            <Box sx={{position: 'absolute', top:'18px'}}><Image src={ICONS.avataricon} alt="avatar" /></Box>
            <Box sx={{position: 'absolute', zIndex:'5', right:'40px', top:'48px'}}><Image src={ICONS.statusOnlineicon} alt='statusOnline' /></Box>
        </Box>
    )
}

export default Avatar