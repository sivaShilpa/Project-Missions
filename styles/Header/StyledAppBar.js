import {AppBar, styled} from '@mui/material';

const StyledAppBar = styled(AppBar)({
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'var(--dark-dark-2, #1F222A)',
    boxShadow: 'none',

    height:'85px',    
    padding: '0 40px',
})

export default StyledAppBar