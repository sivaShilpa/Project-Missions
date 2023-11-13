import React, { useState } from "react";
import { Select, Box, MenuItem, Link } from "@mui/material";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import headerStyles from "../../../styles/Header/styles";
import ICONS from "../../../constants/icons";
import headerTheme from "../../../themes/Header/theme";

const DropdownMenu = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Select
      id="dropdown"
      placeholder="Select a Page"
      indicator={<KeyboardArrowDown sx={{ ...headerStyles.dropDownStyle }} />}
      value={selectedValue}
      onChange={handleChange}
      sx={{ ...headerStyles.dropDownStyle }}
      MenuProps={{
        variant: "menu",
        PaperProps: { sx: { backgroundColor: headerTheme.palette.primary } },
      }}
    >
      <MenuItem value="option0">
        <Box sx={{ ...headerStyles.dropDownText }}>Select a page</Box>
      </MenuItem>
      <Link href="/missions" sx={{ textDecoration: "none" }}>
        <MenuItem
          value="missions"
          gap={10}
          sx={{
            backgroundColor: headerTheme.palette.primary,
            ":hover": {
              backgroundColor: "gray",
            },
          }}
        >
          <Box component="span">{ICONS.rocketicon}</Box>
          <Box component="span" sx={{ ...headerStyles.dropDownText }}>
            Missions
          </Box>
        </MenuItem>
      </Link>
      <Link href="/leaderboard" sx={{ textDecoration: "none" }}>
        <MenuItem
          value="leaderboard"
          gap={10}
          sx={{
            backgroundColor: headerTheme.palette.primary,
            ":hover": {
              backgroundColor: "gray",
            },
          }}
        >
          <Box component="span">{ICONS.trophyicon}</Box>
          <Box component="span" sx={{ ...headerStyles.dropDownText }}>
            Leaderboard
          </Box>
        </MenuItem>
      </Link>
      <Link href="/rewards" sx={{ textDecoration: "none" }}>
        <MenuItem
          value="rewards"
          gap={10}
          sx={{
            backgroundColor: headerTheme.palette.primary,
            ":hover": {
              backgroundColor: "gray",
            },
          }}
        >
          <Box component="span">{ICONS.rewardsicon}</Box>
          <Box component="span" sx={{ ...headerStyles.dropDownText }}>
            Rewards
          </Box>
        </MenuItem>
      </Link>
    </Select>
  );
};

export default DropdownMenu;
