import React from 'react'
import StyledAppBar from '../../styles/Header/StyledAppBar'
import StyledBox from '../../styles/Header/StyledBox'
import {Box, Card, Divider, Grid, Icon, Link, Paper, Typography, styled} from '@mui/material'
import Image from 'next/image'
import homeLogo from "../../assets/homeLogo.svg"
import NavBarLink from '../../components/NavBarLink'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Header = () => {

  return (
    <StyledAppBar>
        <Grid container sx={{width:'100%', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
            <Grid item>
                <Link href="/">
                    <Image src={homeLogo} alt="homeLogo"/>
                </Link>
            </Grid>
            <Grid item>                    
                <Grid container spacing={2} >
                    <NavBarLink icon={'🚀'} text={'Missions'}/>
                    <NavBarLink icon={'🏆'} text={'Leaderboard'}/>
                    <NavBarLink icon={'💰'} text={'Rewards'}/>
                </Grid>
            </Grid>
            <Grid item>
                <Grid container spacing={2} >
                    <Grid item>
                        <Card>
                            <Link href="/missions">Missions</Link>
                        </Card>
                        
                    </Grid>
                    <Grid item>
                        <Card>
                        <Link href="/leaderboard">Leaderboard </Link>
                    </Card>
                    </Grid>
                    <Grid item>
                        <Card>
                        <Link href="/rewards">Rewards</Link>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </StyledAppBar>
  )
}

export default Header