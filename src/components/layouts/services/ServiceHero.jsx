import SectionLayout from "../../sections/SectionLayout";
import PrimaryButton from "../../ui/PrimaryButton";
import {MoveRight } from "lucide-react";
import useEntranceAnimation from "../../../customhooks/useEntranceAnimation";

const ServiceHero = ({preheader, title, subheader, primary_btn_label, primary_btn_link, hero_img, hero_alt_img}) => {

    //Entrance Animation
    const {targetElement: heroCol1, activeAnimation: heroCol1Animation} = useEntranceAnimation();
    const {targetElement: heroCol2, activeAnimation: heroCol2Animation} = useEntranceAnimation(300)

    return (
        <SectionLayout class_name="hero">
            <div className="row flex flex-col lg:flex-row justify-between w-full pt-35 md:pt-40 lg:pt-45 pb-20 lg:pb-35 gap-25 lg:gap-10">
            <div
                className={`col col1 w-full lg:w-[50%] flex flex-col gap-5 justify-center ${heroCol1Animation ? 'scale-up--active' : 'scale-up--disabled'}`} ref={heroCol1}>
                <h6 className={`preheading-text gradient-text text-center lg:text-left`} >
                {preheader}
                </h6>
                <h1 className="text-(--color-white) text-center lg:text-left">
                {title}
                </h1>
                <p className={`large-body !text-(--color-white) text-center lg:text-left`}>
                {subheader}
                </p>
                <div className={`container-buttons flex flex-col md:flex-row justify-center lg:justify-start items-center gap-5 md:gap-10`}>
                    <PrimaryButton
                        buttonlabel={primary_btn_label}
                        icon={<MoveRight />}
                        link={primary_btn_link}
                    />
                </div>
            </div>
            <div
                className={`col col2 w-full lg:w-[50%] ${heroCol2Animation ? 'scale-up--active' : 'scale-up--disabled'}`} ref={heroCol2}>
                <img
                src={hero_img}
                alt={hero_alt_img}
                />
            </div>
            </div>
        </SectionLayout>
    )
}

export default ServiceHero;