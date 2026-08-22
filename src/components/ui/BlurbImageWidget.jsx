import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import useEntranceAnimation from "../../customhooks/useEntranceAnimation";

const BlurbImageWidget = ({id, is_icon_type_img, featured_icon, title, excerpt, has_btn, button_link, button_label}) => {  

  const {targetElement, activeAnimation} = useEntranceAnimation(200*id);

  return (
    <div className={`blurb-item grid gap-4 p-5 ${activeAnimation ? 'fade-in--active' : 'fade-in--disabled'}`} ref={targetElement}>
      <div className="blurb-image-container">
        {is_icon_type_img ? <img src={featured_icon} alt="" /> : featured_icon}
      </div>
      <div className="blurb-title-container">
        {title}
      </div>
      <div className="blurb-content-container">
        <p className="service-excerpt">{excerpt}</p>
      </div>
      {has_btn && <Link
        to={button_link}
        className="service-btn small-button flex flex-row gap-2"
      >
        {button_label}
        <MoveRight size={18} />
      </Link>}
    </div>
  );
};

export default BlurbImageWidget;
