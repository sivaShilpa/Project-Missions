import ICONS from "./icons";

const MISSIONSCONSTANTS = {
  cardHeaderButtons: ["Backend", "Beginner", "2 hrs"],
  cardTopContent: [
    {
      icon: ICONS.coinicon,
      value: "$12000",
      text: "prize pool",
      borderColor: "var(--gradients-gradient-yellow, #FACC15)",
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
  footerCharacters: [
    ICONS.character1,
    ICONS.character2,
    ICONS.character3,
    ICONS.character4,
    ICONS.character5,
    ICONS.character6,
  ],
  marginLeft: [
    { xxl: 40, xl: 5, lg: 40, md: 10, sm: 5, xs: 10 },
    { xxl: 90, xl: 55, lg: 90, md: 60, sm: 55, xs: 60 },
    { xxl: 140, xl: 105, lg: 140, md: 110, sm: 105, xs: 110 },
    { xxl: 190, xl: 155, lg: 190, md: 160, sm: 155, xs: 160 },
    { xxl: 240, xl: 205, lg: 240, md: 210, sm: 205, xs: 210 },
    { xxl: 290, xl: 255, lg: 290, md: 260, sm: 255, xs: 260 },
  ],
  missionCardRepeat: [0, 1, 2],
};

export default MISSIONSCONSTANTS;
