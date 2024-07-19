import React from "react";
import { Link } from "react-router-dom";

declare global {
    interface Window {
        isWebView?: boolean;
    }
}

export const Hero = () => {
    const userAgent = navigator.userAgent;
    let showAddToHomeScreen = false;
    const isNotInWebView = typeof window.isWebView === 'undefined' || !window.isWebView;

    // Extend Navigator type for TypeScript
    interface NavigatorExtended extends Navigator {
        standalone?: boolean;
    }

    // Check for iOS or Android in a regular browser
    if (/iPad|iPhone|iPod/.test(userAgent) && !(navigator as NavigatorExtended).standalone && isNotInWebView) {
        showAddToHomeScreen = true; // iOS in a regular browser
    } else if (/android/i.test(userAgent) && !window.matchMedia('(display-mode: standalone)').matches && isNotInWebView) {
        showAddToHomeScreen = true; // Android in a regular browser
    }
    return (
        <div>
            <div className="text-center absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2" style={{ width: 'fit-content', height: 'fit-content' }}>
                <div className="max-w-lg">
                    <h1 className="mb-5 text-7xl font-bold text-white">
                        Discover Game Strategies
                    </h1>
                    <p className="mb-5 text-white">
                        Explore expert strats for your favorite video games.
                    </p>
                    <Link to="/games" className="px-5 py-3 rounded-full bg-white text-xl font-bold text-black">
                        Explore
                    </Link>
                </div>
            </div>
            {showAddToHomeScreen && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white">
                    <p>{/iPad|iPhone|iPod/.test(userAgent) ? "Tap the share button, then 'Add to Home Screen'" : "Tap the menu button, then 'Add to Home Screen'"}</p>
                    <div className="text-center">👇</div>
                </div>
            )}
        </div>
    );
}

export default Hero;