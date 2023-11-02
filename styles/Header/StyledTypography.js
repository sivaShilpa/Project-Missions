import {Typography, styled} from '@mui/material';

const StyledTypography = styled(Typography)({
    color: '#808191',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '160%', /* 32px */    
    "&:hover":{
        background: "-webkit-linear-gradient(286deg, #00F5A0 0%, #00D9F5 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent"        
    }
})

export default StyledTypography