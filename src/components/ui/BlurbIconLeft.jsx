const BlurbIconLeft = ({icon, icon_alt, title, width}) => {
    return (
        <div className={`blurb-icon-left flex flex-row items-center gap-5 ${width}`}>
            <img src={icon} alt={icon_alt} />
            <h6>{title}</h6>
        </div>
    )
}

export default BlurbIconLeft;