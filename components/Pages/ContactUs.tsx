import React from "react";
import PageBreadcrumb from "@/components/Molecules/PageBreadcrumb/PageBreadcrumb";
import Footer from "@/components/Organisms/Footer/Footer";
import ContactFormSection from "@/components/Organisms/ContactFormSection/ContactFormSection";
import ResourceCards from "@/components/Molecules/ResourceCards/ResourceCards";
import ContactLocations from "@/components/Organisms/ContactLocations/ContactLocations";
import {
  CONTACT_PAGE_BREADCRUMB_DATA,
  CONTACT_CARDS_DATA,
  CONTACT_LOCATIONS_DATA,
  CONTACT_FOOTER_DATA,
} from "@/data/contact-us";

const ContactUs = () => {
  return (
    <>
      <PageBreadcrumb
        title={CONTACT_PAGE_BREADCRUMB_DATA.title}
        backgroundImage={CONTACT_PAGE_BREADCRUMB_DATA.backgroundImage}
      />
      <ContactFormSection />
      <ResourceCards
        title="Shape What’s Next"
        description="Join Sparsh IT, grow your skills, and help shape what’s next."
        cards={CONTACT_CARDS_DATA}
        className="bg-[#FCFCFC]"
      />
      <ContactLocations data={CONTACT_LOCATIONS_DATA} />
      <Footer data={CONTACT_FOOTER_DATA} />
    </>
  );
};

export default ContactUs;
