import { Grid } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import missionsStyles from '../../styles/Missions/styles'
import ICONS from '../../constants/icons'
import MissionsComponent from '../../components/missionsComponent'
import MISSIONSCONSTANTS from '../../constants/MissionsConstants'

const Missions = () => {
    return (
        <Grid sx={{ ...missionsStyles.main }}>

            <Image src={ICONS.featuredQuest} width={1789} height='100%' />

            <Grid sx={{ ...missionsStyles.missionsComponentRepeat }} >
                {MISSIONSCONSTANTS.missionComponentRepeat.map(() => <MissionsComponent />)}
            </Grid>

        </Grid>
    )
}

export default Missions

