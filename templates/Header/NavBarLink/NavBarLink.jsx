"use client";
import React from "react";
import { useRouter } from "next/router";
import { Box, Link, Typography } from "@mui/material";
import headerStyles from "../../../styles/headerStyles";

const NavBarLink = ({ text, link, icon }) => {
  const { route } = useRouter();
  return (
    <Box {...headerStyles.navbarItem}>
      <Box>{icon}</Box>
      <Box
        id={text}
        sx={
          route == link
            ? { ...headerStyles.linkTextWrapActive }
            : { ...headerStyles.linkTextWrap }
        }
      >
        <Link href={link} sx={{ textDecoration: "none" }}>
          <Typography id="linkText" {...headerStyles.navBarText}>
            {text}
          </Typography>
        </Link>
        <Box id="linkTextLine"></Box>
      </Box>
    </Box>
  );
};

export default NavBarLink;
