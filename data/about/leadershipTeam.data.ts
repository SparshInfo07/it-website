import { ASSETS } from "@/constants/images.constants";

export interface TeamMemberItem {
  id: string;
  name: string;
  role: string;
  image: string;
  imageAlt: string;
}

export interface LeadershipTeamData {
  heading: string;
  subheading: string;
  members: TeamMemberItem[];
}

export const LEADERSHIP_TEAM_DATA: LeadershipTeamData = {
  heading: "Leadership That Connects Business and Technology",
  subheading:
    "Our leadership team combines business insight, technical expertise and delivery experience to guide Sparsh IT’s growth and help clients make confident technology decisions.",
  members: [
    {
      id: "ethan-parker",
      name: "Ethan Parker",
      role: "Chief Executive Officer",
      image: ASSETS.ABOUT_TEAM_ETHAN,
      imageAlt: "Ethan Parker - Chief Executive Officer at Sparsh IT",
    },
    {
      id: "ava-mitchell",
      name: "Ava Mitchell",
      role: "Head of Operations",
      image: ASSETS.ABOUT_TEAM_AVA,
      imageAlt: "Ava Mitchell - Head of Operations at Sparsh IT",
    },
    {
      id: "marcus-virelli",
      name: "Marcus Virelli",
      role: "Director of Technology",
      image: ASSETS.ABOUT_TEAM_MARCUS,
      imageAlt: "Marcus Virelli - Director of Technology at Sparsh IT",
    },
  ],
};

export const leadershipTeamData = LEADERSHIP_TEAM_DATA;
