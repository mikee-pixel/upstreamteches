import {Link} from "react-router-dom";


const SecondaryButton = ({buttonlabel, icon, link}) => {
    return (
        <Link to={link} className="btn secondary-button"><span className="flex items-center justify-center gap-2">{buttonlabel} {icon}</span></Link>
    )
}

export default SecondaryButton;