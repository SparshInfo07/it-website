import { OUR_WORK_DATA, type OurWorkData } from "@/data/HomePage/ourWork.data";

export const SERVICE_APP_WORK_DATA: OurWorkData = {
  ...OUR_WORK_DATA,
  tag: "PORTFOLIO",
  heading: "Featured Work & Success Stories",
  subheading:
    "Explore how we helped fast-growing brands and enterprises engineer high-performing software that solved real operational challenges.",
  cta: {
    label: "Explore All Case Studies",
    href: "/contact-us",
  },
};

export const serviceAppWorkData = SERVICE_APP_WORK_DATA;
