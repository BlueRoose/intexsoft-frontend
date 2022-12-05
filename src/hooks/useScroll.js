import { useEffect } from "react";

export function useScroll() {
    useEffect(() => {
        const scrolledY = sessionStorage.getItem(window.location.pathname);
        window.scroll(0, scrolledY);
      }, []);
}