import SectionLayout from "../components/sections/SectionLayout";
import PrimaryButton from "../components/ui/PrimaryButton";
import SecondaryButton from "../components/ui/SecondaryButton";
import BlurbIconTop from "../components/ui/BlurbIconTop";
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

const Aboutpage = () => {
  return (
    <div id="about-us">
      <SectionLayout class_name="hero">
        <div className="row flex flex-row justify-between items-center gap-10 pt-45">
          <div className="col1 flex flex-col flex-start gap-5">
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
                buttonlabel="Explore Our Services"
                icon={<Rocket />}
              />
              <SecondaryButton buttonlabel="Contact Us" icon={<MoveRight />} />
            </div>
          </div>
          <div className="col2 flex flex-col items-center">
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
        <div className="row flex flex-row justify-between items-center gap-10 pt-35">
          <div className="col col1 flex flex-col flex-start gap-5">
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
          <div className="col col2 grid grid-cols-2 gap-20 justify-center">
            <BlurbIconTop
              icon={<UserStar />}
              title={"50+"}
              content={"Happy Client"}
            />
            <BlurbIconTop
              icon={<ChartNoAxesCombined />}
              title={"120+"}
              content={"Campaigns Delivered"}
            />
            <BlurbIconTop
              icon={<Trophy />}
              title={"6+"}
              content={"Years of Experience"}
            />
            <BlurbIconTop
              icon={<Award />}
              title={"98%"}
              content={" Client Satisfaction"}
            />
          </div>
        </div>
      </SectionLayout>

      <SectionLayout class_name="our-core-values">
        <div className="row row1 pt-30 flex justify-center">
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
          <div className="col flex flex-row justify-between gap-5">
            <BlurbIconTop
              icon={<Rocket />}
              title={"Our Mission"}
              content={
                <p className={"text-content"}>
                  To provide innovative digital marketing solutions that drive
                  business growth, leveraging our adaptability, problem-solving
                  skills, and open communication to meet the ever-changing needs
                  of our clients.
                </p>
              }
              width={"w-[30%]"}
            />
            <BlurbIconTop
              icon={<Eye />}
              title={"Our Vision"}
              content={
                <p className={"text-content"}>
                  To be the leading digital marketing agency, recognized for our
                  creative and effective strategies, strong client
                  relationships, and commitment to delivering exceptional
                  results.
                </p>
              }
              width={"w-[30%]"}
            />
            <BlurbIconTop
              icon={<Gem />}
              title={"Our Values"}
              content={
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
                    <p>We are committed to deliverying outstanding results.</p>
                  </li>
                </ul>
              }
              width={"w-[30%]"}
            />
          </div>
        </div>
        <div className="row row3 pt-20">
          <div className="col flex flex-row justify-between gap-5">
              {/*Blurb Icon Item */}
              <div className="blurb-icon-top flex flex-col items-center gap-5 w-[30%]">
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
              <div className="blurb-icon-top flex flex-col items-center gap-5 w-[30%]">
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
              <div className="blurb-icon-top flex flex-col items-center gap-5 w-[30%]">
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
    </div>
  );
};

export default Aboutpage;
