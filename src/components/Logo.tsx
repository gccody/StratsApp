import React from 'react';
import logo from '../assets/logo.png';

type LogoSize = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '14' | '16' | '20' | '24' | '28' | '32' | '36' | '40' | '44' | '48' | '52' | '56' | '60' | '64' | '72' | '80' | '96' | 'auto' | 'px' | '0.5' | '1.5' | '2.5' | '3.5' | '1/2' | '1/3' | '2/3' | '1/4' | '2/4' | '3/4' | '1/5' | '2/5' | '3/5' | '4/5' | '1/6' | '2/6' | '3/6' | '4/6' | '5/6' | 'full' | 'screen' | 'svh' | 'lvh' | 'dvh' | 'min' | 'max' | 'fit';

type LogoProps = {
    size?: LogoSize;
};

const Logo: React.FC<LogoProps> = ({ size = '24' }) => {
    return (
        <img src={logo} alt="logo" className={`absolute top-0 left-0 m-5 rounded-full shadow-custom h-${size.trim()}`} />
    );
};

export default Logo;
