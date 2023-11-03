import { Box, Card, CardMedia, Grid } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import missionsStyles from '../../styles/Missions/styles'
import ICONS from '../../components/icons/icons'

const Missions = () => {
    return (
        <Grid sx={{ ...missionsStyles.main }}>
            <Card item sx={{ width: '100%', borderRadius: '10px', boxShadow: 'none', height: '12.4%' }}>
                <Image src={ICONS.featuredQuest} width={1789} height={244} />
            </Card>
        </Grid>
    )
}

export default Missions

