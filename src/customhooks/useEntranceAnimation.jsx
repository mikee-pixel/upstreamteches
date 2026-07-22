import { useState, useEffect, useRef } from "react";

const useEntranceAnimation = (delay, threshold = 0.3) => {
      const targetElement = useRef();
      const timeoutId = useRef();
      const [activeAnimation, setActiveAnimation] = useState(false);
    
      useEffect(() => {
        if(!targetElement.current) return;

        const animationObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if(entry.isIntersecting) {
              timeoutId.current = setTimeout(() => {
                setActiveAnimation(true);
              }, delay);

              animationObserver.unobserve(targetElement.current);
            }
          });
        },{
            threshold,
          });
    
        animationObserver.observe(targetElement.current);
    
        return () => {
          if(targetElement.current) animationObserver.unobserve(targetElement.current);
          animationObserver.disconnect();
          clearTimeout(timeoutId.current);
        }
    
      }, [threshold, delay])

      return {targetElement, activeAnimation};

}

export default useEntranceAnimation;