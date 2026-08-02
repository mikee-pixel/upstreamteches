import useEntranceAnimation from "../../customhooks/useEntranceAnimation";
import { CircleCheck, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

const ServiceCard = ({is_best_selling, index, featured_icon, title, excerpt, bullets, button_link, button_label}) => {

    //Custom Hook For Entrance Animation
    const {targetElement, activeAnimation} = useEntranceAnimation(index*200);

  return (
    <div
      className={`blurb-item flex flex-col justify-between items-center sm:items-start gap-3 w-[90%] sm:w-[45%] lg:w-[23%] ${is_best_selling ? "highlighted-blurb-item" : ""} ${activeAnimation ? "fade-in--active" : "fade-in--disabled"}`}
      ref={targetElement}
    >
      <div className="blurb-contents flex flex-col items-center sm:items-start gap-3">
        <img src={featured_icon} alt="" />
        <h4>{title}</h4>
        <p className="small-body service-excerpt">{excerpt}</p>
      </div>
      <hr />
      <div className="service-inclusion w-full">
        <ul className="flex flex-col gap-3.5">
          {bullets.map((bullet_list, index) => (
            <li key={index} className="flex gap-2 items-start">
              <CircleCheck className="check-icon" />
              {bullet_list}
            </li>
          ))}
        </ul>
      </div>
      <Link
        to={button_link}
        className="service-btn small-button flex flex-row justify-center sm:justify-start gap-2"
      >
        {button_label}
        <MoveRight size={18} />
      </Link>
    </div>
  );
};

export default ServiceCard;
