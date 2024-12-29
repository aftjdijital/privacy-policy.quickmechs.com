import { useState, useEffect } from "react";

const useMediaQuery = (mediaQuery: string): boolean => {
  // Initialize the state with the current match state
  const [isMatch, setIsMatch] = useState<boolean>(() => {
    // Check if window is available (for SSR compatibility)
    if (typeof window === "undefined") {
      return false;
    }

    return window.matchMedia(mediaQuery).matches;
  });

  useEffect(() => {
    // Guard clause for SSR
    if (typeof window === "undefined") {
      return undefined;
    }

    // Create the media query list
    const mediaQueryList = window.matchMedia(mediaQuery);

    // Update the state initially
    setIsMatch(mediaQueryList.matches);

    // Create event listener function
    const listener = (event: MediaQueryListEvent) => {
      setIsMatch(event.matches);
    };

    // Add the listener
    mediaQueryList.addEventListener("change", listener);

    // Clean up
    return () => {
      mediaQueryList.removeEventListener("change", listener);
    };
  }, [mediaQuery]); // Re-run effect if mediaQuery changes

  return isMatch;
};

export default useMediaQuery;
