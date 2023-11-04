import React from 'react'
import { Card, CardContent, CardHeader, CardMedia } from '@mui/material'
import Image from 'next/image'
import ICONS from '../icons/icons'
import missionsTheme from '../../themes/Missions/theme'

missionsTheme
const MissionsComponent = () => {
    return (
        <Card container sx={{marginTop:'3%', borderRadius:'23px', width:'30%', borderRight: '8px solid', borderBottom: '8px solid', borderColor: missionsTheme.palette.cardBorder}}>
            <Image 
            // component='img'
            alt="Card Header Image" 
            src={ICONS.cardHeader}
            height='180px'
            width={537}
            title='Card Header Image'
            ></Image>
            <CardHeader></CardHeader>
            <CardContent></CardContent>
            <CardContent></CardContent>
        </Card>
    )
}

export default MissionsComponent