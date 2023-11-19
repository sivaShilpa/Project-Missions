import ICONS from "../constants/icons";
import theme from "../themes/theme";

const MissionsData = {
  cardHeaderButtons: ["Backend", "Beginner", "2 hrs"],
  cardTopContent: [
    {
      icon: ICONS.coinicon,
      value: "$12000",
      text: "prize pool",
      borderColor: (theme)=> theme.missionsTheme.topContentButtonCoin,
    },
    {
      icon: ICONS.groupicon,
      value: "34/50",
      text: "players",
      borderColor: "var(--gradients-gradient-red, #FF5A5F)",
    },
    {
      icon: ICONS.diamondicon,
      value: 500,
      text: "entry fee",
      borderColor: "var(--gradients-gradient-blue, #246BFD)",
    },
  ],
  cardContentButtons: [
    {
      number: "00",
      text: "Days",
    },
    {
      number: "04",
      text: "Hours",
    },
    {
      number: "24",
      text: "Minutes",
    },
  ],
};

export default MissionsData;
