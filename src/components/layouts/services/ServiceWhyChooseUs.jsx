import SectionLayout from "../../sections/SectionLayout";
import BlurbImageWidget from "../../ui/BlurbImageWidget";
import useEntranceAnimation from "../../../customhooks/useEntranceAnimation";


const ServiceWhyChooseUs = ({whyChooseUs}) => {

    const {targetElement: col1, activeAnimation: col1Animation} = useEntranceAnimation();
    const {targetElement: col2, activeAnimation: col2Animation} = useEntranceAnimation(300);


    return (
        <SectionLayout class_name={"why-choose-us"}>
            <div className="row flex flex-col lg:flex-row gap-10 pt-40">
                <div className={`col col1 w-full lg:w-[50%] ${col1Animation ? 'slide-left--active' : 'slide-left--disabled'}`} ref={col1}>
                    <img src={whyChooseUs.featuredImage} alt={whyChooseUs.altImg}/>
                </div>
                <div className={`col col2 flex flex-col gap-5 w-full lg:w-[50%] ${col2Animation ? 'slide-right--active' : 'slide-right--disabled'}`} ref={col2}>
                    <h6 className="gradient-text subheading-text">{whyChooseUs.preheader}</h6>
                    <h2>{whyChooseUs.title}</h2>
                    <p>{whyChooseUs.subheader}</p>
                    <div className="blurb-icons-container flex flex-col">
                        {whyChooseUs && whyChooseUs.iconWidgets.map(widgetItem => (
                            <BlurbImageWidget 
                                key={widgetItem.id}
                                id={widgetItem.id}
                                is_icon_type_img={false}
                                featured_icon={widgetItem.featuredIcon}
                                title={<h6>{widgetItem.title}</h6>}
                                excerpt={widgetItem.detail}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </SectionLayout>
    )
}

export default ServiceWhyChooseUs;