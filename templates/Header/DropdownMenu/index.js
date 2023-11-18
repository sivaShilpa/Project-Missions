import React from "react";
import { Select, Box, MenuItem, Link } from "@mui/material";
import headerStyles from "../../../styles/header";
import ICONS from "../../../constants/icons";
import theme from "../../../themes/theme";
import { useRouter } from "next/router";
import Image from "next/image";
import makeStyles from "@mui/styles";

const DropdownMenu = () => {
  const { route } = useRouter();

  return (
    <Select
      id="dropdown"
      placeholder="Select a Page"
      IconComponent={() => (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "50px",
            height: "30px",
          }}
        >
          <Image src={ICONS.arrowDown} alt="arrowDown" />
        </Box>
      )}
      defaultValue="select"
      displayEmpty={true}
      renderValue={() =>
        route == "/missions" ? (
          <MenuItem value="missions" gap={10}>
            <Box component="span">{ICONS.rocketicon}</Box>
            <Box {...headerStyles.dropDownText}>Missions</Box>
          </MenuItem>
        ) : route == "/leaderboard" ? (
          <MenuItem value="leaderboard" gap={10}>
            <Box component="span">{ICONS.trophyicon}</Box>
            <Box component="span" {...headerStyles.dropDownText}>
              Leaderboard
            </Box>
          </MenuItem>
        ) : route == "/rewards" ? (
          <MenuItem value="rewards" gap={10}>
            <Box component="span">{ICONS.rewardsicon}</Box>
            <Box component="span" {...headerStyles.dropDownText}>
              Rewards
            </Box>
          </MenuItem>
        ) : (
          <MenuItem value="select">
            <Box {...headerStyles.dropDownText}>Select a page</Box>
          </MenuItem>
        )
      }
      sx={{ ...headerStyles.dropDownStyle }}
      MenuProps={{
        variant: "menu",
        PaperProps: {
          sx: {
            backgroundColor: theme.headerTheme.primary,
          },
        },
      }}
    >
      <MenuItem value="select" sx={{margin:0}}>
        <Box {...headerStyles.dropDownText}>Select a page</Box>
      </MenuItem>
      <Link href="/missions" sx={{ textDecoration: "none", margin: 0}}>
        <MenuItem value="missions" gap={10}>
          <Box component="span">{ICONS.rocketicon}</Box>
          <Box {...headerStyles.dropDownText}>Missions</Box>
        </MenuItem>
      </Link>
      <Link href="/leaderboard" sx={{ textDecoration: "none", margin: 0}}>
        <MenuItem value="leaderboard" gap={10}>
          <Box component="span">{ICONS.trophyicon}</Box>
          <Box component="span" {...headerStyles.dropDownText}>
            Leaderboard
          </Box>
        </MenuItem>
      </Link>
      <Link href="/rewards" sx={{ textDecoration: "none", margin: 0 }}>
        <MenuItem value="rewards" gap={10}>
          <Box component="span">{ICONS.rewardsicon}</Box>
          <Box component="span" {...headerStyles.dropDownText}>
            Rewards
          </Box>
        </MenuItem>
      </Link>
    </Select>
  );
};

export default DropdownMenu;
