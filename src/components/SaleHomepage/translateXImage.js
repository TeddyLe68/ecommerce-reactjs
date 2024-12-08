import { useState, useRef, useEffect } from "react";

const useTranlateXImage = () => {
  const [scrollDirection, setScrollDirection] = useState(null);
  const previousScrollPosition = useRef(0);
  const [translateXPosition, setTranslateXPosition] = useState(80);
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollTracking = () => {
    const currentScrollPosition = window.pageYOffset;

    if (currentScrollPosition > previousScrollPosition.current) {
      setScrollDirection("down");
    } else if (currentScrollPosition < previousScrollPosition.current) {
      setScrollDirection("up");
    }

    previousScrollPosition.current =
      currentScrollPosition <= 0 ? 0 : currentScrollPosition;

    setScrollPosition(currentScrollPosition);
  };

  const handleTranslateX = () => {
    if (scrollDirection === "down" && scrollPosition >= 1400) {
      setTranslateXPosition(
        translateXPosition <= 0 ? 0 : translateXPosition - 1
      );
    } else if (scrollDirection === "up") {
      setTranslateXPosition(
        translateXPosition >= 80 ? 80 : translateXPosition + 1
      );
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollTracking);

    return () => window.removeEventListener("scroll", scrollTracking);
  }, []);
  useEffect(() => {
    handleTranslateX();
  }, [scrollPosition]);
  return { translateXPosition, handleTranslateX, scrollPosition };
};

export default useTranlateXImage;
