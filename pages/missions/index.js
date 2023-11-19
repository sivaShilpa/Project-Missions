import { Grid, useMediaQuery } from "@mui/material";
import Image from "next/image";
import React from "react";
import missionsStyles from "../../styles/missions";
import ICONS from "../../constants/icons";
import MissionsCard from "../../components/missionsCard";
import MISSIONSCONSTANTS from "../../constants/missions";

const Missions = () => {
  const isSmScreen = useMediaQuery("(max-width: 1024px)");
  return (
    <Grid {...missionsStyles.main}>
      {isSmScreen ? null : (
        <Image src={ICONS.featuredQuest} width={1789} height="200%" />
      )}

      <Grid {...missionsStyles.missionsCardRepeat}>
        {MISSIONSCONSTANTS.missionCardRepeat.map(() => (
          <MissionsCard />
        ))}
      </Grid>
    </Grid>
  );
};

export default Missions;
