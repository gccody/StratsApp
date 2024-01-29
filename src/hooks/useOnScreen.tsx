import React, { useState, useEffect } from 'react';

const useOnScreen = (ref: React.RefObject<HTMLElement>) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const checkVisibility = () => {
            if (!ref.current) {
                return;
            }

            const rect = ref.current.getBoundingClientRect();
            const topVisible = rect.top < window.innerHeight;
            
            setIsVisible(topVisible);
        };

        // Check visibility initially and on scroll/resize
        checkVisibility();
        window.addEventListener('scroll', checkVisibility, { passive: true });
        window.addEventListener('resize', checkVisibility, { passive: true });

        // Clean up
        return () => {
            window.removeEventListener('scroll', checkVisibility);
            window.removeEventListener('resize', checkVisibility);
        };
    }, [ref]);

    return isVisible;
};

export default useOnScreen;
