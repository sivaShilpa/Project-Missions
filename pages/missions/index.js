import { Box, Card, CardMedia, Grid } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import missionsStyles from '../../styles/Missions/styles'
import ICONS from '../../components/icons/icons'

const Missions = () => {
    return (
        <Grid sx={{ ...missionsStyles.main }}>
            <Card sx={{ width: '100%', background: 'black' }}>
                <CardMedia src={ICONS.featuredQuest} />
            </Card>
        </Grid>
    )
}

export default Missions