import React from 'react'
import { Grid, Box, Link, Typography, Divider } from '@mui/material'
import StyledBox from '../../styles/Header/StyledBox'
import StyledTypography from '../../styles/Header/StyledTypography'
import StyledLink from '../../styles/Header/StyledLink'
import StyledGrid from '../../styles/Header/StyledGrid'
import StyledNavBox from '../../styles/Header/StyledNavBox'

const NavBarLink = ({icon, text}) => {
  return (
    <Grid item>
        <StyledBox>
            <StyledLink href="/missions" sx={{textDecoration:'none'}}>
                <StyledGrid container spacing={0.5}>
                    <Grid item>{icon}</Grid>
                    <Grid item>
                        <StyledNavBox display={'flex'} justifyContent={'space-between'}>                                        
                            <StyledTypography>{text}</StyledTypography> 
                        </StyledNavBox>  
                    </Grid>
                </StyledGrid>                                                             
            </StyledLink>                            
        </StyledBox>                                
    </Grid>
  )
}

export default NavBarLink