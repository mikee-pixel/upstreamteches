import SectionLayout from "../components/sections/SectionLayout";
import PortfolioData from "../data/PortfolioData";
import { SquareArrowOutUpRight, MoveRight, Blocks, Monitor, ShoppingCart, Search, PenTool, ArrowRight } from "lucide-react";
import MarketingBanner from "../components/ui/MarketingBanner";
import PrimaryButton from "../components/ui/PrimaryButton";
import SecondaryButton from "../components/ui/SecondaryButton";
import {useEffect, useState, useRef} from "react";
import useEntranceAnimation from "../customhooks/useEntranceAnimation";

const PortfolioPage = () => {
    const portfolioData = Object.values(PortfolioData);
    const [filteredProjectResult, setFilteredProjectResult] = useState(portfolioData);

    //Project Filter
    const [activeFilter, setActiveFilter] = useState("all");

    useEffect(() => {  
        if(!portfolioData) return; 

        if(activeFilter === "all") {
            setFilteredProjectResult(portfolioData)
        } else {
            const projectResult = portfolioData.filter(projectItem => projectItem.projectType === activeFilter);
            setFilteredProjectResult(projectResult);
        }

    }, [activeFilter])

    //Entrance Animation
    const {targetElement:heroCol1, activeAnimation:heroCol1Animation} = useEntranceAnimation();
    const {targetElement:heroCol2, activeAnimation: heroCol2Animation} = useEntranceAnimation(300);
    const {targetElement:project, activeAnimation:projectAnimation} = useEntranceAnimation();


    return (
        <div id="portfolio-page">
            <SectionLayout class_name={"hero"}>
                <div className="row flex flex-col lg:flex-row justify-between items-center gap-10 pt-35 md:pt-40 lg:pt-45">
                    <div className={`col col1 flex flex-col gap-5 w-full lg:w-[50%] ${heroCol1Animation ? "scale-up--active" : "scale-up--disabled"}`} ref={heroCol1}>
                        <h6 className="preheader-text gradient-text text-center lg:text-left">Our Portfolio</h6>
                        <h1 className="text-center lg:text-left">Our Work Speaks in Metrics. <span className="text-(--primary-color)">Driven by Results.</span></h1>
                        <p className="text-center lg:text-left">We've helped businesses across various industries build modern websites, increase online visibility, and achieve measurable growth. Explore some of our latest projects and see what we can do for you.</p>
                        <div className={`container-buttons flex flex-col md:flex-row justify-center lg:justify-start items-center gap-5 md:gap-10`}>
                            <PrimaryButton
                                buttonlabel="Our Service"
                                icon={<SquareArrowOutUpRight />}
                                link={"/services/"}
                                className="test-class"
                            />
                            <SecondaryButton 
                                buttonlabel="Talk To Us" 
                                icon={<MoveRight />} 
                                link={"/contact-us/#get-in-touch"}
                            />
                        </div>
                    </div>
                    <div className={`col col2 flex justify-center items-center w-full lg:w-[50%] ${heroCol2Animation ? "scale-up--active" : "scale-up--disabled"}`} ref={heroCol2}>
                        <img src="/images/A collage showcasing various web design and development services.png" alt="A collage showcasing various web design and development services" />
                    </div>
                </div>
            </SectionLayout>
            <SectionLayout class_name={"projects"}>
                <div className={`row row1 pt-20 w-full ${projectAnimation ? "fade-in--active" : "fade-in--disabled"}`} ref={project}>
                    <div className="project-filter-container flex flex-row flex-wrap items-center justify-center lg:justify-start gap-5 lg:gap-10">
                        {/* All */}
                        <button className={`btn-filter-item flex flex-row gap-3 justify-between items-center !bg-[rgb(46, 175, 157)] px-4 py-2 cursor-pointer rounded-[20px] border-[1px] border-(--border-color) max-sm:w-full ${activeFilter === "all" ? "active" : ""}`} onClick={() => setActiveFilter("all")}>
                            <div className="btn-label-container flex flex-row items-center gap-6">
                                <div className="btn-icon-container relative">
                                    <Blocks className="btn-icon w-[30px] h-[30px] sm:w-auto sm:h-auto relative mt-[0px] ml-[10px]"/>
                                </div>
                                <div className="btn-label flex flex-col text-left text-[20px]">All
                                    <p className="btn-description block sm:hidden">View all projects.</p>
                                </div>
                            </div>
                            <ArrowRight className="block sm:hidden" />
                        </button>
                        {/* Website Development */}
                        <button className={`btn-filter-item flex flex-row gap-3 justify-between items-center !bg-[rgb(46, 175, 157)] px-4 py-2 cursor-pointer rounded-[20px] border-[1px] border-(--border-color) max-sm:w-full ${activeFilter === "websitedevelopment" ? "active" : ""}`} onClick={() => setActiveFilter("websitedevelopment")}>
                            <div className="btn-label-container flex flex-row items-center gap-6">
                                <div className="btn-icon-container relative">
                                    <Monitor className="btn-icon w-[30px] h-[30px] sm:w-auto sm:h-auto relative mt-[0px] ml-[10px]"/>
                                </div>
                                <div className="btn-label flex flex-col text-left text-[20px]">Website Development
                                    <p className="btn-description block sm:hidden">Custom websites & web applications</p>
                                </div>
                            </div>
                            <ArrowRight className="block sm:hidden" />
                        </button>
                        {/* E-Commerce */}
                        <button className={`btn-filter-item flex flex-row gap-3 justify-between items-center !bg-[rgb(46, 175, 157)] px-4 py-2 cursor-pointer rounded-[20px] border-[1px] border-(--border-color) max-sm:w-full ${activeFilter === "ecommerce" ? "active" : ""}`} onClick={() => setActiveFilter("ecommerce")}>
                            <div className="btn-label-container flex flex-row items-center gap-6">
                                <div className="btn-icon-container relative">
                                    <ShoppingCart className="btn-icon w-[30px] h-[30px] sm:w-auto sm:h-auto relative mt-[0px] ml-[10px]"/>
                                </div>
                                <div className="btn-label flex flex-col text-left text-[20px]">E-Commerce
                                    <p className="btn-description block sm:hidden">Online stores & digital solutions.</p>
                                </div>
                            </div>
                            <ArrowRight className="block sm:hidden" />
                        </button>
                        {/* SEO */}
                        <button className={`btn-filter-item flex flex-row gap-3 justify-between items-center !bg-[rgb(46, 175, 157)] px-4 py-2 cursor-pointer rounded-[20px] border-[1px] border-(--border-color) max-sm:w-full ${activeFilter === "seo" ? "active" : ""}`} onClick={() => setActiveFilter("seo")}>
                            <div className="btn-label-container flex flex-row items-center gap-6">
                                <div className="btn-icon-container relative">
                                    <Search className="btn-icon w-[30px] h-[30px] sm:w-auto sm:h-auto relative mt-[0px] ml-[10px]"/>
                                </div>
                                <div className="btn-label flex flex-col text-left text-[20px]">SEO
                                    <p className="btn-description block sm:hidden">Increase visibility & drive traffic.</p>
                                </div>
                            </div>
                            <ArrowRight className="block sm:hidden" />
                        </button>
                        {/* GRAPHICS DESIGN */}
                        <button className={`btn-filter-item flex flex-row gap-3 justify-between items-center !bg-[rgb(46, 175, 157)] px-4 py-2 cursor-pointer rounded-[20px] border-[1px] border-(--border-color) max-sm:w-full ${activeFilter === "graphicsdesign" ? "active" : ""}`} onClick={() => setActiveFilter("graphicsdesign")}>
                            <div className="btn-label-container flex flex-row items-center gap-6">
                                <div className="btn-icon-container relative">
                                    <PenTool className="btn-icon w-[30px] h-[30px] sm:w-auto sm:h-auto relative mt-[0px] ml-[10px]"/>
                                </div>
                                <div className="btn-label flex flex-col text-left text-[20px]">Graphics Design
                                    <p className="btn-description block sm:hidden">Creative design & branding.</p>
                                </div>
                            </div>
                            <ArrowRight className="block sm:hidden" />
                        </button>
                    </div>
                </div>
                <div className="row row2 flex flex-row justify-between gap-10 pt-10">
                    <div className="projects-container flex flex-row flex-wrap justify-center gap-10">

                        {filteredProjectResult?.length > 0 ? (
                            filteredProjectResult.map(projectItem => (
                                <div className="project-item flex flex-col gap-5 w-full sm:w-[45%] lg:w-[30%] rounded-[10px] overflow-hidden border-[1px] border-(--border-color) cursor-pointer" key={projectItem.id}>
                                    <div className="featured-image border-b border-(--border-color)">
                                        <img src={projectItem.featuredImage} alt={projectItem.featuredImageAlt} />
                                    </div>
                                    <div className="project-details flex flex-col items-start gap-2 px-5 py-5">
                                        <p className="project-tag uppercase !text-(--primary-color) !font-[500] !text-[14px] tracking-[4px]">{projectItem.projectTag}</p>
                                        <h6>{projectItem.companyName}</h6>
                                        <p>{projectItem.projectSummary}</p>
                                        <button className="project-btn flex gap-3 !font-[500] mt-[10px] !text-(--primary-color)">Learn More <MoveRight /></button>
                                    </div>
                                
                                </div>
                            ))
                        ) : 
                        (
                            <div className="nothing-found">
                                <h6>Nothing Here Yet</h6>
                                <p>We’re still building our collection for this category. Check out our other projects.</p>
                            </div>
                            
                        )
                        }
                    </div>
                </div>
            </SectionLayout>
            <MarketingBanner 
                pre_heading={"Let's Work Together"}
                title={"Have a Project in Mind"} 
                sub_heading={"We'd love to hear about your ideas and help you turn them into a powerful online presence."}
                button_label={"Get In Touch"} 
                button_link={"/contact-us"} 
                image={"/images/A laptop with a rocket launching from its screen, symbolizing innovation and technology with bg image.png"} 
                alt_image={"A laptop with a rocket launching from its screen, symbolizing innovation and technology with bg image"}
            />
        </div>
    )
}

export default PortfolioPage;