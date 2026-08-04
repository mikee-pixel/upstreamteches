import SectionLayout from "../components/sections/SectionLayout";
import PrimaryButton from "../components/ui/PrimaryButton";
import { Rocket, MoveRight, MoveUpRight, PhoneOutgoing, Phone } from "lucide-react";
import SecondaryButton from "../components/ui/SecondaryButton";
import ClientLogoCaraousel from "../components/ui/ClientsLogoCarousel";

const OurServices = () => {
  return (
    <div id="our-services">
      <SectionLayout class_name={"hero"}>
        <div className="row flex flex-col lg:flex-row justify-between items-center gap-10 pt-45">
          <div
            className={`col1 flex flex-col items-center lg:items-start gap-5 `}
          >
            <h6 className={`preheading-text gradient-text`}>
              Our Services
            </h6>
            <h1>Digital Marketing Solutions That Drive <span className="gradient-text">Real Results</span></h1>
            <p>
              From strategy to executions, we deliver data-driven digital marketing services that help your business grow, connect with your audience, and achieve measurable success.
            </p>
            <div
              className={`container-buttons flex flex-col md:flex-row justify-center lg:justify-start items-center gap-5 md:gap-10`}
            >
              <PrimaryButton
                buttonlabel="Let's Grow Together"
                icon={<Rocket />}
              />
              <SecondaryButton buttonlabel="Call Us Now" icon={<PhoneOutgoing />} />
            </div>
          </div>
          <div className={`col2 flex flex-col items-center`}>
            <div className="img-container">
              <img
                className="hero-banner-image"
                src="/images/Laptop with data analysis for leads, revenue, and conversation.png"
                alt="Laptop with data analysis for leads, revenue, and conversation"
              />
            </div>
          </div>
        </div>
      </SectionLayout>

      <ClientLogoCaraousel />
      
    </div>
  );
};

export default OurServices;
