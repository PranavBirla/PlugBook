import React, { useState, useEffect } from 'react';

const CustomCursor = ({ color = '#ff0000' }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const moveCursor = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', moveCursor);
        return () => window.removeEventListener('mousemove', moveCursor);
    }, []);

    return (
        <div
            style={{
                position: 'fixed',
                left: position.x,
                top: position.y,
                width: '20px',
                height: '20px',
                backgroundColor: color,
                borderRadius: '50%',
                pointerEvents: 'none', // Crucial: lets you click "through" the pointer
                transform: 'translate(-50%, -50%)',
                zIndex: 9999,
            }}
        />
    );
};

export default CustomCursor;