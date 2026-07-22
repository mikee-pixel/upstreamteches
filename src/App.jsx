import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
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
              <Homepage />
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
      </Route>
    </Routes>
  );
};

export default App;
