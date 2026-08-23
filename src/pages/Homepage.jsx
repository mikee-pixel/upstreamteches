import SectionLayout from "../components/sections/SectionLayout";
import PrimaryButton from "../components/ui/PrimaryButton";
import SecondaryButton from "../components/ui/SecondaryButton";
import HomepageFeaturedServices from "../components/ui/HomepageFeaturedServices";
import PrimaryLargeButton from "../components/ui/PrimaryLargeButton";
import BlurbIconLeft from "../components/ui/BlurbIconLeft";
import useEntranceAnimation from "../customhooks/useEntranceAnimation";
import useAPIrequest from "../customhooks/useAPIrequest";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Rocket,
  SquareArrowOutUpRight,
  FilePen,
  MoveRight,
  ArrowRight,
} from "lucide-react";
import useCounter from "../customhooks/useCounter";
import ClientLogoCaraousel from "../components/ui/ClientsLogoCarousel";

const Homepage = () => {
  
  //Custom Hook For Counter Function
  const {dataElementToObserve: successProjects, value: successProjectValue} = useCounter(20);
  const {dataElementToObserve: satisfiedClient, value: satisfiedClientValue} = useCounter(10);
  const {dataElementToObserve: websiteTraffic, value: websiteTrafficValue} = useCounter(68);

  //Entrance Animation
  const { targetElement: heroCol1, activeAnimation: heroCol1Animation } = useEntranceAnimation();
  const { targetElement: heroCol2, activeAnimation: heroCol2Animation } = useEntranceAnimation(300) 
  const { targetElement: partnershipTarget, activeAnimation: partnershipAnimation} = useEntranceAnimation();
  const { targetElement: coreServiceRow, activeAnimation: coreServiceAnimation } = useEntranceAnimation(0, 0);
  const { targetElement: quickInfoContainer, activeAnimation: quickInfoAnimation } = useEntranceAnimation();
  const { targetElement: marketingBannerCol1, activeAnimation: marketingBannerCol1Animation } = useEntranceAnimation();
  const { targetElement: marketingBannerCol2, activeAnimation: marketingBannerCol2Animation } = useEntranceAnimation(200);

  return (
    <div id="homepage">
      <SectionLayout class_name="hero">
        <div className="row flex flex-col lg:flex-row justify-between w-full pt-35 md:pt-40 lg:pt-45 pb-10 gap-10">
          <div
            className={`col col1 w-full lg:w-[50%] flex flex-col gap-5 justify-center ${heroCol1Animation ? "scale-up--active" : "scale-up--disabled"}`} ref={heroCol1}>
            <h6 className={`preheading-text gradient-text`} >
              Digital Marketing That Drives Growth
            </h6>
            <h1>
              Accelerate Your Business Growth with <span className="gradient-text">Data-Driven Digital Marketing</span>
            </h1>
            <p className={`large-body`}>
              At UpstreamTeches, we combine passionate service with quality
              solutions to scale your online presence, drive targeted website
              traffic, and maximize your return on ad spend. No guesswork—just
              measurable digital growth built for small businesses.
            </p>
            <div className={`container-buttons flex flex-col md:flex-row justify-center lg:justify-start items-center gap-5 md:gap-10`}>
              <PrimaryButton
                buttonlabel="Our Service"
                icon={<SquareArrowOutUpRight />}
                link={"/services/"}
              />
              <SecondaryButton 
                buttonlabel="Talk To Us" 
                icon={<MoveRight />} 
                link={"/contact-us/"}
              />
            </div>
          </div>
          <div
            className={`col col2 w-full lg:w-[50%] ${heroCol2Animation ? "scale-up--active" : "scale-up--disabled"}`} ref={heroCol2}
          >
            <img
              src="/images/Isometric illustration depicting individuals collaborating on computers_transprent.png"
              alt="Isometric illustration depicting individuals collaborating on computers"
            />
          </div>
        </div>
      </SectionLayout>

      <ClientLogoCaraousel />

      <SectionLayout class_name="core-services flex-row">
        <div
          className={`row flex flex-col items-center w-full pt-30 gap-5 ${coreServiceAnimation ? 'scale-up--active' : 'scale-up--disable'}`}
          ref={coreServiceRow}
        >
          <h6 className="preheading-text gradient-text">Our Core Services</h6>
          <h2 className="w-full lg:w-[80%]">
            Quality Digital Marketing Solutions Formulated for Results
          </h2>
          <p className="w-full lg:w-[60%] sub-heading">
            Every business deserves a powerful digital footprint. We design
            tailored strategies that transform casual browsers into loyal
            customers, using metrics and analytics to guide every decision.
          </p>
          < HomepageFeaturedServices />
          <PrimaryButton
            buttonlabel={"Explore More Our Services"}
            icon={<ArrowRight />}
            link={"/services/"}
          />
        </div>
      </SectionLayout>

      <SectionLayout class_name="quick-info">
        <div
          className="row flex flex-col-reverse lg:flex-row w-full pt-30 gap-20 xl:gap-30"
          ref={quickInfoContainer}
        >
          <div
            className={`col col1 flex flex-col w-full lg:w-[45%] xl:w-[50%] gap-5 ${quickInfoAnimation ? "slide-left--active" : "slide-left--disabled"}`}
          >
            <h2 className="heading">Why Small Businesses Partner with UpstreamTeches</h2>
            <p className="sub-heading">
              Building a successful online presence shouldn't feel like a shot
              in the dark. At UpstreamTeches, we reject cookie-cutter packages
              to act as your extended marketing department. We bridge the gap
              between passionate digital execution and concrete analytic
              results, aligning our quality web solutions with your real-world
              financial goals to ensure every marketing dollar counts.
            </p>
            <hr />
            <div
              className="container-statistic-data flex flex-col sm:flex-row justify-center items-center gap-5 xl:gap-10"
              
            >
              <div className="stat-item flex flex-col items-center sm:items-start gap-0">
                <div className="stat-num flex flex-row items-center gap-2 gradient-text" ref={successProjects}>
                  {successProjectValue}+
                </div>
                <p>Success Projects</p>
              </div>
              <div className="stat-item flex flex-col items-center sm:items-start gap-0">
                <div className="stat-num flex flex-row items-center gap-2 gradient-text" ref={satisfiedClient}>
                  {satisfiedClientValue}+
                </div>
                <p>Satisfied Client</p>
              </div>
              <div className="stat-item flex flex-col items-center sm:items-start gap-0">
                <div className="stat-num flex flex-row items-center gap-2 gradient-text" ref={websiteTraffic}>
                  {websiteTrafficValue}%
                </div>
                <p>Website Traffic</p>
              </div>
            </div>
          </div>
          <div
            className={`col col2 w-full lg:w-[50%] xl:w-[45%] ${quickInfoAnimation ? "slide-right--active" : "slide-right--disabled"}`}
          >
            <img
              src="/images/Two business men shaking hands during a meeting in frame.png"
              alt="Two business men shaking hands during a meeting"
              className="about-featured-image"
            />
          </div>
        </div>
      </SectionLayout>

      <SectionLayout class_name="marketing-banner">
        <div
          className="row flex flex-col w-full mt-30"
        >
          <div
            className={`upper-banner flex flex-col lg:flex-row items-center justify-between w-full gap-10 xl:gap-30 py-10 sm:py-15 px-10 sm:px-15 ${marketingBannerCol1Animation ? "slide-up--active" : "slide-up--disabled"}`} ref={marketingBannerCol1}
          >
            <div className="col col1 w-full xl:w-[65%]">
              <div className="icon-box flex flex-col sm:flex-row items-start lg:items-center gap-5">
                <Rocket className="lucide-icon-rocket" />
                <div className="blurb-content flex flex-col gap-3">
                  <h3>Ready to Grow Your Business?</h3>
                  <p>
                    Let’s stop guessing and start scaling. Partner with
                    UpstreamTeches today to get a data-driven strategy that
                    drives traffic, increases conversions, and accelerates your
                    digital growth.
                  </p>
                  <div className="btn-container">
                    <PrimaryLargeButton
                    buttonlabel="Get a Free Consultation"
                    icon={<FilePen />}
                    link={"/contact-us/"}
                  />
                  </div>
                  
                </div>
              </div>
            </div>
            <div className="col col2 flex justify-end w-full xl:w-[30%] ">
              <PrimaryLargeButton
                buttonlabel="Get a Free Consultation"
                icon={<FilePen />}
                link={"/contact-us/"}
              />
            </div>
          </div>
          <div
            className={`container-icon-box flex flex-row flex-wrap justify-between w-full gap-10 lg:gap-5 py-10 sm:py-15 sm:px-15 px-10 ${marketingBannerCol2Animation ? "slide-up--active" : "slide-up--disabled"}`} ref={marketingBannerCol2}
          >
            <BlurbIconLeft
              icon="/images/data driven strategies icon.png"
              icon_alt="data driven icon"
              title="Data-Driven Strategies"
              width="w-full sm:w-[45%] lg:w-[23%]"
            />
            <BlurbIconLeft
              icon="/images/transparent reporting icon.png"
              icon_alt="transparent reporting icon"
              title="Transparent Reporting"
              width="w-full sm:w-[45%] lg:w-[23%]"
            />
            <BlurbIconLeft
              icon="/images/roi focused icon.png"
              icon_alt="roi focused icon"
              title="ROI Focused"
              width="w-full sm:w-[45%] lg:w-[23%]"
            />
            <BlurbIconLeft
              icon="/images/dedicated support icon.png"
              icon_alt="dedicated support icon"
              title="Dedicated Support"
              width="w-full sm:w-[45%] lg:w-[23%]"
            />
          </div>
        </div>
      </SectionLayout>
    </div>
  );
};

export default Homepage;
