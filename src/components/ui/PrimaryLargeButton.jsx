const PrimaryLargeButton = ({buttonlabel, icon}) => {
    return (
        <button className="primary-button large-button"><span className="flex items-center justify-center gap-2">{buttonlabel} {icon}</span></button>
    )
}

export default PrimaryLargeButton;