import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import CopyWrite from "./CopyWrite";

const MainNavigation = () => {
    return(
        <>
            <Header />
            <Outlet />
            <Footer />
            <CopyWrite />
        </>
    )
    
}

export default MainNavigation;