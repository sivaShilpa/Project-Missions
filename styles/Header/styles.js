import headerTheme from "../../themes/Header/theme";

const headerStyles = {
    navBarStyles: {
        item: true,
        container: true,
        xs: 'auto',
        display:'flex',
        flexDirection:'row',
        justifyContent: 'space-between',
        width: '30%',
    },
    appbarStyles: {
        position: 'sticky',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: headerTheme.palette.primary,
        boxShadow: 'none',
        height: '85px',
        padding: '0 40px',
    },
    appbarGridContainer: {
        container: true,
        // xs: 'auto',
        width: '100%',
        display:'flex',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',        
    },
    navbarItem: {
        display: 'flex',
        flexDirection: 'row',
        gap: 0.5,
        alignItems: 'center',        
    },
    navBarText:{
        color:headerTheme.palette.secondary,
        textDecoration:'none',
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '160%' 
    }
};

export default headerStyles;