import { ASSETS } from "@/constants/images.constants";
import type { WhyBusinessesChooseData } from "@/data/about";

export const GCC_OUTCOMES_DATA: WhyBusinessesChooseData = {
  heading: "Engineering Capacity That Moves with Your Business",
  subheading:
    "Our offshore delivery model combines specialized expertise, coordinated execution and flexible capacity to strengthen delivery, access critical skills and maintain continuity across evolving technology programs.",
  cards: [
    {
      id: "expanded-engineering-capacity",
      title: "Expanded Engineering Capacity",
      subtitle: "More Capability When Priorities Demand IT.",
      description:
        "Add engineering capacity around priority initiatives without overloading internal teams, giving projects timely access to relevant expertise as workloads, timelines, technologies and delivery demands continue to shift.",
      icon: ASSETS.GCC_OUTCOMES_EXPANDED_CAPACITY,
    },
    {
      id: "specialized-technology-expertise",
      title: "Specialized Technology Expertise",
      subtitle: "The Right Skills for Complex Initiatives.",
      description:
        "Bring in specialized capabilities across applications, AI, cloud, data, DevSecOps and quality engineering, allowing complex initiatives to progress without permanently building every required skill internally.",
      icon: ASSETS.GCC_OUTCOMES_SPECIALIZED_EXPERTISE,
    },
    {
      id: "integrated-global-execution",
      title: "Integrated Global Execution",
      subtitle: "Distributed Teams. Shared Direction.",
      description:
        "Keep client stakeholders and offshore teams working toward shared priorities through coordinated execution, clear ownership and transparent communication that strengthen consistency and accountability across distributed programs.",
      icon: ASSETS.GCC_OUTCOMES_INTEGRATED_EXECUTION,
    },
    {
      id: "sustainable-engineering-continuity",
      title: "Sustainable Engineering Continuity",
      subtitle: "Support That Continues Beyond Delivery.",
      description:
        "Maintain momentum beyond initial delivery with modernization, testing, maintenance and enhancement support that helps critical applications and platforms remain stable, relevant and ready for evolving business needs.",
      icon: ASSETS.GCC_OUTCOMES_SUSTAINABLE_CONTINUITY,
    },
  ],
};
