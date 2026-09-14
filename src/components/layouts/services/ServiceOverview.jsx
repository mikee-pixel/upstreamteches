import SectionLayout from "../../sections/SectionLayout";
import { CircleCheck, Mail } from "lucide-react";
import BlurbImageWidget from "../../ui/BlurbImageWidget";

const ServiceOverview = ({overView}) => {
    console.log(overView);
    return(
        <SectionLayout class_name={"overview"}>
            <div className="row flex flex-col-reverse lg:flex-row justify-between gap-10 lg:gap-20 lg:gap-10 pt-20 lg:pt-40">
                <div className="col col1 flex flex-col gap-5 w-full lg:w-[40%]">
                    <h6 className="preheading-text gradient-text">{overView.col1.preheader}</h6>
                    <h2>{overView.col1.title}</h2>
                    <p>{overView.col1.subheader}</p>
                    <div className="overview-list-container">
                        <ul className="flex flex-col gap-5">
                            {overView.col1.checkList.map((listItem, index) => (
                                <li key={index}><p className="flex flex-row items-start sm:items-center gap-2"><CircleCheck className="size-7 sm:size-6"/> {listItem}</p></li>
                            ))}
                        </ul>
                    </div>
                    <div className="mobile-sm-mk-banner flex justify-center lg:hidden mt-5">
                        <div className="blurb-icon-container bg-(--color-white) rounded-[10px] shadow-(--box-shadow) w-full sm:w-[80%] p-1">
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
                        <img src={overView.col2.featuredImage} alt={overView.col2.altImg} />
                        <div className="blurb-icon-container bg-(--color-white) rounded-[10px] lg:w-[80%] xl:w-[60%] p-1 max-lg:hidden">
                            <BlurbImageWidget
                                id={0}
                                is_icon_type_img={false}
                                featured_icon={<Mail />}
                                title={<h6>{overView.blurbImageWidget.title}</h6>}
                                has_btn={true}
                                button_link={overView.blurbImageWidget.buttonLink}
                                button_label={overView.blurbImageWidget.buttonLabel}
                            />
                        </div>
                    </div>
                    
                </div>
            </div>
        </SectionLayout>
    )
}

export default ServiceOverview;