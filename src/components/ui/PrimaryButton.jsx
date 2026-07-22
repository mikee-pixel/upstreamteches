const PrimaryButton = ({buttonlabel, icon, link}) => {
    return (
        <button className="primary-button"><span className="flex items-center justify-center gap-2">{buttonlabel} {icon }</span></button>
    )
}

export default PrimaryButton;