import React from "react";
import HeroBanner from "./Banner";
import { Benefits } from "./Benifits";
import HowItWorks from "./HowItWorks";
import TestimonialsSlider from "./TestimonialsSlider";
import PreApprovalCTA from "./PreApprovalCTA";
import FAQ from "./Faq";
import ContactMethods from "./ContactMethods";
import AboutUs from "./AboutUs";
import AgentsSection from "./AgenticSection";
import AboutSection from "./AboutSection";

// import ContactMethods from "./ContactMethods";
// import Benifits from "./Benifits";

export const Home = () => {
  return (
    <div className="mt-[60px] font-popins">
      <HeroBanner />
      {/* <AboutUs /> */}
      <Benefits />
      <HowItWorks />
      <AboutSection/>
      {/* <AgentsSection /> */}
      <TestimonialsSlider />
      <PreApprovalCTA />
      <FAQ />
      <ContactMethods />
    </div>
  );
};
