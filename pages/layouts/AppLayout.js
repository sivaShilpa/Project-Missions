import { Grid } from '@mui/material'
import React from 'react'
import Header from '../../templates/Header/Header'

export const AppLayout = ({ children }) => {
    return (
        <>
            <Grid>
                <Header />
            </Grid>
            <Grid>
                {children}
            </Grid>
        </>
    )
}
