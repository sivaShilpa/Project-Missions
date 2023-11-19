import { Box } from "@mui/material";
import React from "react";
import ICONS from "../../../constants/icons";
import Image from "next/image";
import headerStyles from "../../../styles/header";

const Avatar = () => {
  return (
    <Box>
      <Box {...headerStyles.avatar}>
        <Image src={ICONS.avataricon} alt="avatar" />
      </Box>
      <Box {...headerStyles.avatarStatus}>
        <Image src={ICONS.statusOnlineicon} alt="statusOnline" />
      </Box>
    </Box>
  );
};

export default Avatar;
