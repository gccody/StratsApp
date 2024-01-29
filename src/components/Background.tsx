import React, { ReactNode } from 'react';

type BackgroundProps = {
    children: ReactNode;
};

const Background: React.FC<BackgroundProps> = ({ children }) => {
    return (
        <div className="bg-gradient-to-t from-color1 to-color3 min-h-screen p-5">
            {children}
        </div>
    );
};

export default Background;