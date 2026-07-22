const SecondaryButton = ({buttonlabel, icon}) => {
    return (
        <button className="secondary-button"><span className="flex items-center justify-center gap-2">{buttonlabel} {icon}</span></button>
    )
}

export default SecondaryButton;