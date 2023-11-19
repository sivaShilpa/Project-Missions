import React from "react";
import { Button, Card, Grid, Divider } from "@mui/material";
import Image from "next/image";
import ICONS from "../../constants/icons";
import missionsStyles from "../../styles/missions";
import MISSIONSCONSTANTS from "../../constants/missions";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MissionsData from "../../mockData/missionsData";

const MissionsCard = () => {
  return (
    <Card {...missionsStyles.card}>
      <Image
        alt="Card Header Image"
        src={ICONS.cardHeader}
        height="180px"
        width={550}
      />
      <Grid {...missionsStyles.header}>
        <Grid item container sx={{ width: "75px" }}>
          <Image alt="Blue Icon" src={ICONS.blueIcon} />
        </Grid>
        <Grid {...missionsStyles.headerContent}>
          <Grid {...missionsStyles.headerTitle}>Search</Grid>
          <Grid {...missionsStyles.headerButtonsContainer}>
            {MissionsData.cardHeaderButtons.map((el) => (
              <Grid item {...missionsStyles.headerButton}>
                {el}
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Divider sx={{ backgroundColor: "#35383F" }} />
      <Grid {...missionsStyles.content}>
        <Grid {...missionsStyles.cardTopContent}>
          {MissionsData.cardTopContent.map((el) => (
            <Grid {...missionsStyles.topContentContainer}>
              <Grid
                {...missionsStyles.topContentButton}
                sx={{ borderColor: el.borderColor }}
              >
                {el.text == "players" ? (
                  <Image src={el.icon} alt="icon" />
                ) : (
                  <Image src={el.icon} alt="icon" width={20} height={20} />
                )}
                <Grid {...missionsStyles.topButtonValue}>{el.value}</Grid>
              </Grid>
              <Grid {...missionsStyles.topButtonText}>{el.text}</Grid>
            </Grid>
          ))}
        </Grid>
        <Grid {...missionsStyles.bottomContent}>
          <Grid {...missionsStyles.bottomTitle}>ends in</Grid>
          <Grid {...missionsStyles.contentNumberContainer}>
            {MissionsData.cardContentButtons.map((el) => (
              <Grid {...missionsStyles.bottomNumberText}>
                <Grid {...missionsStyles.bottomNumber}>{el.number}</Grid>
                <Grid {...missionsStyles.bottomText}>{el.text}</Grid>
              </Grid>
            ))}
          </Grid>
          <Grid container item sx={{ padding: "16px" }}>
            <Button {...missionsStyles.startNowButton}>
              Start Now <ArrowForwardIcon />{" "}
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Divider sx={{ backgroundColor: "#35383F" }} />
      <Grid container>
        <Button {...missionsStyles.footerButton}>
          {" "}
          View Current Leaderboard {ICONS.trophyicon}{" "}
        </Button>
      </Grid>
      <Grid {...missionsStyles.footerCharacter}>
        {MISSIONSCONSTANTS.footerCharacters.map((el, index) => (
          <Grid
            item
            sx={{
              position: "absolute",
              left: MISSIONSCONSTANTS.marginLeft[index],
            }}
          >
            <Image src={el} alt="character" />
          </Grid>
        ))}
      </Grid>
    </Card>
  );
};

export default MissionsCard;
