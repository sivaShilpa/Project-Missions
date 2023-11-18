import { Box, Grid, useMediaQuery} from "@mui/material";
import React from "react";
import headerStyles from "../../../styles/header";
import Image from "next/image";

const SideButton = ({ icon, number, numberSmall, background, borderColor }) => {
  const isXsScreen = useMediaQuery("(max-width: 576px)");

  return (
    <Grid sx={{ ...headerStyles.sideButton(background, borderColor) }}>
      <Image src={icon} alt="icon" />
      <Box sx={{ ...headerStyles.sideButtonFont }}>{ isXsScreen? numberSmall : number}</Box>
    </Grid>
  );
};

export default SideButton;
