import SectionLayout from "../sections/SectionLayout";
import Carousel from "./Carousel";
import useEntranceAnimation from "../../customhooks/useEntranceAnimation";


const ClientLogoCaraousel = () => {
    const {targetElement, activeAnimation} = useEntranceAnimation()

  return (
    <SectionLayout class_name="client-logo-carousel">
      <div className={`row flex flex-col w-full p-10 mt-10 gap-5 ${activeAnimation ? 'fade-in--active' : 'fade-in--disabled'}`} ref={targetElement}>
        <h5>Trusted by business across industries</h5>
        <Carousel />
      </div>
    </SectionLayout>
  );
};

export default ClientLogoCaraousel;
