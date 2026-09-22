import { useParams } from "react-router-dom";
import ServicesData from "./ServicesData";
import ServiceHero from "../../components/layouts/services/ServiceHero";
import ServiceCoreValues from "../../components/layouts/services/ServiceCoreValues";
import ServiceOverview from "../../components/layouts/services/ServiceOverview";
import ServiceOurProcess from "../../components/layouts/services/ServiceOurProcess";
import ServiceWhyChooseUs from "../../components/layouts/services/ServiceWhyChooseUs";
import ServiceMarketingBanner from "../../components/layouts/services/ServiceMarketingBanner";
import PageNotFound from "../PageNotFound";

const ServicePageTemplate = () => {

  //Store the Slug(Params) to variable serviceSlug.
  const {serviceSlug} = useParams(); // returns an object

  //Find the serviceData base on the current slug.
  const selectedService = Object.values(ServicesData).find(serviceItem => serviceItem.slug === serviceSlug);

  //Check if the slug do not exist from the serviceData.jsx return 404 page.
  if(!selectedService) {
    return <PageNotFound />
  }

  return (
    <div className="service-page">
      <ServiceHero {...selectedService.hero}/>
      <ServiceCoreValues coreValues={selectedService.coreValues} />
      <ServiceOverview overView={selectedService.overView}/>
      {selectedService.process && <ServiceOurProcess process={selectedService.process}/>}
      {/* <ServiceOurProcess process={selectedService.process}/> */}
      <ServiceWhyChooseUs whyChooseUs={selectedService.whyChooseUs} />
      <ServiceMarketingBanner marketingBanner={selectedService.marketingBanner} />
    </div>
    
  )
}

export default ServicePageTemplate;