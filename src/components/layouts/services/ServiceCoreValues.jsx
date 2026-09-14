import SectionLayout from "../../sections/SectionLayout";
import BlurbImageWidget from "../../ui/BlurbImageWidget";

const ServiceCoreValues = ({coreValues}) => {

    const coreValuesList = Object.values(coreValues);

    return (
        <SectionLayout class_name={"core-values"}>
            <div className="row w-full">
                <div className="core-values-container flex lg:flex-row max-lg:flex-wrap justify-center lg:justify-around items-stretch gap-5 lg:gap-10 sm:p-3 mt-20 lg:-mt-20 rounded-[20px] bg-transparent lg:bg-(--color-white)">
                    {
                       coreValuesList && coreValuesList.map(coreValueItem => (
                        <BlurbImageWidget 
                            key={coreValueItem.id}
                            id={coreValueItem.id}
                            is_icon_type_img={true}
                            featured_icon={coreValueItem.featuredIcon}
                            title={<p>{coreValueItem.title}</p>}
                        />
                       ))
                    }
                    
                    {/* <BlurbImageWidget 
                        id={0}
                        is_icon_type_img={true}
                        featured_icon={"/images/modern custom design icon.png"}
                        title={<p>Modern & Custom Design</p>}
                    />
                    <BlurbImageWidget 
                        id={0}
                        is_icon_type_img={true}
                        featured_icon={"/images/responsive website icon.png"}
                        title={<p>Fully Responsive</p>}
                    />
                    <BlurbImageWidget 
                        id={0}
                        is_icon_type_img={true}
                        featured_icon={"/images/seo icon.png"}
                        title={<p>SEO Friendly</p>}
                    />
                    <BlurbImageWidget 
                        id={0}
                        is_icon_type_img={true}
                        featured_icon={"/images/website speed icon.png"}
                        title={<p>Fast Loading Speed</p>}
                    />
                    <BlurbImageWidget 
                        id={0}
                        is_icon_type_img={true}
                        featured_icon={"/images/secure and scable icon.png"}
                        title={<p>Secure & Reliable</p>}
                    />
                    <BlurbImageWidget 
                        id={0}
                        is_icon_type_img={true}
                        featured_icon={"/images/website support icon.png"}
                        title={<p>Ongoing Support</p>}
                    /> */}

                </div>
            </div>
        </SectionLayout>
    )
}

export default ServiceCoreValues;