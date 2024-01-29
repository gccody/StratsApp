import React, { ReactNode } from 'react';

type BackgroundProps = {
    children: ReactNode;
    // You can add more props here if you need to customize the background further
};

const Background: React.FC<BackgroundProps> = ({ children }) => {
    return (
        <div className="bg-gradient-to-t from-color3 to-color1 min-h-screen">
            {children}
        </div>
    );
};

export default Background;