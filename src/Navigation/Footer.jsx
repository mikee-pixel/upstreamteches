import SectionLayout from "../components/sections/SectionLayout";
import CopyWrite from "./CopyWrite";
import { Link } from "react-router-dom";
import { Phone, Mail, Map } from "lucide-react";

const Footer = () => {
  return (
    <SectionLayout class_name="footer-menu">
      <div className="row row1 separator-container flex w-full">
        <hr className="w-[100%] mt-20" />
      </div>
      <div className="row row2 main-footer-menu flex flex-row justify-between w-full gap-5 py-20 flex-wrap">
        <div className="inner-con branding-footer flex flex-col w-full md:w-[20%] gap-5">
          <img
            src="/images/upstreamteches-branding-logo-transparent-bg.png"
            alt="upstream branding logo"
          />
          <p>
            Accelerate your business growth with data-driven digital marketing.
          </p>
        </div>
        <div className="inner-con quick-menu flex flex-col w-full md:w-[20%] gap-5">
          <h5>Quick Links</h5>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="inner-con service-menu flex flex-col w-full md:w-[20%] gap-5">
          <h5>Services</h5>
          <ul>
            <li>
              <Link to="/">Website Development</Link>
            </li>
            <li>
              <Link to="/">E-Commerce</Link>
            </li>
            <li>
              <Link to="/">SEO</Link>
            </li>
            <li>
              <Link to="/">Graphics</Link>
            </li>
          </ul>
        </div>
        <div className="inner-con contact-details flex flex-col w-full md:w-[20%] gap-5">
          <h5>Contact Details</h5>
          <ul>
            <li>
              <a
                href="tel:639926414357"
                className="contact-item telphone flex flex-row gap-5"
              >
                <Phone /> (+63) 992 6414 357
              </a>
            </li>
            <li>
              <a
                href="mailto:michaelnavidad36@gmail.com"
                className="contact-item email flex flex-row gap-5"
              >
                <Mail /> michaelnavidad36@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://maps.app.goo.gl/bdZ7T3caRjAhVsuk7"
                target="_blank"
                className="contact-item location flex flex-row gap-5"
              >
                <Map /> Bacoor, Cavite, 4102
              </a>
            </li>
          </ul>
        </div>
      </div>
    </SectionLayout>
  );
};

export default Footer;
