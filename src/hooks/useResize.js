import React from "react";

export function useResize() {
  const [windowResize, setWindowResize] = React.useState(getWindowResize());

  function getWindowResize() {
    const { innerWidth: width } = window;

    return width;
  }

  React.useEffect(() => {
    function handleResize() {
      setWindowResize(getWindowResize());
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowResize;
};
