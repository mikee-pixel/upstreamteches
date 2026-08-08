import SectionLayout from "../components/sections/SectionLayout";
import PrimaryButton from "../components/ui/PrimaryButton";
import SecondaryButton from "../components/ui/SecondaryButton";
import CounterWidget from "../components/ui/CounterWidget";
import useCounter from "../customhooks/useCounter";
import useEntranceAnimation from "../customhooks/useEntranceAnimation";
import {
  Rocket,
  MoveRight,
  MoveUpRight,
  UserStar,
  ChartNoAxesCombined,
  Trophy,
  Award,
  Eye,
  Gem,
} from "lucide-react";
import MarketingBanner from "../components/ui/MarketingBanner";

const Aboutpage = () => {

  //Custom Hooks for Counter Function.
  const {dataElementToObserve: happyClientObserver, value: happyClientValue} = useCounter(20);
  const {dataElementToObserve: campaignObserver, value: campaignValue} = useCounter(120);
  const {dataElementToObserve: yearsOfExperienceObserver, value: yearsOfExperienceValue} = useCounter(6);
  const {dataElementToObserve: clientSatisfactionObserver, value: clientSatisfactionValue} = useCounter(99);


  //Custom Hooks for Animation
  const {targetElement: heroCol1, activeAnimation: heroCol1Animation} = useEntranceAnimation();
  const {targetElement: heroCol2, activeAnimation: heroCol2Animation} = useEntranceAnimation(300);
  const {targetElement: whoWeAreCol1, activeAnimation: whoWeAreCol1Animation} = useEntranceAnimation(100);
  const {targetElement: whoWeAreCol2, activeAnimation: whoWeAreCol2Animation} = useEntranceAnimation(200);
  const {targetElement: ourValuesRow1, activeAnimation: ourValuesRow1Animation} = useEntranceAnimation(200);
  const {targetElement: ourValuesRow2Icon1, activeAnimation: ourValuesRow2Icon1Animation} = useEntranceAnimation(400);
  const {targetElement: ourValuesRow2Icon2, activeAnimation: ourValuesRow2Icon2Animation} = useEntranceAnimation(600);
  const {targetElement: ourValuesRow2Icon3, activeAnimation: ourValuesRow2Icon3Animation} = useEntranceAnimation(400);
  const {targetElement: marketingBanner, activeAnimation: marketingBannerAnimation} = useEntranceAnimation(100);

  return (
    <div id="about-us">
      <SectionLayout class_name="hero">
        <div className="row flex flex-col lg:flex-row justify-between items-center gap-10 pt-45">
          <div className={`col1 flex flex-col items-center lg:items-start gap-5 ${heroCol1Animation ? 'scale-up--active' : 'scale-up--disabled'}`} ref={heroCol1}>
            <h6 className={`preheading-text gradient-text`}>
              Passionate People. Powerful Strategies. Real Results.
            </h6>
            <h1>About Us</h1>
            <p>
              We help small businesses build a strong online presence, drive
              targeted traffic, and grow with data-driven digital marketing
              solutions.
            </p>
            <div
              className={`container-buttons flex flex-col md:flex-row justify-center lg:justify-start items-center gap-5 md:gap-10`}
            >
              <PrimaryButton
                buttonlabel={"Explore Our Services"}
                icon={<Rocket />}
                link={"/services/"}
              />
              <SecondaryButton 
                buttonlabel={"Contact Us"} 
                icon={<MoveRight />} 
                link={"/contact-us"}
              />
            </div>
          </div>
          <div className={`col2 flex flex-col items-center ${heroCol2Animation ? 'scale-up--active' : 'scale-up--disabled'}`} ref={heroCol2}>
            <div className="img-container">
              <div className="dots-pattern-container">
                <img
                  src="/images/primary color dots pattern.png"
                  alt="primary color dots pattern"
                />
              </div>
              <img
                className="hero-banner-image"
                src="/images/A group of diverse business professionals gathered around a laptop.png"
                alt="A group of diverse business professionals gathered around a laptop"
              />
            </div>
            <div className="floating-content growth-driven-container">
              <p className="floating-text floating-text1">
                <strong>Growth Driven</strong>
              </p>
              <p className="floating-text floating-text2">
                Results That Matter
              </p>
              <p className="flex items-center floating-text floating-text3">
                128% <MoveUpRight />
              </p>
              <p className="floating-text floating-text4">
                Avg. Traffic Increase
              </p>
              <div className="growth-driven-image-container">
                <img src="/images/Growth Driven.jpg" alt="Growth Drive Image" />
              </div>
            </div>
          </div>
        </div>
      </SectionLayout>

      <SectionLayout class_name={"who-we-are"}>
        <div className="row flex flex-col lg:flex-row justify-between items-center gap-10 pt-55 sm:pt-35">
          <div className={`col col1 flex flex-col flex-start gap-5 ${whoWeAreCol1Animation ? 'slide-left--active' : 'slide-left--disabled'}`} ref={whoWeAreCol1}>
            <h6 className="preheading-text gradient-text">Who We Are</h6>
            <h2>Your Partner in Digital Marketing & Innovation</h2>
            <p>
              UpstreamTeches is a dynamic digital marketing agency committed to
              driving business growth through innovative solutions. With a focus
              on adaptability, problem-solving, open communication, and
              creativity, we deliver tailored strategies that resonate with your
              target audience.
            </p>
            <p>
              Our team of experienced digital marketing experts specializes in a
              wide range of services, including: Search Engine, Optimization
              (SEO), Pay-Per-Click (PPC), Advertising, Social Media Marketing,
              Content Marketing, Email Marketing, Web Design and Development
            </p>
          </div>
          <div className={`col col2 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-2 gap-20 justify-center ${whoWeAreCol2Animation ? 'slide-right--active' : 'slide-right--disabled' }`} ref={whoWeAreCol2}>
            <CounterWidget
              icon={<UserStar />}
              title={happyClientValue}
              suffix={"+"}
              content={"Happy Client"}
              ref={happyClientObserver}
            />
            <CounterWidget
              icon={<ChartNoAxesCombined />}
              title={campaignValue}
              suffix={"+"}
              content={"Campaigns Delivered"}
              ref={campaignObserver}
            />
            <CounterWidget
              icon={<Trophy />}
              title={yearsOfExperienceValue}
              suffix={"+"}
              content={"Years of Experience"}
              ref={yearsOfExperienceObserver}
            />
            <CounterWidget
              icon={<Award />}
              title={clientSatisfactionValue}
              suffix={"%"}
              content={" Client Satisfaction"}
              ref={clientSatisfactionObserver}
            />
          </div>
        </div>
      </SectionLayout>

      <SectionLayout class_name="our-core-values">
        <div className={`row row1 pt-30 flex justify-center ${ourValuesRow1Animation ? 'scale-up--active' : 'scale-up--disabled'}`} ref={ourValuesRow1}>
          <div className="col flex flex-col gap-5">
            <h6 className="preheading-text gradient-text">Our Core Values</h6>
            <h2>Pioneering the Next Generation of Digital Marketing</h2>
            <p>
              At Upstreamteches, we embrace innovation as the driving force
              behind our success. We continuously explore new technologies and
              approaches to deliver cutting-edge solutions that propel our
              clients’ businesses forward.
            </p>
          </div>
        </div>
        <div className="row row2 pt-20">
          <div className="col flex flex-col lg:flex-row justify-between max-[1023px]:items-center gap-10 lg:gap-5">
              {/*Blurb Icon Item */}
              <div className={`blurb-icon-top flex flex-col items-center gap-5 w-[100%] sm:w-[70%] lg:w-[30%] ${ourValuesRow2Icon1Animation ? 'fade-in--active' : 'fade-in--disabled'}`} ref={ourValuesRow2Icon1}>
                <div className="blurb-icon-container"><Rocket /></div>
                <div className="blurb-content-container flex flex-col gap-5">
                  <h3 className="blurb-title">Our Mission</h3>
                  <div className="blurb-content">
                    <p className="blurb-text">
                      To provide innovative digital marketing solutions that
                      drive business growth, leveraging our adaptability,
                      problem-solving skills, and open communication to meet the
                      ever-changing needs of our clients.
                    </p>
                  </div>
                </div>
              </div>

              {/*Blurb Icon Item */}
              <div className={`blurb-icon-top flex flex-col items-center gap-5 w-[100%] sm:w-[70%] lg:w-[30%] ${ourValuesRow2Icon2Animation ? 'fade-in--active' : 'fade-in--disabled'}`} ref={ourValuesRow2Icon2}>
                <div className="blurb-icon-container"><Eye /></div>
                <div className="blurb-content-container flex flex-col gap-5">
                  <h3 className="blurb-title">Our Vision</h3>
                  <div className="blurb-content">
                    <p className="blurb-text">
                      To be the leading digital marketing agency, recognized for
                      our creative and effective strategies, strong client
                      relationships, and commitment to delivering exceptional
                      results.
                    </p>
                  </div>
                </div>
              </div>

              {/*Blurb Icon Item */}
              <div className={`blurb-icon-top flex flex-col items-center gap-5 w-[100%] sm:w-[70%] lg:w-[30%] ${ourValuesRow2Icon3Animation ? 'fade-in--active' : 'fade-in--disabled'}`} ref={ourValuesRow2Icon3}>
                <div className="blurb-icon-container"><Gem /> </div>
                <div className="blurb-content-container flex flex-col gap-5 items-center">
                  <h3 className="blurb-title">Our Values</h3>
                  <div className="blurb-content">
                    <ul className="content-list">
                      <li className="item-content-list flex flex-col">
                        <p className="text-title">Innovation First</p>
                        <p>We embrace new ideas and technologies.</p>
                      </li>
                      <li className="item-content-list flex flex-col">
                        <p className="text-title">Client-Centered</p>
                        <p>Our client's success is our priority.</p>
                      </li>
                      <li className="item-content-list flex flex-col">
                        <p className="text-title">Transparency</p>
                        <p>We believe in open communication and honesty.</p>
                      </li>
                      <li className="item-content-list flex flex-col">
                        <p className="text-title">Excellence</p>
                        <p>
                          We are committed to deliverying outstanding results.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </SectionLayout>

      <MarketingBanner 
        pre_heading={"Boost Your Brand, Drive Sales, and Increase Online Visibility"}
        title={"Elevate Your Business With Expert Digital Marketing"}
        sub_heading={"Elevate Your Business With Expert Digital Marketing"}
        button_label={"Contact Us"}
        button_link={"/contact-us/"}
      />
    </div>
  );
};

export default Aboutpage;
