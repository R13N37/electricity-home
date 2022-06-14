import { useState, useEffect } from 'react';

export type IWindowDimension = {
  width: number;
  height: number;
}

const  getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export const  useWindowDimensions = () =>  {
  const [windowDimensions, setWindowDimensions] = useState<IWindowDimension>(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

export default useWindowDimensions;
