import {Box, styled} from '@mui/material';

const StyledNavBox = styled(Box)({
    borderBottom: '4px solid #1F222A',
    height: '84px',
    alignItems:'center',
    marginLeft:'0',
    width:'110%',
    "&:hover":{
        borderBottom:'4px solid',
        borderImageSlice: '1',
        borderImageSource:'linear-gradient(286deg, #00F5A0 0%, #00D9F5 100%)',
    }    
})

export default StyledNavBox