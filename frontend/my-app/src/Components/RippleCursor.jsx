'use client';
import React, { useReducer, useEffect } from 'react';
const rippleReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_RIPPLE':
            return [...state, action.payload].slice(-30);
        case 'REMOVE_RIPPLE':
            return state.filter((ripple) => ripple.id !== action.payload);
        default:
            return state;
    }
};
const RippleCursor = ({ maxSize = 10, duration = 1000, blur = true }) => {
    const [ripples, dispatch] = useReducer(rippleReducer, []);
    const handleMouseMove = (e) => {
        const ripple = {
            id: `${Date.now()}-${Math.random()}`,
            x: e.clientX,
            y: e.clientY,
        };
        dispatch({ type: 'ADD_RIPPLE', payload: ripple });
        setTimeout(() => {
            dispatch({ type: 'REMOVE_RIPPLE', payload: ripple.id });
        }, duration);
    };
    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [duration]);
    return (
        <div className="fixed top-0 left-0 w-screen h-screen pointer-events-none overflow-hidden z-[9999]">
            {ripples.map((ripple) => (
                <div
                    key={ripple.id}
                    className="absolute rounded-full bg-blue-500 bg-opacity-50 shadow-[0_0_10px_rgba(0,150,255,0.7),0_0_20px_rgba(0,150,255,0.4)] animate-ripple"
                    style={{
                        left: `${ripple.x}px`,
                        top: `${ripple.y}px`,
                        width: `${maxSize}px`,
                        height: `${maxSize}px`,
                        animationDuration: `${duration}ms`,
                        filter: blur ? 'blur(4px)' : 'none',
                    }}
                />
            ))}
        </div>
    );
};
export default RippleCursor;
