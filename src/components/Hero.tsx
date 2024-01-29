import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

export const Hero = () => {
    return (
        <div>
            <Logo size="24" />
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
            <a href="https://gccody.com" className="absolute bottom-0 right-0 mb-5 mr-5 text-white text-sm">
                Made by gccody
            </a>
        </div>
    );
}

export default Hero;