import { Box, Card, CardMedia, Grid } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import missionsStyles from '../../styles/Missions/styles'
import ICONS from '../../components/icons/icons'
import MissionsComponent from '../../components/missionsComponent'
import CONSTANTS from '../../constants/Missions/constants'

const Missions = () => {
    return (
        <Grid sx={{ ...missionsStyles.main }}>
            <Card item sx={{ ...missionsStyles.headerImage }}>
                <Image src={ICONS.featuredQuest} width={1789} height={244} />
            </Card>
            <Grid sx={{...missionsStyles.missionsComponentRepeat}} >
                {CONSTANTS.missionComponentRepeat.map(()=><MissionsComponent />)}                
            </Grid>
        </Grid>
    )
}

export default Missions

