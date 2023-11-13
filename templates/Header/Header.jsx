import React, { useState } from "react";
import { Box, Grid, Link, useMediaQuery } from "@mui/material";
import Image from "next/image";
import NavBarLink from "./NavBarLink";
import SideButton from "./SideButton/SideButton";
import headerStyles from "../../styles/Header/styles";
import ICONS from "../../constants/icons";
import ROUTES from "../../constants/routes";
import Avatar from "./Avatar/Avatar";
import headerTheme from "../../themes/Header/theme";
import DropdownMenu from "./DropdownMenu";

const BUTTONS = [
  {
    icon: ICONS.diamondicon,
    number: "20,000",
    background: headerTheme.palette.diamondsBackground,
    borderColor: headerTheme.palette.diamondsBorder,
  },
  {
    icon: ICONS.coinicon,
    number: "11,000",
    background: headerTheme.palette.coinsBackground,
    borderColor: headerTheme.palette.coinsBorder,
  },
];

const Header = () => {
  const isMdScreen = useMediaQuery("(max-width: 1024px)");
  const isSmScreen = useMediaQuery("(max-width: 768px)");
  const isXsScreen = useMediaQuery("(max-width: 576px)");

  return isSmScreen ? (
    <Grid sx={{ ...headerStyles.appbarGridContainer }}>
      <Grid
        item
        container
        xs="auto"
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          textAlign: 'center',
          justifyContent: "space-between",
          width: {sm: "300px", xs: "250px"},
          gap: {sm: 2, xs:0}
        }}
      >
        <Link href={ROUTES.HOME}>
          <Image src={ICONS.homeLogoSmall} alt="homeLogo" width={36} />
        </Link>
        <DropdownMenu />
      </Grid>
      {/* <Grid sx={{ ...headerStyles.navBarStyles }} xs={4}>
        {isSmScreen ? (
          
        ) : (
          ROUTES.navbarPages.map((el) => <NavBarLink {...el} />)
        )}
      </Grid> */}
      <Grid sx={{ ...headerStyles.sideBar }} xs="auto">
        {isXsScreen ? (
          <Box sx={{ ...headerStyles.sideBar }}>
            <SideButton {...BUTTONS[0]} {...(BUTTONS[0].number = "20K")} />
            <SideButton {...BUTTONS[1]} {...(BUTTONS[1].number = "11K")} />
          </Box>
        ) : (
          <Box sx={{ ...headerStyles.sideBar }}>
            <SideButton {...BUTTONS[0]} {...(BUTTONS[0].number = "20,000")} />
            <SideButton {...BUTTONS[1]} {...(BUTTONS[1].number = "11,000")} />
          </Box>
        )}
        <Avatar />
      </Grid>
    </Grid>
  ) : (
    <Grid sx={{ ...headerStyles.appbarGridContainer }}>
      <Grid item xs="auto">
        <Link href={ROUTES.HOME}>
          {isMdScreen ? (
            <Image src={ICONS.homeLogoSmall} alt="homeLogo" width={36} />
          ) : (
            <Image src={ICONS.homeLogo} alt="homeLogo" />
          )}
        </Link>
      </Grid>
      <Grid sx={{ ...headerStyles.navBarStyles }} xs={4}>
        {ROUTES.navbarPages.map((el) => (
          <NavBarLink {...el} />
        ))}
      </Grid>
      <Grid sx={{ ...headerStyles.sideBar }} xs="auto">
        {isXsScreen ? (
          <Box sx={{ ...headerStyles.sideBar }}>
            <SideButton {...BUTTONS[0]} {...(BUTTONS[0].number = "20K")} />
            <SideButton {...BUTTONS[1]} {...(BUTTONS[1].number = "11K")} />
          </Box>
        ) : (
          <Box sx={{ ...headerStyles.sideBar }}>
            <SideButton {...BUTTONS[0]} {...(BUTTONS[0].number = "20,000")} />
            <SideButton {...BUTTONS[1]} {...(BUTTONS[1].number = "11,000")} />
          </Box>
        )}
        <Avatar />
      </Grid>
    </Grid>
  );
};

export default Header;
