import { useParams } from "react-router-dom";
// import servicesData from "./serviceData.js";
import servicesData from "./servicesData";
import ServiceHero from "../../components/layouts/services/ServiceHero";
import ServiceCoreValues from "../../components/layouts/services/ServiceCoreValues";
import ServiceOverview from "../../components/layouts/services/ServiceOverview";

const ServicePageTemplate = () => {

  console.log("Service Page Template Render!");

  //Store the Slug(Params) to variable serviceSlug.
  const {serviceSlug} = useParams(); // returns an object
  console.log(serviceSlug);

  //Find the serviceData base on the current slug.
  const selectedService = Object.values(servicesData).find(serviceItem => serviceItem.slug === serviceSlug);
  
  //Check if the slug do not exist from the serviceData.jsx return 404 page.
  if(!selectedService) {
    return <div>404 Not Found</div>
  }

  return (
    <div className="service-page">
      <ServiceHero {...selectedService.hero}/>
      <ServiceCoreValues coreValues={selectedService.coreValues} />
      <ServiceOverview overView={selectedService.overView}/>
    </div>
    
  )
}

export default ServicePageTemplate;