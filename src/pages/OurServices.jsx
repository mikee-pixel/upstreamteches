import SectionLayout from "../components/sections/SectionLayout";
import PrimaryButton from "../components/ui/PrimaryButton";
import { Rocket, MoveRight, MoveUpRight, PhoneOutgoing, Phone, PieChart, Trophy, Puzzle, HeartHandshake } from "lucide-react";
import SecondaryButton from "../components/ui/SecondaryButton";
import ClientLogoCaraousel from "../components/ui/ClientsLogoCarousel";
import useAPIrequest from "../customhooks/useAPIrequest";
import BlurbIconTop from "../components/ui/CounterWidget";
import HomepageFeaturedServices from "../components/ui/HomepageFeaturedServices";
import { Link } from "react-router-dom";
import BlurbImageWidget from "../components/ui/BlurbImageWidget";
import MarketingBanner from "../components/ui/MarketingBanner";
import useEntranceAnimation from "../customhooks/useEntranceAnimation";

const OurServices = () => {

  //Service API Request
  const {data, loading, errorMessage} = useAPIrequest("http://localhost:8000/services");

  const {targetElement: heroCol1, activeAnimation: heroCol1Animation} = useEntranceAnimation();
  const {targetElement: heroCol2, activeAnimation: heroCol2Animation} = useEntranceAnimation(300);
  const {targetElement: whatWeDo, activeAnimation: whatWeDoAnimation} = useEntranceAnimation();
  const {targetElement: whyChooseUseCol, activeAnimation: whyChooseUseColAnimation} = useEntranceAnimation();

  return (
    <div id="our-services">
      <SectionLayout class_name={"hero"}>
        <div className="row flex flex-col lg:flex-row justify-between items-center gap-10 pt-45">
          <div className={`col1 flex flex-col items-center lg:items-start gap-5 ${heroCol1Animation ? 'scale-up--active' : 'scale-up--disabled'}`} ref={heroCol1}>
            <h6 className={`preheading-text gradient-text`}>
              Our Services
            </h6>
            <h1>Digital Marketing Solutions That Drive <span className="gradient-text">Real Results</span></h1>
            <p className="sub-heading">
              From strategy to executions, we deliver data-driven digital marketing services that help your business grow, connect with your audience, and achieve measurable success.
            </p>
            <div
              className={`container-buttons flex flex-col md:flex-row justify-center lg:justify-start items-center gap-5 md:gap-10`}
            >
              <PrimaryButton
                buttonlabel={"Let's Grow Together"}
                icon={<Rocket />}
                link={"/contact-us/"}
              />
              <SecondaryButton 
                buttonlabel="Call Us Now" 
                icon={<PhoneOutgoing />} 
                link={"tel:+639926414357"}
              />
            </div>
          </div>
          <div className={`col2 flex flex-col items-center ${heroCol2Animation ? 'scale-up--active' : 'scale-up--disabled'}`} ref={heroCol2}>
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

      <SectionLayout class_name={"what-we-do"}>
        <div className={`row row1 flex flex-row justify-center w-full my-30 p-5 ${whatWeDoAnimation ? 'scale-up--active' : 'scale-up--disabled'}`} ref={whatWeDo}>
            <div className="col flex flex-col gap-5">
                <h6 className="preheading-text gradient-text">What We Do</h6>
                <h2>Our Digital Marketing Services</h2>
                <p className="sub-heading">Comprehensive digital marketing solutions tailored to your business goals.</p>

                <div className="service-list-container flex lg:flex-row max-lg:flex-wrap justify-center gap-10 p-5">
                  {loading && <p>Loading...</p>}
                  {data && data.map((serviceItem, index) => (
                        <BlurbImageWidget 
                          key={serviceItem.id}
                          id={index}
                          is_icon_type_img={true}
                          featured_icon={serviceItem.featured_icon}
                          title={<h4>{serviceItem.title}</h4>}
                          excerpt={serviceItem.excerpt}
                          button_link={serviceItem.button_link}
                          button_label={serviceItem.button_label}
                          has_btn={true}
                        />
                    ))}
                </div>
            </div> 
        </div>
      </SectionLayout>

      <SectionLayout class_name={"why-choose-us"}>
        <div className="row flex flex-col xl:flex-row justify-between items-center gap-10 px-0 py-20 xl:px-10 xl:py-10">
          <div className={`col col1 flex flex-col justify-start max-xl:items-center gap-5 ${whyChooseUseColAnimation ? 'slide-left--active' : 'slide-left--disabled'}`} ref={whyChooseUseCol}>
            <h6 className="preheading-text gradient-text">Why Choose Us</h6>
            <h2 className="title">Your Growth is Our Mission</h2>
            <p className="sub-heading max-md:w-full max-xl:w-[55%]">We combine creativity, data, and technology to build strategies that drive sustainable growth for your business.</p>
            <PrimaryButton 
            buttonlabel={"Learn More About Us"} 
            icon={<MoveRight />} 
            link={"/contact-us/"}/>
          </div>
          <div className="col col2 flex flex-row flex-wrap gap-5">
            <BlurbImageWidget 
              is_icon_type_img={false}
              featured_icon={<Trophy />}
              // title={"Data-Driven Strategies"} 
              title={<h6>Data-Drive Strategies</h6>}
              excerpt={"We base every decision on real data and insights to deliver measurable results."}
            />
            <BlurbImageWidget 
              is_icon_type_img={false}
              featured_icon={<PieChart />}
              // title={"Experience Team"} 
              title={<h6>Experience Team</h6>}
              excerpt={"Our team of experts brings years of experience across industries and platform."}
            />
            <BlurbImageWidget 
              is_icon_type_img={false}
              featured_icon={<Puzzle />}
              // title={"Customized Solutions"} 
              title={<h6>Customized Solutions</h6>}
              excerpt={"We tailor our strategies to fit your business goals, audience, and industry."}
            />
            <BlurbImageWidget 
              is_icon_type_img={false}
              featured_icon={<HeartHandshake />}
              // title={"24/7 Premium Reporting"} 
              title={<h6>24/7 Premium Reporting</h6>}
              excerpt={"Our dedicated team is available 24/7 to assist you with any questions, concerns, or technical issues."}
            />
          </div>
          <div className="col col3 flex flex-row justify-center">
            <PrimaryButton 
            buttonlabel={"Learn More About Us"} 
            icon={<MoveRight />} 
            link={"/contact-us/"}/>
          </div>
        </div>
      </SectionLayout>

      <MarketingBanner 
        pre_heading={"Ready To Grow Your Business?"}
        title={"Let's Build Something Great Together"} 
        sub_heading={"Partner with Upstream Teches and take your brand to the next level with powerful digital marketing strategies that deliver results."} 
        button_label={"Get a Free Consultation"} 
        button_link={"/contact-us/"}
      />
      
    </div>
  );
};

export default OurServices;
