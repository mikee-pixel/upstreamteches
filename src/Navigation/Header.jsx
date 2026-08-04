import SectionLayout from "../components/sections/SectionLayout";
import { Link } from "react-router-dom";
import { Phone, Menu } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import useEntranceAnimation from "../customhooks/useEntranceAnimation";

const Header = () => {

  const headerMenu = useRef();
  const [stickyHeader, setStickyHeader] = useState(false);
  const prevTopScroll = useRef(0);
  
  //Sticky Header Navigation
  useEffect(() => {
    if(!headerMenu.current) return;

    const handleScroll = () => {
      // console.log("Scroll Event Listener Trigger!");
      const currentTopScroll = window.scrollY;

      // console.log(`Current Top Scroll: ${currentTopScroll} | Previous Top Scroll: ${prevTopScroll.current}`);
      if (currentTopScroll === 0) {
        setStickyHeader(false);
      }
      else if(currentTopScroll > prevTopScroll.current) {
        setStickyHeader(false);
        // console.log("Sticky Header set to FALSE");
      } else  {
        setStickyHeader(true);
        // console.log("Sticky Header set TRUE");
      }

      prevTopScroll.current = currentTopScroll;
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [])


  //Entrance Animation
  const {targetElement: headerMenuElement, activeAnimation: headerMenuElementAnimation} = useEntranceAnimation();

  const headerMenuRefs = (element) => {
    headerMenu.current = element;
    headerMenuElement.current = element;
  }

  return (
    <SectionLayout class_name={`header-menu ${stickyHeader ? "sticky--active" : ""}`}>
      <div
        className={`row flex flex-row justify-between items-center w-full gap-10 xl:gap-30 py-5 ${headerMenuElementAnimation ? "slide-down--active" : "slide-down--disabled"}`}
        ref={headerMenuRefs}
      >
        <div className="inner-con branding-logo w-[50%] md:w-[20%]">
          <Link to="/"><img
            src="/images/upstreamteches-branding-logo-transparent-bg.png"
            alt="upstream branding logo"
          /></Link>
        </div>
        <div className="inner-con main-header-menu-container flex justify-end w-[50%] md:w-[80%]">
          <div className="desktop-header-menu-container flex flex-row gap-10">
            <ul className="flex flex-row md:gap-3 lg:gap-10 items-center align-middle">
              <li className="menu-item">
                <Link to="/">Home</Link>
              </li>
              <li className="menu-item">
                <Link to="/about-us">About Us</Link>
              </li>
              <li className="menu-item">
                <Link to="/services">Services</Link>
              </li>
              <li className="menu-item">
                <Link to="/">Contact Us</Link>
              </li>
            </ul>

            <button className="primary-button">
              <span className="flex flex-row items-center gap-3">
                <Phone />
                Get In Touch
              </span>
            </button>
          </div>
          <div className="mobile-header-menu-container flex items-center">
            <Menu />
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default Header;
