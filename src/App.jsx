import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import OurServices from "./pages/OurServices";
import ContactUs from "./pages/ContactUs";
import { Routes, Route } from "react-router-dom";
import MainNavigation from "./Navigation/MainNavigation";

const App = () => {
  return (
    <Routes>
      <Route element={<MainNavigation />}>
        <Route
          path="/"
          element={
            <>
              <Homepage/>
            </>
          }
        />
        <Route 
          path="/about-us" 
          element={
            <>
              <Aboutpage />
            </>
          }/>

        <Route
          path="/services"
          element={
            <>
              <OurServices />
            </>
          }
        />

        <Route 
          path="/contact-us"
          element={
              <>
                <ContactUs />
              </>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
