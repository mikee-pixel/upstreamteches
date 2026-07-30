import { Link } from "react-router-dom";
import { MoveRight } from "lucide-react";
import useAPIrequest from "../../customhooks/useAPIrequest";
import { CircleCheck } from "lucide-react";
import { useEffect } from "react";

const BlurbIcon = () => {

    const {data, loading, errorMessage} = useAPIrequest();
    
    useEffect(() => {
        // console.log(errorMessage);
    }, [errorMessage]);

    
    return (
        <div className="container-services flex flex-row flex-wrap justify-center align-middle gap-10 lg:gap-5">
            {loading && <div>Loading...</div>}
            {data && data.map(serviceItem => (
                <div className={`blurb-item flex flex-col justify-between items-center sm:items-start gap-3 w-[90%] sm:w-[45%] lg:w-[23%] ${serviceItem.is_best_selling ? "highlighted-blurb-item" : ""}`} key={serviceItem.id} >
                    <div className="blurb-contents flex flex-col items-center sm:items-start gap-3">
                        <img src={serviceItem.featured_icon} alt="" />
                        <h4>{serviceItem.title}</h4>
                        <p className="small-body service-excerpt">{serviceItem.excerpt}</p>
                    </div>
                    <hr />
                    <div className="service-inclusion w-full">
                        <ul className="flex flex-col gap-3.5">
                            {serviceItem.bullets.map((bullet_list, index) => (
                            <li key={index} className="flex gap-2 items-start"><CircleCheck className="check-icon"/>{bullet_list}</li>
                            ))}
                        </ul>
                    </div>
                    <Link
                        to={serviceItem.button_link}
                        className="service-btn small-button flex flex-row justify-center sm:justify-start gap-2"
                    >
                        {serviceItem.button_label}
                        <MoveRight size={18} />
                    </Link>
                </div>
            ))}
          </div>
    );
};

export default BlurbIcon;
