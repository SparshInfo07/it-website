import { Metadata } from "next";
import JoinUsPage from "@/components/Pages/JoinUsPage";

export const metadata: Metadata = {
  title: "Join Us | Sparsh IT - Build Your Career at Sparsh IT",
  description:
    "At Sparsh IT, you’ll have the opportunity to build a fulfilling and successful career through continuous learning, career development, and exposure to diverse and challenging projects.",
};

const page = () => {
  return (
    <>
      <JoinUsPage />
    </>
  );
};

export default page;

