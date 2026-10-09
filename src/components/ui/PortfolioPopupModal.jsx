import BlurbImageWidget from "./BlurbImageWidget";
import {
  Globe,
  Calendar,
  TowelRack,
  Tag,
  CircleArrowRight,
  X,
} from "lucide-react";
import PrimaryLargeButton from "./PrimaryLargeButton";
import { useCallback, useEffect, useState, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";

const PortfolioPopupModal = ({
  isPopupModalActive,
  portfolioModalContainer,
  activePopupModalData,
  HandleBtnCloseModal}) => {

  console.log(activePopupModalData[0]);

  //Portfolio Popup Carousel
  const [selectedIndex, setSelectedIndex] = useState(0);

  //Portfolio Thumbnail Carousel
  const [thumbsRef, thumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const scrollTo = useCallback(
    (index) => {
      if (!thumbsApi) return;

      thumbsApi.scrollTo(index);
      setSelectedIndex(index);
    },
    [thumbsApi],
  );

  const onThumbSelect = useCallback(() => {
    if (!thumbsApi) return;

    setSelectedIndex(thumbsApi.selectedScrollSnap());
  }, [thumbsApi]);

  useEffect(() => {
    if (!thumbsApi) return;

    onThumbSelect();

    thumbsApi.on("select", onThumbSelect);
    thumbsApi.on("reInit", onThumbSelect);

    return () => {
      thumbsApi.off("select", onThumbSelect);
      thumbsApi.off("reInit", onThumbSelect);
    };
  }, [thumbsApi, onThumbSelect]);

  // if (!activePopupModalData.portfolioImages.length) {
  //   return null;
  // }

  return (
    <div
      className={`portfolio-modal-container ${isPopupModalActive ? "popup-modal__active" : ""} w-full`}
      ref={portfolioModalContainer}
    >
      {activePopupModalData.map(projectData => (
        <div
          className="portfolio-data-wrapper flex flex-col sm:flex-row gap-10 w-[95vw] lg:w-[85vw] h-[96vh] sm:h-[60vh] lg:h-[95vh] overflow-y-auto sm:overflow-y-hidden"
          key={projectData.id}
        >
          <div className="portfolio-gallery w-full sm:w-[60%]">
            {/* Active Image */}
            <div className="portfolio-gallery__main">
              <img
                src={projectData.portfolioImages[selectedIndex].src}
                alt={projectData.portfolioImages[selectedIndex].alt || ""}
              />
            </div>
            {/* Thumbnail Carousel */}
            <div className="portfolio-gallery__thumbs">
              <div
                className="embla portfolio-gallery__viewport"
                ref={thumbsRef}
              >
                <div className="embla__container">
                  {projectData.portfolioImages.map((image, index) => (
                    <div
                      className="embla__slide portfolio-gallery__thumb"
                      key={image.id ?? index}
                    >
                      <button
                        type="button"
                        onClick={() => scrollTo(index)}
                        className={
                          index === selectedIndex
                            ? "portfolio-gallery__thumb-btn active"
                            : "portfolio-gallery__thumb-btn"
                        }
                      >
                        <img src={image.src} alt={image.alt || ""} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="portfolio-details flex flex-col gap-3 text-left py-5 w-full sm:w-[40%] h-auto sm:h-[55vh] lg:h-[85vh] overflow-y-visible sm:overflow-y-auto">
            <p className="portfolio-pretag uppercase !text-[14px] !text-(--primary-color)">
              {projectData.projectTag}
            </p>
            <h4 className="!text-[30px]">{projectData.companyName}</h4>
            <p className="portfolio-summary !text-(--soft-body-text) !text-[18px]">
              {projectData.projectSummary}
            </p>

            <div className="portfolio-widget flex flex-col gap-0 pb-3">
              <BlurbImageWidget
                id={0}
                is_icon_type_img={false}
                featured_icon={<Globe />}
                title={
                  <p className="!font-[600] !text-(--color-black)">
                    Live Website
                  </p>
                }
                excerpt={<a href={projectData.liveWebsite} target="_blank">{projectData.liveWebsite}</a>}
              />

              <BlurbImageWidget
                id={0}
                is_icon_type_img={false}
                featured_icon={<Calendar />}
                title={
                  <p className="!font-[600] !text-(--color-black)">
                    Project Year
                  </p>
                }
                excerpt={projectData.projectDate}
              />

              <BlurbImageWidget
                id={0}
                is_icon_type_img={false}
                featured_icon={<TowelRack />}
                title={
                  <p className="!font-[600] !text-(--color-black)">Services</p>
                }
                excerpt={projectData.projectPackage}
              />

              <BlurbImageWidget
                id={0}
                is_icon_type_img={false}
                featured_icon={<Tag />}
                title={
                  <p className="!font-[600] !text-(--color-black)">
                    Project Tag
                  </p>
                }
                excerpt={projectData.projectTag}
              />
            </div>

            <hr className="border-(--border-color) pb-3" />
            <div className="popup-modal-btn_container mb-5 flex">
              <PrimaryLargeButton
                buttonlabel={"View Live Website"}
                icon={<CircleArrowRight />}
                link={projectData.liveWebsite}
              />
            </div>
          </div>
          <div className="popup-close__btn">
            <button
              type="button"
              // onClick={() => setActiveSelectedProject(null)}
              onClick={() => HandleBtnCloseModal(false)}
            >
              <X className="w-[20px] h-[20px] cursor-pointer" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioPopupModal;
