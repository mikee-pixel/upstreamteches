import {MoveRight, CircleCheck, Mail, Presentation, Component, CodeXml, BugPlay, Rocket, ServerCog, Puzzle, Gauge, Award} from "lucide-react";
import SectionLayout from "../../components/sections/SectionLayout";
import PrimaryButton from "../../components/ui/PrimaryButton";
import BlurbImageWidget from "../../components/ui/BlurbImageWidget";
import PrimaryLargeButton from "../../components/ui/PrimaryLargeButton";

const WebsiteDevelopment = () => {
    const webDevProcess = [
        {
            id: 1,
            icon: <Presentation/>   ,
            title: "Discovery & Planning",
            description: "We learn about your business, goals, and target audience."
        },
        {
            id: 2,
            icon: <Component />,
            title: "Design Phase",
            description: "We create modern, user-friendly designs that reflect your brand."
        },
        {
            id: 3,
            icon: <CodeXml />,
            title: "Development",
            description: "Our developers bring the designs to life with clean, efficient code."
        },
        {
            id: 4,
            icon: <BugPlay />,
            title: "Testing & Review",
            description: "We test across all devices and browers to ensure everything works perfectly."
        },
        {
            id: 5,
            icon: <Rocket />,
            title: "Launch",
            description: "Once everything is approved, we launch your website."
        },
        {
            id: 6,
            icon: <ServerCog />,
            title: "Support & Maintenance",
            description: "We provide ongoing support and updates to keep your website running smoothly."
        }
    ];

    return (
        <div id="website-development">
            <SectionLayout class_name="hero">
                <div className="row flex flex-col lg:flex-row justify-between w-full pt-35 md:pt-40 lg:pt-45 pb-35 gap-10">
                <div
                    className={`col col1 w-full lg:w-[50%] flex flex-col gap-5 justify-center`}>
                    <h6 className={`preheading-text gradient-text text-center lg:text-left`} >
                    Digital Marketing That Drives Growth
                    </h6>
                    <h1 className="text-(--color-white) text-center lg:text-left">
                    Website Design and Development
                    </h1>
                    <p className={`large-body !text-(--color-white) text-center lg:text-left`}>
                    We create modern, responsive, and high-performance websites that not only look great but also deliver real results for your business.
                    </p>
                    <div className={`container-buttons flex flex-col md:flex-row justify-center lg:justify-start items-center gap-5 md:gap-10`}>
                        <PrimaryButton
                            buttonlabel="Get a Free Quote"
                            icon={<MoveRight />}
                            link={"/contact-us/"}
                        />
                    </div>
                </div>
                <div
                    className={`col col2 w-full lg:w-[50%] `}>
                    <img
                    src="/images/A computer, phone, and tablet displaying the same web page.png"
                    alt="A computer, phone, and tablet displaying the same web page"
                    />
                </div>
                </div>
            </SectionLayout>
            <SectionLayout class_name={"core-values"}>
                <div className="row w-full">
                    <div className="core-values-container flex lg:flex-row max-lg:flex-wrap justify-center lg:justify-around items-stretch gap-5 sm:gap-10 p-3 mt-[-90px] sm:mt-[-100px] rounded-[20px] bg-(--color-white)">
                        <BlurbImageWidget 
                            id={0}
                            is_icon_type_img={true}
                            featured_icon={"/images/modern custom design icon.png"}
                            title={<p>Modern & Custom Design</p>}
                        />
                        <BlurbImageWidget 
                            id={0}
                            is_icon_type_img={true}
                            featured_icon={"/images/responsive website icon.png"}
                            title={<p>Fully Responsive</p>}
                        />
                        <BlurbImageWidget 
                            id={0}
                            is_icon_type_img={true}
                            featured_icon={"/images/seo icon.png"}
                            title={<p>SEO Friendly</p>}
                        />
                        <BlurbImageWidget 
                            id={0}
                            is_icon_type_img={true}
                            featured_icon={"/images/website speed icon.png"}
                            title={<p>Fast Loading Speed</p>}
                        />
                        <BlurbImageWidget 
                            id={0}
                            is_icon_type_img={true}
                            featured_icon={"/images/secure and scable icon.png"}
                            title={<p>Secure & Reliable</p>}
                        />
                        <BlurbImageWidget 
                            id={0}
                            is_icon_type_img={true}
                            featured_icon={"/images/website support icon.png"}
                            title={<p>Ongoing Support</p>}
                        />

                    </div>
                </div>
            </SectionLayout>
            <SectionLayout class_name={"overview"}>
                <div className="row flex flex-col-reverse lg:flex-row justify-between gap-20 lg:gap-10 pt-40">
                    <div className="col col1 flex flex-col gap-5 w-full lg:w-[40%]">
                        <h6 className="preheading-text gradient-text">Overview</h6>
                        <h2>First Impressions Create Lasting Impact</h2>
                        <p>In today's digital world, your website is often the first impression your business makes. We build websites that are visually stunning, user-friendly, fast, and optimized for search engine.</p>
                        <div className="overview-list-container">
                            <ul className="flex flex-col gap-5">
                                <li><p className="flex flex-row items-center gap-2"><CircleCheck/> Reflect your brand identify and build trust</p></li>
                                <li><p className="flex flex-row items-center gap-2"><CircleCheck/> Deliver seamless experience across all devices</p></li>
                                <li><p className="flex flex-row items-center gap-2"><CircleCheck/> Load fast and follow the latest web standards</p></li>
                                <li><p className="flex flex-row items-center gap-2"><CircleCheck/> Convert visitors into customers</p></li>
                                <li><p className="flex flex-row items-center gap-2"><CircleCheck/> Be easy for you to manage and scale</p></li>
                            </ul>
                        </div>
                        <div className="mobile-sm-mk-banner flex justify-center lg:hidden mt-5">
                            <div className="blurb-icon-container bg-(--color-white) rounded-[10px] w-full sm:w-[80%] p-1">
                                <BlurbImageWidget
                                    id={0}
                                    is_icon_type_img={false}
                                    featured_icon={<Mail />}
                                    title={<h6>Have a Project in Mind? Let's Build Something Amazing Together!</h6>}
                                    has_btn={true}
                                    button_link={"/contact-us"}
                                    button_label={"Let's Get Started"}
                                />
                            </div>
                        </div>
                        
                    </div>
                    <div className="col col2 w-full lg:w-[50%]">
                        <div className="image-container">
                            <img src="/images/A desktop computer, laptop, and tablet showcasing a modern workspace setup.png" alt="A desktop computer, laptop, and tablet showcasing a modern workspace setup" />
                            <div className="blurb-icon-container bg-(--color-white) rounded-[10px] lg:w-[80%] xl:w-[60%] p-1 max-lg:hidden">
                                <BlurbImageWidget
                                    id={0}
                                    is_icon_type_img={false}
                                    featured_icon={<Mail />}
                                    title={<h6>Have a Project in Mind? Let's Build Something Amazing Together!</h6>}
                                    has_btn={true}
                                    button_link={"/contact-us"}
                                    button_label={"Let's Get Started"}
                                />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </SectionLayout>
            <SectionLayout class_name={"our-process"}>
                <div className="row row1 flex flex-col md:flex-row justify-between items-center gap-5">
                    <div className="col col1 flex flex-col gap-5 w-full md:w-[50%]">
                        <h6 className="preheading-text gradient-text">Our Process</h6>
                        <h2>A Proven Process for Outstanding Websites</h2>
                    </div>

                    <div className="col col1 flex flex-col gap-5 w-full md:w-[50%]">
                        <p>At UpstreamTeches, we believe that a successful website is more than just a collection of pages. It's a powerful tool that can hlep you achieve your business goals. Our comprehensive approach to web development ensures that your website is not only visually appealing but also highly functional and effective.</p>
                        <p>Partner with us to bring your digital vision to life. Contact us today to discuss your project requirements.</p>
                    </div>
                </div>
                <div className="row row2 flex flex-row max-lg:flex-wrap justify-between mt-20">
                    {webDevProcess.map(process => (
                        <BlurbImageWidget
                            key={process.id}
                            id={process.id}
                            is_icon_type_img={false}
                            featured_icon={process.icon}
                            title={<h6><span className="text-(--primary-color)">{process.id}.</span> {process.title}</h6>}
                            excerpt={process.description}
                        />
                    ))}
                </div>
            </SectionLayout>
            <SectionLayout class_name={"why-choose-us"}>
                <div className="row flex flex-col lg:flex-row gap-10 pt-40">
                    <div className="col col1 w-full lg:w-[50%]">
                        <img src="/images/A man focused on his work, using a laptop and an external keyboard at a desk.png" alt="A man focused on his work, using a laptop and an external keyboard at a desk" />
                    </div>
                    <div className="col col2 flex flex-col gap-5 w-full lg:w-[50%]">
                        <h6 className="gradient-text subheading-text">Why Choose Us</h6>
                        <h2>Better Website. Better Results</h2>
                        <p>We don't just build websites, we craft digital experience that help your business grow, stand out, and succeed online.</p>
                        <div className="blurb-icons-container flex flex-col">
                            <BlurbImageWidget 
                                id={1}
                                is_icon_type_img={false}
                                featured_icon={<Puzzle />}
                                title={<h6>Custom Solution</h6>}
                                excerpt={"Tailored websites build ot match your brand and business goals."}
                            />
                            <BlurbImageWidget 
                                id={2}
                                is_icon_type_img={false}
                                featured_icon={<Gauge />}
                                title={<h6>Performance Driven</h6>}
                                excerpt={"Fast, secure, and optimized websites that deliver better user experience."}
                            />
                            <BlurbImageWidget 
                                id={3}
                                is_icon_type_img={false}
                                featured_icon={<Award />}
                                title={<h6>Affordable Packages</h6>}
                                excerpt={"High-quality website development at competitive pricing."}
                            />
                        </div>
                    </div>
                </div>
            </SectionLayout>
            <SectionLayout class_name={"service-marketing-banner"}>
                    <div className="row flex flex-row justify-between gap-10 p-10 rounded-[20px]">
                        <div className="col col1 gap-5 w-full lg:w-[60%]">
                            <div className="marketing-blurb-icon flex flex-col sm:flex-row gap-15">
                                <div className="marketing-icon">
                                    <Rocket size={50} color="var(--color-white)"/>
                                </div>
                                <div className="marketing-text-content flex flex-col gap-5">
                                    <h6 className="text-(--color-white)">Ready to Build a Website That Works For You?</h6>
                                    <h2 className="text-(--color-white)">Let's Elevate Your Business With a Powerful Online Presence</h2>
                                    <div className="tablet-btn-container flex lg:hidden w-full">
                                        <PrimaryLargeButton 
                                            buttonlabel={"Get Started Today"}
                                            icon={<MoveRight />}
                                            link={"/contact/#get-in-touch"}
                                        />
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col col2 hidden lg:flex justify-center items-center w-[40%]">
                            <PrimaryLargeButton 
                                buttonlabel={"Get Started Today"}
                                icon={<MoveRight />}
                                link={"/contact/#get-in-touch"}
                            />
                        </div>
                    </div>
            </SectionLayout>
        </div>
    )
}

export default WebsiteDevelopment;