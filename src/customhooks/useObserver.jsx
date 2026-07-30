import { useRef, useState, useEffect } from "react"; 

const useObeserver = () => {
  const dataElementToObserve = useRef(null);
  const [initialVal, setInitialVal] = useState(0);
  const [maxVal, setMaxVal] = useState(null);


  //Intersection Observer For Statistic Data
  useEffect(() => {
    if (dataElementToObserve.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              elementIsVisible(true);
            } else {
              elementIsVisible(false);
            }
          });
        },
        {
          threshold: 0.5,
        },
      );

      observer.observe(dataElementToObserve.current);

      return () => {
        if (dataElementToObserve.current)
          observer.unobserve(dataElementToObserve.current);
          observer.disconnect();
      };
    }
  }, []);

  const elementIsVisible = (visible) => {
    //Create Interval and Execute Interval to Statistics States.
    if (visible) {

      //Helper Function: Handle Counter
      const handleCounter = (initialVal, maxVal) => {
        if (initialVal < maxVal) return initialVal + 1;
        return initialVal;
      };

      //Interval Function
      statisticInterval.current = setInterval(() => {
        setInitialVal((prev) => handleCounter(prev, maxVal))
        // setSuccessProject((prev) => handleCounter(prev, 20));
        // setSatisfiedClient((prev) => handleCounter(prev, 10));
        // setWebsiteTraffic((prev) => handleCounter(prev, 68));
      }, 80);
    } else {
      //Clear Interval Statistic Data Is Out Of The Viewport.
      clearInterval(statisticInterval.current);
    }
  };

  if (initialVal >= maxVal) {
    clearInterval(statisticInterval.current);
  }


  return {dataElementToObserve, initialVal, maxVal}
};

export default useObeserver;
 