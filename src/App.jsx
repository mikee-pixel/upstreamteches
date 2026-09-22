import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import OurServices from "./pages/OurServices";
import ContactUs from "./pages/ContactUs";
import { Routes, Route } from "react-router-dom";
import MainNavigation from "./Navigation/MainNavigation";
// import WebsiteDevelopment from "./pages/services/WebsiteDevelopment";
import ServicePageTemplate from "./pages/services/ServicePageTemplate";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  return (
    <Routes>
      <Route element={<MainNavigation />}>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/about-us" element={<Aboutpage />}/>
        <Route path="/contact-us" element={<ContactUs />}/>
        <Route path="/services" element={<OurServices />}/>
        <Route path="/services/:serviceSlug" element={<ServicePageTemplate />} />\
        
        {/* Catch all 404 Route or Pags */}
        <Route path="*" element={<PageNotFound />}/>
      </Route>
    </Routes>
  );
};

export default App;
