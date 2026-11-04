import React from "react";
import PageBreadcrumb from "@/components/Molecules/PageBreadcrumb/PageBreadcrumb";
import ResourceCards from "@/components/Molecules/ResourceCards/ResourceCards";
import RightTechnology from "@/components/Organisms/homepage/RightTechnology/RightTechnology";
import JobListingSection from "@/components/Organisms/join-us/JobListingSection";
import Footer from "@/components/Organisms/Footer";
import {
  JOIN_US_PAGE_BREADCRUMB_DATA,
  JOIN_US_RESOURCE_CARDS_DATA,
  JOIN_US_RIGHT_TECHNOLOGY_DATA,
  JOIN_US_FOOTER_DATA,
} from "@/data/join-us";

const JoinUsPage = () => {
  return (
    <>
      <PageBreadcrumb
        title={JOIN_US_PAGE_BREADCRUMB_DATA.title}
        subtitle={JOIN_US_PAGE_BREADCRUMB_DATA.subtitle}
        backgroundImage={JOIN_US_PAGE_BREADCRUMB_DATA.backgroundImage}
      />
      <JobListingSection />
      <ResourceCards
        title="Work With Sparsh IT"
        cards={JOIN_US_RESOURCE_CARDS_DATA}
        className="bg-[#FCFCFC]"
      />
      <RightTechnology
        data={JOIN_US_RIGHT_TECHNOLOGY_DATA}
        className="pt-0!"
      />
      <Footer data={JOIN_US_FOOTER_DATA} />
    </>
  );
};

export default JoinUsPage;
