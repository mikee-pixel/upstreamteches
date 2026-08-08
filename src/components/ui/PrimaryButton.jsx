import { Link } from "react-router-dom";

const PrimaryButton = ({buttonlabel, icon, link}) => {
    return (
        <Link to={link} className="btn primary-button"><span className="flex items-center justify-center gap-2">{buttonlabel} {icon }</span></Link>
    )
}

export default PrimaryButton;