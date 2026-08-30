import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import CopyWrite from "./CopyWrite";
import PageScrollLocator from "./PageScrollLocator";

const MainNavigation = () => {
    
    return(
        <>
            <PageScrollLocator />
            <Header/>
            <Outlet />
            <Footer />
            <CopyWrite />
        </>
    )
    
}

export default MainNavigation;