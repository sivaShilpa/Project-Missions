import React from 'react'
import { Button, Card, Grid, Divider } from '@mui/material'
import Image from 'next/image'
import ICONS from '../../constants/icons'
import missionsStyles from '../../styles/Missions/styles'
import MISSIONSCONSTANTS from '../../constants/MissionsConstants'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const MissionsComponent = () => {
    return (
        <Card sx={{ ...missionsStyles.card }}>
            <Image alt="Card Header Image" src={ICONS.cardHeader} height='180px' width={550} />
            <Grid sx={{ ...missionsStyles.header }}>
                <Grid item container sx={{ width: '75px' }}>
                    <Image alt="Blue Icon" src={ICONS.blueIcon} />
                </Grid>
                <Grid sx={{ ...missionsStyles.headerContent }}>
                    <Grid sx={{ ...missionsStyles.headerTitle }}>
                        Search
                    </Grid>
                    <Grid sx={{ ...missionsStyles.headerButtonsContainer }}>
                        {MISSIONSCONSTANTS.cardHeaderButtons.map(el =>
                            <Grid item sx={{ ...missionsStyles.headerButton }}>{el}</Grid>
                        )}
                    </Grid>
                </Grid>
            </Grid>
            <Divider sx={{ backgroundColor: '#35383F' }} />
            <Grid sx={{ ...missionsStyles.content }}>
                <Grid sx={{ ...missionsStyles.cardTopContent }}>
                    {MISSIONSCONSTANTS.cardTopContent.map(el => <Grid sx={{ ...missionsStyles.topContentContainer }}>
                        <Grid sx={{ ...missionsStyles.topContentButton, borderColor: el.borderColor }}>
                            {el.text == 'players' ? <Image src={el.icon} alt="icon" /> :
                                <Image src={el.icon} alt="icon" width={20} height={20} />}
                            <Grid sx={{ ...missionsStyles.topButtonValue }}>{el.value}</Grid>
                        </Grid>
                        <Grid sx={{ ...missionsStyles.topButtonText }}>{el.text}</Grid>
                    </Grid>)}
                </Grid>
                <Grid sx={{ ...missionsStyles.bottomContent }}>
                    <Grid sx={{ ...missionsStyles.bottomTitle }}>ends in</Grid>
                    <Grid sx={{ ...missionsStyles.contentNumberContainer }}>
                        {MISSIONSCONSTANTS.cardContentButtons.map(el => <Grid sx={{ ...missionsStyles.bottomNumberText }}>
                            <Grid sx={{ ...missionsStyles.bottomNumber }}>{el.number}</Grid>
                            <Grid sx={{ ...missionsStyles.bottomText }}>{el.text}</Grid>
                        </Grid>)}
                    </Grid>
                    <Grid container item sx={{ padding: '16px' }}>
                        <Button sx={{ ...missionsStyles.startNowButton }}>Start Now <ArrowForwardIcon /> </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Divider sx={{ backgroundColor: '#35383F' }} />
            <Grid container>
                <Button sx={{ ...missionsStyles.footerButton }}> View Current Leaderboard {ICONS.trophyicon} </Button>
            </Grid>
            <Grid sx={{ ...missionsStyles.footerCharacter }}>
                {MISSIONSCONSTANTS.footerCharacters.map((el, index) =>
                    <Image src={el} alt='character' style={{ ...missionsStyles.footerImage, marginLeft: MISSIONSCONSTANTS.marginLeft[index] }} />
                )}
            </Grid>
        </Card>
    )
}

export default MissionsComponent