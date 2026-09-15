import SectionLayout from "../../sections/SectionLayout";
import PrimaryLargeButton from "../../ui/PrimaryLargeButton";
import { Rocket } from "lucide-react";
import useEntranceAnimation from "../../../customhooks/useEntranceAnimation";

const ServiceMarketingBanner = ({marketingBanner}) => {

    const {targetElement, activeAnimation} = useEntranceAnimation();

    return (
        <SectionLayout class_name={"service-marketing-banner"}>
                <div className={`row flex flex-row justify-between gap-10 p-10 rounded-[20px] ${activeAnimation ? 'scale-up--active' : 'scale-up--disabled'}`} ref={targetElement}>
                    <div className="col col1 gap-5 w-full lg:w-[60%]">
                        <div className="marketing-blurb-icon flex flex-col sm:flex-row gap-15">
                            <div className="marketing-icon">
                                <Rocket size={50} color="var(--color-white)"/>
                            </div>
                            <div className="marketing-text-content flex flex-col gap-5">
                                <h6 className="text-(--color-white)">{marketingBanner.preheader}</h6>
                                <h2 className="text-(--color-white)">{marketingBanner.title}</h2>
                                <div className="tablet-btn-container flex lg:hidden w-full">
                                    <PrimaryLargeButton 
                                        buttonlabel={marketingBanner.btnLabel}
                                        icon={marketingBanner.btnIcon}
                                        link={marketingBanner.btnLink}
                                    />
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col col2 hidden lg:flex justify-center items-center w-[40%]">
                        <PrimaryLargeButton 
                            buttonlabel={marketingBanner.btnLabel}
                            icon={marketingBanner.btnIcon}
                            link={marketingBanner.btnLink}
                        />
                    </div>
                </div>
        </SectionLayout>
    )
}

export default ServiceMarketingBanner;