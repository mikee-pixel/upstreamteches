import SectionLayout from "../components/sections/SectionLayout";
import useEntranceAnimation from "../customhooks/useEntranceAnimation";
import BlurbImageWidget from "../components/ui/BlurbImageWidget";
import MarketingBanner from "../components/ui/MarketingBanner";
import FAQWidget from "../components/ui/FAQWidget";
import ContactFormWidget from "../components/ui/ContactFormWidget";
import { Mail, Phone, MapPin, MoveRight } from "lucide-react";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";


const ContactUs = () => {
    const {targetElement: heroCol1, activeAnimation: heroCol1Animation} = useEntranceAnimation();
    const {targetElement: heroCol2, activeAnimation: heroCol2Animation} = useEntranceAnimation(300);
    return (
        <div id="contact-us">
            <SectionLayout class_name="hero">
                <div className="row flex flex-col lg:flex-row justify-between items-center gap-10 pt-45">
                    <div className={`col1 flex flex-col items-center lg:items-start gap-5 ${heroCol1Animation ? 'scale-up--active' : 'scale-up--disabled'}`} ref={heroCol1}>
                        <h6 className={`preheading-text gradient-text text-center lg:text-left`}>
                        Contact Us
                        </h6>
                        <h1 className="text-center lg:text-left">Let's Build Something <span className="gradient-text">Great</span> Together</h1>
                        <p className="subheading text-center lg:text-left">
                            We're here to help your business grow with powerful digital marketing solutions. Reach out to us and let's turn your ideas into measurable results.
                        </p>
                    </div>
                    <div className={`col2 flex flex-col items-center ${heroCol2Animation ? 'scale-up--active' : 'scale-up--disabled'}`} ref={heroCol2}>
                        <div className="img-container">
                            <img
                                className="hero-banner-image"
                                src="/images/A group of diverse business professionals gathered around a laptop.png"
                                alt="A group of diverse business professionals gathered around a laptop"
                            />
                        </div>
                    </div>
                </div>
            </SectionLayout>
            <SectionLayout class_name={"get-in-touch"}>
                <div className="row flex flex-col lg:flex-row justify-between gap-10 mt-30">
                    <div className="col col1 flex flex-col gap-5 items-start">
                        <h6 className="preheading-text gradient-text">Get In Touch</h6>
                        <h2>Have a Project in Mind? Let's Discussed!</h2>
                        <p>Whether you need a stunning website, a powerful e-commerce store, eye-catching graphics, or top-notch SEO, our team of experts is ready to assist you.</p>
                        <ContactFormWidget 
                            title={"Send Us a Message"}
                            subheading={"Fill out the form below and we'll get back to you as soon as possible."} 
                            display_in={"mobile"}
                        />
                        <div className="contact-details-container flex flex-col gap-5 pt-5 lg:pt-0">
                            <h6>Contact us here:</h6>
                            <BlurbImageWidget 
                                is_icon_type_img={false}
                                featured_icon={<Mail />}
                                title={<h6>Email</h6>}
                                excerpt={"michaelnavidad36@gmail.com"}
                                has_btn={false}
                            />
                            <BlurbImageWidget 
                                is_icon_type_img={false}
                                featured_icon={<Phone />}
                                title={<h6>Phone Number</h6>}
                                excerpt={"(+63) 992 6414 357"}
                                has_btn={false}
                            />
                            <BlurbImageWidget 
                                is_icon_type_img={false}
                                featured_icon={<MapPin />}
                                title={<h6>Address</h6>}
                                excerpt={"Bacoor, Cavite, Philippines, 4102"}
                                has_btn={false}
                            />
                        </div>
                        <div className="social-media-container">
                            <p>Follow Us:</p>
                            <div className="social-media-icons">
                                <Link to={"https://www.facebook.com/people/Upstream-Teches/61574027228599/"} target="_blank">
                                    <FontAwesomeIcon icon={faFacebookF} size="10"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col col2 hidden lg:flex flex-col items-start gap-5 p-10">
                        <ContactFormWidget 
                            title={"Send Us a Message"}
                            subheading={"Fill out the form below and we'll get back to you as soon as possible."} 
                            display_in={"desktop"}
                        />
                    </div>
                </div>
            </SectionLayout>

            <SectionLayout class_name={"work-with-us"}>
                <div className="row flex flex-col md:flex-row justify-between align-middle gap-5 py-10 px-0 xl:px-10">
                    <div className="col col1 flex flex-col gap-5 w-full md:w-[30%]">
                        <h6 className="preheading-text gradient-text text-center md:text-left">Why Work With Us</h6>
                        <h3 className="title text-center md:text-left">We're More Than Just A Service Provider</h3>
                    </div>
                    <div className="col col2 flex flex-col sm:flex-row flex-wrap xl:flex-nowrap sm:justify-center md:justify-between gap-2 w-full md:w-[70%]">
                        <BlurbImageWidget 
                            is_icon_type_img={true}
                            featured_icon={"/images/fast response icon.png"} 
                            title={<h6>Fast Response</h6>} 
                            excerpt={"We value your time and respond quickly."}
                            has_btn={false}
                        />
                        <BlurbImageWidget 
                            is_icon_type_img={true}
                            featured_icon={"/images/tailored solutions icon.png"} 
                            title={<h6>Tailored Solutions</h6>} 
                            excerpt={"We create strategies that fit your business."}
                            has_btn={false}
                        />
                        <BlurbImageWidget 
                            is_icon_type_img={true}
                            featured_icon={"/images/result oriented icon.png"} 
                            title={<h6>Result-Oriented</h6>} 
                            excerpt={"Our focus is driving measurable growth."}
                            has_btn={false}
                        />
                        <BlurbImageWidget 
                            is_icon_type_img={true}
                            featured_icon={"/images/client first icon.png"} 
                            title={<h6>Client First</h6>} 
                            excerpt={"Your success is our top priority."}
                            has_btn={false}
                        />
                    </div>

                </div>
            </SectionLayout>

            <MarketingBanner 
                pre_heading={"Ready To Grow Your Business?"}
                title={"Let's Build Something Great Together"} 
                sub_heading={"Partner with Upstream Teches and take your brand to the next level with powerful digital marketing strategies that deliver results."} 
                button_label={"Get a Free Consultation"} 
                button_link={"/contact-us/"}
                image={"/images/A laptop with a rocket launching from its screen, symbolizing innovation and technology with bg image.png"}
                alt={"A laptop with a rocket launching from its screen, symbolizing innovation and technology with bg image"}
            />

            <SectionLayout class_name={"faq"}>
                <div className="row flex items-center mt-30 w-full">
                    <div className="col flex flex-col items-center justify-center gap-5 w-full">
                        <h6 className="preheading-text gradient-text text-center">Frequently Asked Questions</h6>
                        <h2 className="title text-center">Got Questions? We've Got Answer.</h2>
                        <FAQWidget />
                    </div>
                </div>
            </SectionLayout>

        </div>
    )
}

export default ContactUs;