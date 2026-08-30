import SectionLayout from "../components/sections/SectionLayout";
import { Link, NavLink } from "react-router-dom";
import {
  Phone,
  Menu,
  House,
  Info,
  BriefcaseBusiness,
  Send,
  CircleX,
  Mail,
  PhoneCall,
  CircleArrowRight,
} from "lucide-react";
import { useRef, useState, useEffect } from "react";
import useEntranceAnimation from "../customhooks/useEntranceAnimation";

const Header = () => {

  const headerMenu = useRef();
  const [stickyHeader, setStickyHeader] = useState(false);
  const prevTopScroll = useRef(0);
  const [menuSlideOutStatus, setMenuSlideOutStatus] = useState(false);
  const mobileMenu = useRef(null);

  //Sticky Header Navigation
  useEffect(() => {
    if (!headerMenu.current) return;

    const handleScroll = () => {
      const currentTopScroll = window.scrollY;

      if (currentTopScroll === 0) {
        setStickyHeader(false);
      } else if (currentTopScroll > prevTopScroll.current) {
        setStickyHeader(false);
      } else {
        setStickyHeader(true);
      }

      prevTopScroll.current = currentTopScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //Entrance Animation
  const {
    targetElement: headerMenuElement,
    activeAnimation: headerMenuElementAnimation,
  } = useEntranceAnimation();

  const headerMenuRefs = (element) => {
    headerMenu.current = element;
    headerMenuElement.current = element;
  };

  //Close SlideOut When User Clicks Outside Modal
  useEffect(() => {
    if(!menuSlideOutStatus) return;
    const handleSlideOutMenu = (e) => {
      if(!mobileMenu.current.contains(e.target)) {
        console.log("Clicked outside the slide menu!");
        setMenuSlideOutStatus(false);
      } else {
        console.log("Clicked inside the slide menu");
      }
    }
    document.addEventListener("click", handleSlideOutMenu);

    return () => {
      document.removeEventListener("click", handleSlideOutMenu);
    }
}, [menuSlideOutStatus]);

  //Scroll To Top Function

  return (
    <SectionLayout
      class_name={`header-menu ${stickyHeader ? "sticky--active" : ""}`}
    >
      <div
        className={`row flex flex-row justify-between items-center w-full gap-10 xl:gap-30 py-5 ${headerMenuElementAnimation ? "slide-down--active" : "slide-down--disabled"}`}
        ref={headerMenuRefs}
      >
        <div className="inner-con branding-logo w-[50%] md:w-[20%]">
          <Link to="/">
            <img
              src="/images/upstreamteches-branding-logo-transparent-bg.png"
              alt="upstream branding logo"
            />
          </Link>
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
                <Link to="/contact-us">Contact Us</Link>
              </li>
            </ul>

            <Link to={"tel:+639926414357"} className="btn primary-button">
              <span className="flex flex-row items-center gap-3">
                <Phone />
                Get In Touch
              </span>
            </Link>
          </div>
          <div className="mobile-header-menu-container flex items-center" ref={mobileMenu}>
            <Menu onClick={() => setMenuSlideOutStatus(true)} />
            {/* Mobile Menu */}
            <div className={`mobile-menu-container flex flex-col px-5 py-10 ${menuSlideOutStatus ? "active" : ""}`}>
              <div className="row1 flex flex-row justify-between">
                <img
                  src="../images/upstream logo mobile menu.png"
                  alt="upstream logo mobile menu"
                  className="branding-logo-mobile-menu w-[40%]"
                />
                <button type="button" onClick={() => setMenuSlideOutStatus(false)}>
                  <CircleX size={30} />
                </button>
              </div>
              <div className="row2 pt-5">
                <div className="main-menu-mobile">
                  <ul className="flex flex-col">
                    <li
                      className="menu-item"
                      onClick={() => setMenuSlideOutStatus(false)}
                    >
                      <NavLink to="/" className="flex flex-row align-middle">
                        <House /> Home
                      </NavLink>
                    </li>
                    <li
                      className="menu-item"
                      onClick={() => setMenuSlideOutStatus(false)}
                    >
                      <NavLink to="/about-us/" className="flex flex-row align-middle">
                        <Info /> About Us
                      </NavLink>
                    </li>
                    <li
                      className="menu-item"
                      onClick={() => setMenuSlideOutStatus(false)}
                    >
                      <NavLink to="/services/" className="flex flex-row align-middle">
                        <BriefcaseBusiness /> Services
                      </NavLink>
                    </li>
                    <li
                      className="menu-item"
                      onClick={() => setMenuSlideOutStatus(false)}
                    >
                      <NavLink
                        to="/contact-us/"
                        className="flex flex-row align-middle"
                      >
                        <Send /> Contact Us
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <div className="lets-talk-container">
                  <a
                    href="tel:+639926414357"
                    className="flex flex-row items-center p-5 gap-6"
                  >
                    <div className="phone-icon-container">
                      <PhoneCall size={25} />
                    </div>
                    <div className="text-content flex flex-col gap-2">
                      <h5>Lets Talk</h5>
                      <p>Get a free consultation for your business.</p>
                    </div>
                    <CircleArrowRight size={50} className="circleArrowRightIcon" />
                  </a>
                </div>
              </div>
              <div className="row3 pt-5 flex flex-col gap-5">
                <hr />
                <h5>Get In Touch</h5>
                <div className="contact-details-container">
                  <ul className="flex flex-col gap-2">
                    <li>
                      <a href="mailto:michaelnavidad36@gmail.com">
                        <p className="flex flex-row items-center gap-5 ">
                          <Mail />
                          michaelnavidad36@gmail.com
                        </p>
                      </a>
                    </li>
                    <li>
                      <a href="maps.app.goo.gl/bdZ7T3caRjAhVsuk7" target="_blank">
                        <p className="flex flex-row items-center gap-5 ">
                          <Phone /> Bacoor, Cavite, 4102
                        </p>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>      
    </SectionLayout>
  );
};

export default Header;
