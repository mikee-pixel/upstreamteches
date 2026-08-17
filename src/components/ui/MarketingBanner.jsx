import { MoveRight } from "lucide-react";
import PrimaryButton from "./PrimaryButton";
import useEntranceAnimation from "../../customhooks/useEntranceAnimation";
import SectionLayout from "../sections/SectionLayout";

const MarketingBanner = ({pre_heading, title, sub_heading, button_label, button_link, image, alt_image}) => {

    const {targetElement, activeAnimation} = useEntranceAnimation(); 

    return(
        <SectionLayout class_name="marketing-banner-component">
        <div className={`row flex flex-col sm:flex-row flex-between items-center w-full gap-10 mt-30 ${activeAnimation ? 'scale-up--active' : 'scale-up--disabled'}`} ref={targetElement}>
          <div className="col col1 flex flex-col gap-5">
            <h6 className="preheading-text">{pre_heading}</h6>
            <h2>{title}</h2>
            <p className="sub-heading">{sub_heading}</p>
            <PrimaryButton buttonlabel={button_label} icon={<MoveRight />} link={button_link}/>
          </div>
          <div className="col col2 flex justify-end">
            <div className="floating-dot-pattern">
              <img src="/images/primary color dots pattern.png" alt="primary-color-dots-pattern" />
            </div>
            <img src={image} alt={alt_image} className="banner-image"/>
          </div>
        </div>
      </SectionLayout>
    )
}

export default MarketingBanner;