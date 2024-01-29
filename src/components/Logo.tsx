import React from 'react';
import logo from '../assets/logo.webp';
import { Link } from 'react-router-dom';

type LogoSize = 'h-0' | 'h-1' | 'h-2' | 'h-3' | 'h-4' | 'h-5' | 'h-6' | 'h-7' | 'h-8' | 'h-9' | 'h-10' | 'h-11' | 'h-12' | 'h-14' | 'h-16' | 'h-20' | 'h-24' | 'h-28' | 'h-32' | 'h-36' | 'h-40' | 'h-44' | 'h-48' | 'h-52' | 'h-56' | 'h-60' | 'h-64' | 'h-72' | 'h-80' | 'h-96' | 'h-auto' | 'h-px' | 'h-0.5' | 'h-1.5' | 'h-2.5' | 'h-3.5' | 'h-1/2' | 'h-1/3' | 'h-2/3' | 'h-1/4' | 'h-2/4' | 'h-3/4' | 'h-1/5' | 'h-2/5' | 'h-3/5' | 'h-4/5' | 'h-1/6' | 'h-2/6' | 'h-3/6' | 'h-4/6' | 'h-5/6' | 'h-full' | 'h-screen' | 'h-svh' | 'h-lvh' | 'h-dvh' | 'h-min' | 'h-max' | 'h-fit';

type LogoProps = {
    size?: LogoSize;
    className?: string;
};

const Logo: React.FC<LogoProps> = ({ size = '24', className }) => {
    return (
        <Link to="/" style={{ width: 'fit-content', height: 'fit-content' }}>
            <img src={logo} alt="logo" className={`rounded-full shadow-custom ${size.trim()} ${className}`} onClick={() => {  }} />
        </Link>
    );
};

export default Logo;
