import { Box, Grid, useMediaQuery } from "@mui/material";
import React from "react";
import headerStyles from "../../../styles/headerStyles";
import Image from "next/image";

const SideButton = ({ icon, number, numberSmall, background, borderColor }) => {
  const isXsScreen = useMediaQuery("(max-width: 576px)");

  return (
    <Grid {...headerStyles.sideButton(background, borderColor)}>
      <Image src={icon} alt="icon" />
      <Box {...headerStyles.sideButtonFont}>
        {isXsScreen ? numberSmall : number}
      </Box>
    </Grid>
  );
};

export default SideButton;
