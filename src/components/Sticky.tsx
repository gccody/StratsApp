import React from 'react';
import Logo from './Logo';

const Sticky: React.FC = () => {
    return (
        <div>
            <Logo className={`fixed top-0 left-0 m-5`} size="h-24" />
            <a href="https://gccody.com" className="fixed bottom-0 right-0 mb-5 mr-5 text-white text-sm">
                Made by gccody
            </a>
        </div>
    );
};

export default Sticky;
