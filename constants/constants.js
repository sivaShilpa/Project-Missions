import ICONS from "../components/icons/icons";
import ROUTES from "../routes/routes";

const CONSTANTS = {
  navbarPages: [
    {
      text: 'Missions',
      link: ROUTES.MISSIONS,
      icon: ICONS.rocketicon,
    },
    {
      text: 'Leaderboard',
      link: ROUTES.LEADERBOARD,
      icon: ICONS.trophyicon,
    },
    {
      text: 'Rewards',
      link: ROUTES.REWARDS,
      icon: ICONS.rewardsicon,
    }
  ],
}

export default CONSTANTS