import SectionLayout from "../../sections/SectionLayout";
import PrimaryButton from "../../ui/PrimaryButton";
import {MoveRight } from "lucide-react";


const ServiceHero = ({preheader, title, subheader, primary_btn_label, primary_btn_link, hero_img, hero_alt_img}) => {
    return (
        <SectionLayout class_name="hero">
            <div className="row flex flex-col lg:flex-row justify-between w-full pt-35 md:pt-40 lg:pt-45 pb-20 lg:pb-35 gap-25 lg:gap-10">
            <div
                className={`col col1 w-full lg:w-[50%] flex flex-col gap-5 justify-center`}>
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
                className={`col col2 w-full lg:w-[50%] `}>
                <img
                // src="/images/A group of individuals collaborating on a computer while a crane operates in the background.png"
                src={hero_img}
                alt={hero_alt_img}
                />
            </div>
            </div>
        </SectionLayout>
    )
}

export default ServiceHero;