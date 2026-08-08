import {Link} from "react-router-dom";

const PrimaryLargeButton = ({buttonlabel, icon, link}) => {
    return (
        <Link to={link} className="btn primary-button large-button"><span className="flex items-center justify-center gap-2">{buttonlabel} {icon}</span></Link>
    )
}

export default PrimaryLargeButton;