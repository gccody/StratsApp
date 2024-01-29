import React, { useState } from 'react';

type FolderProps = {
    title: string;
    children: React.ReactNode;
};

const Folder: React.FC<FolderProps> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setIsOpen(!isOpen)} className="flex justify-between items-center py-2 w-full">
                {title}
                <span className={`transform transition-transform ${isOpen ? 'rotate-90' : ''}`}>➤</span>
            </button>
            <div style={{ 
                maxHeight: isOpen ? '500px' : '0', 
                overflow: 'hidden', 
                transition: 'max-height 0.3s ease-out' 
            }}>
                <div className="pl-4">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Folder;
