import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const PageScrollLocator = () => {
    console.log("PageScrollLocator component render!");
    const {pathname: currentLocation, hash: anchor} = useLocation();

    useEffect(() => {
        if(anchor) {
            const targetElement = document.querySelector(`${anchor}`);
            targetElement.scrollIntoView({
                block: "start",
                behavior: "smooth"
            })
        } else {
            window.scrollTo({
                top: 0,
                behavior: 'instant'
            })
        }
        
    }, [currentLocation, anchor])
}

export default PageScrollLocator;