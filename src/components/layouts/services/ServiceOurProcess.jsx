import SectionLayout from "../../sections/SectionLayout";
import BlurbImageWidget from "../../ui/BlurbImageWidget";
import useEntranceAnimation from "../../../customhooks/useEntranceAnimation";

const ServiceOurProcess = ({process}) => {
    const {targetElement, activeAnimation} = useEntranceAnimation();

    return (
        <SectionLayout class_name={"our-process"}>
            <div className={`row row1 flex flex-col md:flex-row justify-between items-center gap-5 ${activeAnimation ?'fade-in--active' : 'fade-in--disabled'}`} ref={targetElement}>
                <div className="col col1 flex flex-col gap-5 w-full md:w-[50%]">
                    <h6 className="preheading-text gradient-text">{process.preheader}</h6>
                    <h2>{process.title}</h2>
                </div>

                <div className="col col1 flex flex-col gap-5 w-full md:w-[50%]">
                    <p>{process.subheader1}</p>
                    <p>{process.subheader2}</p>
                </div>
            </div>
            <div className="row row2 flex flex-row max-lg:flex-wrap justify-between mt-10 sm:mt-20">
                {process.workflowProcess.map(process => (
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
    )
}

export default ServiceOurProcess;