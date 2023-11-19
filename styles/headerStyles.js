const headerStyles = {
  navBarStyles: {
    sx: {
      item: true,
      container: true,
      display: "flex",
      flexDirection: "row",
      alignItems: "left",
      justifyContent: "space-around",
      height: "84px",
      gap: {
        xxl: "30px",
        xl: "24px",
        lg: "16px",
        md: "16px",
        sm: "16px",
      },
      xs: 4,
    },
  },
  appbarGridContainer: {
    sx: {
      position: "sticky",
      backgroundColor: (theme) => theme.headerTheme.primary,
      height: "85px",
      paddingLeft: {
        xxl: "40px",
        xl: "35px",
        lg: "35px",
        md: "20px",
        sm: "20px",
        xs: "10px",
      },
      paddingRight: 10,
      container: true,
      xs: 12,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      gap: { xs: "10px" },
      width: "100%",
    },
  },
  navbarItem: {
    sx: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
    },
  },
  homeLogo: {
    sx: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      textAlign: "center",
      justifyContent: "space-between",
      width: { md: "260px", sm: "200px", xs: "150px" },
      xs: "auto",
      item: true,
      container: true,
    },
  },
  navBarText: {
    sx: {
      color: (theme) => theme.headerTheme.secondary,
      textDecoration: "none",
      fontSize: {
        xxl: "20px",
        xl: "18px",
        lg: "16px",
        md: "16px",
        sm: "14px",
      },
      fontStyle: "normal",
      fontWeight: 700,
    },
  },
  linkTextWrap: {
    display: "flex",
    flexDirection: "column",
    paddingTop: "30px",
    gap: "20px",
    "#linkTextLine": {
      width: "110%",
      height: "4px",
      flexShrink: "0",
      borderRadius: "2px 2px 0px 0px",
      background: (theme) => theme.headerTheme.primary,
    },
    ":hover": {
      "#linkText": {
        background: (theme) => theme.headerTheme.highlight,
        backgrounClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      },
      "#linkTextLine": {
        background: (theme) => theme.headerTheme.highlight,
      },
    },
  },
  linkTextWrapActive: {
    display: "flex",
    flexDirection: "column",
    paddingTop: { xxl: "30px", xl: "30px", lg: "35px", md: "35px" },
    "#linkText": {
      textDecoration: "none",
      fontSize: {
        xxl: "20px",
        xl: "18px",
        lg: "16px",
        md: "16px",
        sm: "14px",
        xs: "14px",
      },
      fontStyle: "normal",
      fontWeight: 700,
      marginBottom: {
        xxl: "0px",
        xl: "10px",
        lg: "10px",
        md: "7px",
      },
      background: (theme) => theme.headerTheme.highlight,
      backgrounClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    "#linkTextLine": {
      width: "110%",
      height: "4px",
      flexShrink: "0",
      borderRadius: "2px 2px 0px 0px",
      background: (theme) => theme.headerTheme.highlight,
    },
    gap: {
      xxl: "20px",
      xl: "13px",
      lg: "13px",
      md: "15px",
    },
  },
  sideBar: {
    sx: {
      item: true,
      container: true,
      xs: "auto",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      width: {
        xl: "315px",
        lg: "270px",
        md: "270px",
        sm: "230px",
        xs: "170px",
      },
      gap: { xxl: 2, xl: 2, lg: 2, md: "20px", sm: "10px", xs: "5px" },
    },
  },
  sideButton: (background, borderColor) => ({
    sx: {
      container: true,
      item: true,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: { sm: "8px", xs: "1.5px" },
      borderRadius: "40px",
      border: "2px solid",
      height: "36px",
      background: background,
      borderColor: borderColor,
      width: {
        xl: "140px",
        lg: "120px",
        md: "120px",
        sm: "120px",
        xs: "100px",
      },
    },
  }),
  sideButtonFont: {
    sx: {
      fontSize: {
        xl: "20px",
        lg: "18px",
        md: "16px",
        sm: "14px",
      },
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "160%",
      color: (theme) => theme.headerTheme.white,
    },
  },
  avatar: {
    sx: {
      position: "absolute",
      top: "18px",
      right: { xl: "35px", lg: "35px", md: "25px", sm: "25px", xs: "10px" },
    },
  },
  avatarStatus: {
    sx: {
      position: "absolute",
      zIndex: "5",
      right: { xl: "40px", lg: "40px", md: "30px", sm: "30px", xs: "15px" },
      top: "46px",
    },
  },
  dropDownStyle: {
    sx: {
      border: "1px solid #00F5A0",
      borderRadius: "100px",
      backgroundColor: (theme) => theme.headerTheme.primary,
      display: "flex",
      height: "36px",
      width: { sm: "150px", xs: "100px" },
      justifyContent: "center",
      alignItems: "center",
      gap: "8px",
      padding: 0,
      margin: 0,
      fieldset: {
        border: "none !important",
        outline: "none !important",
      },
      textAlign: "center",
      "& .MuiPaper-root": {
        backgroundColor: (theme) => theme.headerTheme.primary,
      },
    },
  },
  dropDownText: {
    sx: {
      background: (theme) => theme.headerTheme.highlight,
      backgrounClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      textDecoration: "none",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: "700",
      lineHeight: "140%",
      letterSpacing: "0.2px",
    },
  },
  dropDownIndicator: {
    sx: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "50px",
      height: "30px",
    },
  },
};

export default headerStyles;
