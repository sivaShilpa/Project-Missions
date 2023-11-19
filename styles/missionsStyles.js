const missionsStyles = {
  main: {
    sx: {
      background: (theme) => theme.missionsTheme.primary,
      height: "100%",
      width: "100%",
      alignItems: "center",
      textAlign: "center",
      padding: { md: "40px 55px", sm: "40px 10px", xs: "40px 10px" },
      zIndex: "0",
    },
  },
  card: {
    sx: {
      marginTop: { md: "55px", sm: "0px", xs: "0px" },
      borderRadius: "23px",
      width: {
        xxl: "457px",
        xl: "375px",
        lg: "452px",
        md: "390px",
        sm: "375px",
        xs: "390px",
      },
      height: {
        xxl: "779px",
        xl: "751px",
        lg: "778px",
        md: "757px",
        sm: "751px",
        xs: "757px",
      },
      borderRight: "8px solid",
      borderBottom: "8px solid",
      borderColor: (theme) => theme.missionsTheme.cardBorder,
      background: (theme) => theme.missionsTheme.cardBackground,
      zIndex: "5",
      container: true,
    },
  },
  headerImage: {
    sx: { width: "100%", borderRadius: "10px", boxShadow: "none" },
  },
  header: {
    sx: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-start",
      padding: "24px",
      gap: "12px",
      container: true,
      item: true,
    },
  },
  headerContent: {
    sx: {
      display: "flex",
      flexDirection: "column",
      width: "80%",
      justifyContent: "left",
      alignItems: "flex-start",
      container: true,
      item: true,
    },
  },
  headerTitle: {
    sx: {
      textAlign: "left",
      color: "white",
      fontSize: "24px",
      fontStyle: "normal",
      fontWeight: 900,
      lineHeight: "120%",
      padding: "2px",
      item: true,
    },
  },
  headerButtonsContainer: {
    sx: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "left",
      alignItems: "flex-start",
      gap: "8px",
      padding: "2px",
      item: true,
      container: true,
    },
  },
  headerButton: {
    sx: {
      display: "flex",
      padding: "4px 8px",
      justifyContent: "center",
      alignItems: "center",
      gap: "8px",
      borderRadius: "6px",
      background: (theme) => theme.missionsTheme.border,
      color: (theme) => theme.missionsTheme.font,
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "normal",
      letterSpacing: "0.2px",
    },
  },
  content: {
    sx: {
      container: true,
      padding: "16px 5px",
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
    },
  },
  cardTopContent: {
    sx: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: "12px",
      container: true,
      item: true,
    },
  },
  topContentContainer: {
    sx: {
      width: "29%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      container: true,
      item: true,
    },
  },
  topContentButton: (borderColor)=>({
    sx: {
      display: "flex",
      flexDirection: "row",
      border: "2px solid",
      borderColor: borderColor,
      justifyContent: "center",
      alignItems: "center",
      gap: "4px",
      padding: "2px 4px",
      alignSelf: "stretch",
      borderRadius: "40px",
      width: "100%",
      container: true,
      item: true,
    },
  }), 
  topButtonValue: {
    sx: {
      color: (theme) => theme.missionsTheme.font,
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "160%",
      item: true,
    },
  },
  topButtonText: {
    sx: {
      color: (theme) => theme.missionsTheme.font,
      textAlign: "center",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "120%",
      letterSpacing: "0.2px",
      textTransform: "uppercase",
      item: true,
      padding: "6px",
      marginBottom: "10px",
    },
  },
  bottomContent: {
    sx: {
      container: true,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginLeft: "17px",
      width: "93%",
      borderRadius: "20px",
      border: "1px solid",
      borderColor: (theme) => theme.missionsTheme.border,
    },
  },
  bottomTitle: {
    sx: {
      color: (theme) => theme.missionsTheme.font,
      fontSize: "20px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "normal",
      letterSpacing: "0.2px",
      textTransform: "uppercase",
      padding: "16px",
    },
  },
  contentNumberContainer: {
    sx: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      container: true,
      item: true,
      gap: "10px",
    },
  },
  bottomNumberText: {
    sx: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "33%",
      margin: 0,
      container: true,
      item: true,
    },
  },
  bottomNumber: {
    sx: {
      borderRadius: "4px",
      border: "1px solid",
      borderColor: (theme) => theme.missionsTheme.bottomNumberBorder,
      padding: {
        xxl: "5px 30px",
        xl: "5px 20px",
        lg: "5px 25px",
        md: "5px 15px",
        sm: "5px 10px",
        xs: "5px 20px",
      },
      fontSize: "45px",
      fontFamily: "monospace",
      margin: 0,
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal",
      background: (theme) => theme.missionsTheme.bottomNumberBackground,
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      item: true,
    },
  },
  bottomText: {
    sx: {
      fontFamily: "monospace",
      fontSize: "12px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal",
      background: (theme) => theme.missionsTheme.bottomNumberBackground,
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
  },
  startNowButton: {
    sx: {
      display: "flex",
      padding: "8px 24px",
      justifyContent: "center",
      alignItems: "center",
      gap: "8px",
      width: "100%",
      borderRadius: "100px",
      borderRight: "4px solid",
      borderBottom: "4px solid",
      borderColor: (theme) => theme.missionsTheme.startNowButtonBorder,
      background: (theme) => theme.missionsTheme.startNowButtonBackground,
      color: (theme) => theme.missionsTheme.white,
      textAlign: "center",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 900,
      lineHeight: "140%",
      letterSpacing: "0.2px",
      textTransform: "capitalize",
    },
  },
  footerButton: {
    sx: {
      display: "flex",
      padding: "4px 12px",
      justifyContent: "center",
      alignItems: "center",
      gap: "6px",
      flex: "1 0 0",
      alignSelf: "stretch",
      borderRadius: "40px",
      border: "2px solid",
      borderColor: (theme) => theme.missionsTheme.footerButtonBorder,
      background: (theme) => theme.missionsTheme.footerButtonBackground,
      margin: "16px 20px",
      color: (theme) => theme.missionsTheme.white,
      textAlign: "center",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: "700",
      lineHeight: "160%",
      textTransform: "capitalize",
    },
  },
  footerCharacter: {
    sx: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      container: true,
      position: "relative",
      marginTop: "55px",
    },
  },

  missionsCardRepeat: {
    sx: {
      container: true,
      item: true,
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      gap: "60px",
    },
  },
};
export default missionsStyles;
