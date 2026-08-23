import useAPIrequest from "../../customhooks/useAPIrequest";
import { useEffect } from "react";
"lucide-react";
import ServiceCard from "./ServiceCard";


const HomepageFeaturedServices = () => {

    //API Request from Express JS.
    const {data, loading, errorMessage} = useAPIrequest("https://upstreamteches-backend.onrender.com/services");

    return (
        <div className="container-services flex flex-row flex-wrap justify-center align-middle gap-10 lg:gap-5">
            {loading && <div>Loading...</div>}
            {data && data.map((serviceItem, index) => (
                <ServiceCard
                    is_best_selling={serviceItem.is_best_selling}
                    key={serviceItem.id}
                    index={index}
                    featured_icon={serviceItem.featured_icon}
                    title={serviceItem.title}
                    excerpt={serviceItem.excerpt}
                    bullets={serviceItem.bullets}
                    button_link={serviceItem.button_link}
                    button_label={serviceItem.button_label}
                />
            ))}
          </div>
    );
};

export default HomepageFeaturedServices;
