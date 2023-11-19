import React from "react";
import { Box, Grid, Link, useMediaQuery } from "@mui/material";
import Image from "next/image";
import NavBarLink from "./NavBarLink";
import SideButton from "./SideButton/SideButton";
import headerStyles from "../../styles/headerStyles";
import ICONS from "../../constants/icons";
import ROUTES from "../../constants/routes";
import Avatar from "./Avatar/Avatar";
import theme from "../../themes/theme";
import DropdownMenu from "./DropdownMenu";

const BUTTONS = [
  {
    icon: ICONS.diamondicon,
    number: "20,000",
    numberSmall: "20K",
    background: theme.headerTheme.diamondsBackground,
    borderColor: theme.headerTheme.diamondsBorder,
  },
  {
    icon: ICONS.coinicon,
    number: "11,000",
    numberSmall: "11K",
    background: theme.headerTheme.coinsBackground,
    borderColor: theme.headerTheme.coinsBorder,
  },
];

const NavbarPages = [
  {
    text: "Missions",
    link: "/missions",
    icon: ICONS.rocketicon,
  },
  {
    text: "Leaderboard",
    link: "/leaderboard",
    icon: ICONS.trophyicon,
  },
  {
    text: "Rewards",
    link: "/rewards",
    icon: ICONS.rewardsicon,
  },
];

const Header = () => {
  const isMdScreen = useMediaQuery("(max-width: 1024px)");
  const isSmScreen = useMediaQuery("(max-width: 768px)");

  return isSmScreen ? (
    <Grid {...headerStyles.appbarGridContainer}>
      <Grid {...headerStyles.homeLogo}>
        <Link href={ROUTES.HOME}>
          <Image
            src={ICONS.homeLogoSmall}
            alt="homeLogo"
            width={36}
            height={36}
          />
        </Link>
        <DropdownMenu />
      </Grid>

      <Box {...headerStyles.sideBar}>
        <SideButton {...BUTTONS[0]} />
        <SideButton {...BUTTONS[1]} />
        <Avatar />
      </Box>
    </Grid>
  ) : (
    <Grid {...headerStyles.appbarGridContainer}>
      <Grid item xs="auto">
        <Link href={ROUTES.HOME}>
          {isMdScreen ? (
            <Image
              src={ICONS.homeLogoSmall}
              alt="homeLogo"
              width={36}
              height={36}
            />
          ) : (
            <Image src={ICONS.homeLogo} alt="homeLogo" />
          )}
        </Link>
      </Grid>
      <Grid {...headerStyles.navBarStyles}>
        {NavbarPages.map((el) => (
          <NavBarLink {...el} />
        ))}
      </Grid>
      <Grid {...headerStyles.sideBar}>
        <SideButton {...BUTTONS[0]} />
        <SideButton {...BUTTONS[1]} />
        <Avatar />
      </Grid>
    </Grid>
  );
};

export default Header;
