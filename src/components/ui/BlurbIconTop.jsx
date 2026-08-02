const BlurbIconTop = ({icon, title, suffix, content, width, ref}) => {
     
    return (
        <div className={`blurb-icon-top flex flex-col items-center gap-5 ${width}`} ref={ref}>
            <div className="icon-box">
                {icon} 
            </div>
            <h3>{title}{suffix}</h3>
            <div className="blurb-icon-content-container">{content}</div>
        </div>
    )
}

export default BlurbIconTop;