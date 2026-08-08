import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect } from "react";


const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({loop: false}, [Autoplay()]);

  useEffect(() => {
    if(!emblaApi) return;
    emblaApi.plugins().autoplay?.play();
  }, [emblaApi])

  return (
    <div className="embla w-full">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide client-logo-item">
            <img src="/images/lms-logo.png" alt="client-logo" />
          </div>

          <div className="embla__slide client-logo-item">
            <img src="/images/terralink-logo.png" alt="client-logo" />
          </div>

          <div className="embla__slide client-logo-item">
            <img src="/images/sbt-logo.png" alt="client-logo" />
          </div>

          <div className="embla__slide client-logo-item">
            <img src="/images/launchpoint-logo.png" alt="client-logo" />
          </div>

          <div className="embla__slide client-logo-item">
            <img src="/images/ogs-logo.png" alt="client-logo" />
          </div>

          <div className="embla__slide client-logo-item">
            <img src="/images/amk-logo.png" alt="client-logo" />
          </div>

          <div className="embla__slide client-logo-item">
            <img src="/images/incantus-logo.png" alt="client-logo" />
          </div>

        </div>
      </div>

      {/* <button className="embla__prev" onClick={goToPrev}>Scroll to prev</button>
      <button className="embla__next" onClick={goToNext}>Scroll to next</button> */}
    </div>
  );
};

export default Carousel;
