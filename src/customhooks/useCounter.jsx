import { useRef, useState, useEffect } from "react"; 

const useCounter = (maxVal) => {
  const dataElementToObserve = useRef(null);
  const [value, setValue] = useState(0);
  const statisticInterval = useRef(null);


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
      const handleCounter = (value, maxVal) => {
        if (value < maxVal) return value + 1;
        return value;
      };

      //Interval Function
      statisticInterval.current = setInterval(() => {
        setValue((prev) => handleCounter(prev, maxVal))
      }, 80);
    } else {
      //Clear Interval Statistic Data Is Out Of The Viewport.
      clearInterval(statisticInterval.current);
    }
  };

  if (value >= maxVal) {
    clearInterval(statisticInterval.current);
  }

  
  
  return {dataElementToObserve, value}
};

export default useCounter;
 