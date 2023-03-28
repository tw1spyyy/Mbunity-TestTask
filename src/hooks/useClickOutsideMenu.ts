import { useEffect } from "react";


// Hook for drop down menu (closing it if we click outside menu)

export const useClickOutside = (ref: any, callback: () => void) => {
    const handleClick = (e: any) => {
        if (ref.current && !ref.current.contains(e.target)) {
            callback();
        }
    };
    useEffect(() => {
        document.addEventListener("click", handleClick);
        return () => {
            document.removeEventListener("click", handleClick);
        };
    });
};
