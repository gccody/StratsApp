import React, { useRef } from 'react';
import useOnScreen from '../hooks/useOnScreen';

type CardProps = {
    photo: any;
    alt?: string;
    title: string;
    text: string;
    side?: 'right' | 'left';
    onClick?: () => void;
};

const Card: React.FC<CardProps> = ({ photo, alt, title, text, side = 'left', onClick }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(cardRef);
    const isRightAligned = side === 'right';

    return (
        <div ref={cardRef} className={`flex ${isRightAligned ? 'flex-row-reverse' : 'flex-row'} items-center p-4 md:rounded-xl shadow-md max-w-6xl mx-auto border-b-0 m-5 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'} bg-color3 text-black`} onClick={onClick}>
            <div className="w-1/3 md:rounded-xl overflow-hidden">
                <img src={photo} alt={alt ?? "Card"} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 px-4">
                <h2 className="text-2xl font-semibold">{title}</h2>
                <p className="mt-2 text-black text-lg">{text}</p>
            </div>
        </div>
    );
};

export default Card;
