import { useState, useEffect } from 'react';
import {
  SCREEN_XSM, SCREEN_SM, SCREEN_MD, SCREEN_LG, SCREEN_XL
} from './constants';

export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (event) => {
      setWidth(event.target.innerWidth);
    };

    function debounce(func, time) {
      let timer;
      return function(event){
        if(timer) clearTimeout(timer);
        timer = setTimeout(func, time, event);
      };
    };

    window.addEventListener('resize', debounce(handleResize, 1000));

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    width,
    isScreenXSm: width > SCREEN_XSM,
    isScreenSm: width > SCREEN_SM,
    isScreenMd: width > SCREEN_MD,
    isScreenLg: width > SCREEN_LG,
    isScreenXl: width > SCREEN_XL,
  };
};
