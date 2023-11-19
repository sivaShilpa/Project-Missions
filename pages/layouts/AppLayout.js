import { Grid } from "@mui/material";
import React from "react";
import Header from "../../templates/Header/Header";

export const AppLayout = ({ children }) => {
  return (
    <Grid>
      <Grid>
        <Header />
      </Grid>
      <Grid>{children}</Grid>
    </Grid>
  );
};
