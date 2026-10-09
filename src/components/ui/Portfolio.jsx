import SectionLayout from "../sections/SectionLayout";
import PortfolioData from "../../data/PortfolioData";
import { MoveRight } from "lucide-react";
import PrimaryButton from "./PrimaryButton";
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState, useRef } from "react";
import PortfolioPopupModal from "./PortfolioPopupModal";


const Portfolio = ({preHeader, title, subHeader}) => {

    //Portfolio Data
    const portfolioData = Object.values(PortfolioData);

    //Activate the Popup Modal
    const [isPopupModalActive, setIsPopupModalActive] = useState(false);
    const activePopupModalData = portfolioData.filter(project => project.id === isPopupModalActive);
    const handleBtnCloseModal = () => {
        setIsPopupModalActive(false);
    }
    const portfolioModalContainer = useRef();

    useEffect(() => {
        if(!portfolioModalContainer.current) return;

        document.addEventListener("keydown", (e) => {
            if(e.key === "Escape") {
                setIsPopupModalActive(false);
            }
        })
    }, [isPopupModalActive])

    //EmblaCarousel
    const [emblaRef, emblaApi] = useEmblaCarousel({loop: true}, [Autoplay()]);
    const [scrollSnaps, setScrollSnaps] = useState([]);
    const [selectedSnap, setSelectedSnap] = useState(0);

    const goTo = (index) => emblaApi?.scrollTo(index);
    const setupSnaps = (emblaApi) => setScrollSnaps(emblaApi.scrollSnapList());
    const setActiveSnap = (emblaApi) => setSelectedSnap(emblaApi.selectedScrollSnap());
    
    useEffect(() => {
        if(!emblaApi) return;

        setupSnaps(emblaApi);
        setActiveSnap(emblaApi);

        emblaApi.plugins().autoplay?.play();
        emblaApi.on('reInit', setupSnaps);
        emblaApi.on('reInit', setActiveSnap);
        emblaApi.on('select', setActiveSnap);
    }, [emblaApi])

    return (
        <SectionLayout class_name={"portfolio"}>
            <div className="row flex flex-col justify-center items-center w-full gap-5 pt-40">
                <h6 className="gradient-text preheading-text text-center">{preHeader}</h6>
                {title}
                <p className="text-center w-full sm:w-[60%]">{subHeader}</p>

                <div className="embla portfolio-project-container">
                    <div className="embla__viewport" ref={emblaRef}>
                        <div className="embla__container">
                            {portfolioData && portfolioData.filter(projectItem => projectItem.featuredPortfolio === true).map(projectItem => (
                                <div className="embla__slide project-item flex flex-col gap-5 cursor-pointer" key={projectItem.id} onClick={() => setIsPopupModalActive(projectItem.id)}>
                                    <div className="project-content-container rounded-[20px] border-[1px] border-(--border-color) overflow-hidden h-[100%]">
                                        <div className="featured-image">
                                        <img src={projectItem.featuredImage} alt={projectItem.featuredImageAlt} />
                                        
                                        </div>
                                        <div className="project-details flex flex-col items-start gap-2 p-[20px] bg-(--color-white)">
                                        <p className="project-tag uppercase !text-[13px] !text-(--primary-color) !font-[500] tracking-[4px]">{projectItem.projectTag}</p>
                                        <h6>{projectItem.companyName}</h6>
                                        <p>{projectItem.projectSummary}</p>
                                        <button className="project-btn flex gap-3 !font-[500] mt-[10px] text-(--primary-color) cursor-pointer" onClick={() => setIsPopupModalActive(projectItem.id)}>Learn More <MoveRight /></button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Optional: Add navigation controls here */}
                    <div className="embla__dots flex justify-center align-middle gap-5 pt-5">
                        {scrollSnaps.map((_, index) => (
                        <button
                            className={'embla__dot'.concat(
                                index === selectedSnap ? ' embla__dot--selected' : ''
                            )}
                            key={index}
                            onClick={() => goTo(index)}
                        >
                        </button>
                        ))}
                    </div>
                </div>
                
                {/* Popup Modal */}
                <PortfolioPopupModal 
                    isPopupModalActive={isPopupModalActive} 
                    portfolioModalContainer={portfolioModalContainer}
                    activePopupModalData={activePopupModalData} 
                    HandleBtnCloseModal={handleBtnCloseModal}
                />
                
                <div className="project-primary-btn-container flex justify-center mt-10">
                    <PrimaryButton 
                    buttonlabel={"View All Projects"}
                    icon={<MoveRight />}
                    link={"/portfolio"}
                    />
                </div>
            </div>
        </SectionLayout>
    )
}

export default Portfolio;