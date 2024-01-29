import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Folder from './Folder';

const HamburgerMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className="fixed top-0 right-0 m-5 z-20">
            <button onClick={toggleMenu} className="text-3xl z-20 text-color5">
                {isOpen ? '✖' : '☰'}
            </button>

            <div className={`fixed top-0 right-0 h-full bg-white p-5 transform transition-transform z-20 w-64 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <button onClick={toggleMenu} className="text-3xl absolute top-0 right-0 m-5">
                    ✖
                </button>
                <div className="mt-10">
                    <Link to="/" className="block py-2">
                        Home
                    </Link>
                    <Link to="/games" className="block py-2">
                        Games
                    </Link>
                    <Link to="/about" className="block py-2">
                        About
                    </Link>
                    <Folder title="More">
                        <Link to="/contact" className="block py-2">
                            Contact
                        </Link>
                        <Link to="/privacy" className="block py-2">
                            Privacy
                        </Link>
                        <Link to="/terms" className="block py-2">
                            Terms
                        </Link>
                    </Folder>
                    <Folder title="Social">
                        <a href="https://twitter.com/gccody2010" className="block py-2">
                            Twitter
                        </a>
                        <a href="https://youtube.com/@gccody" className="block py-2">
                            YouTube
                        </a>
                        <a href="https://twitch.tv/gccody" className="block py-2">
                            Twitch
                        </a>
                    </Folder>
                </div>
            </div>
        </div>
    );
};

export default HamburgerMenu;
