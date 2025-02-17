import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './loader.css';

const OrganLoader = ({ onLoadComplete, minimumLoadTime = 1200 }) => {
    const timelineRef = useRef(null);
    const iconsRef = useRef([]);
    const [isLoading, setIsLoading] = useState(true);

    const organIcons = [
        {
            id: 'lungs',
            path: 'M12 2c.55 0 1 .45 1 1v8h2V7c0-2.21 1.79-4 4-4s4 1.79 4 4v9c0 3.31-2.69 6-6 6-1.1 0-2-.9-2-2V12h-2v6c0 1.1-.9 2-2 2-3.31 0-6-2.69-6-6V7c0-2.21 1.79-4 4-4s4 1.79 4 4v4h2V3c0-.55.45-1 1-1z'
        },
        {
            id: 'liver',
            path: 'M19 6c-2.5-2-6-2-9-1-2.65.88-4.66 2.5-6.12 4.34C2.65 11.2 2 13.35 2 15.5c0 2.5 1.75 4.5 4.5 4.5 1.24 0 2.34-.58 3.11-1.53C10.42 19.83 11.14 21 13 21c2.5 0 4.5-2 4.5-4.5V14h2c1.1 0 2-.9 2-2 0-2.45-1.11-4.5-2.5-6z'
        },
        {
            id: 'kidney',
            path: 'M7 3c-2.76 0-5 2.24-5 5 0 1.61.76 3.06 2 3.97V17c0 2.76 2.24 5 5 5 1.1 0 2-.9 2-2v-6.5c0-1.38-1.12-2.5-2.5-2.5S7 11.12 7 12.5V19c0 .55-.45 1-1 1s-1-.45-1-1v-4.03c1.24-.91 2-2.36 2-3.97 0-2.21-1.79-4-4-4z'
        },
        {
            id: 'brain',
            path: 'M12 2c-1.1 0-2 .9-2 2v.29C8.42 4.11 7.46 4 6.5 4 3.42 4 1 6.42 1 9.5c0 1.7.79 3.2 2 4.21V15c0 2.76 2.24 5 5 5h2c.55 0 1-.45 1-1v-3h2v3c0 .55.45 1 1 1h2c2.76 0 5-2.24 5-5v-1.29c1.21-1.01 2-2.51 2-4.21C23 6.42 20.58 4 17.5 4z'
        }
    ];

    useEffect(() => {
        const radius = 70;
        const center = { x: 100, y: 100 };
        const totalDuration = .6;  // Adjust total animation duration as per your need
        const fadeInDuration = 0.15;

        const getCirclePosition = (angle) => ({
            x: center.x + radius * Math.cos(angle),
            y: center.y + radius * Math.sin(angle)
        });

        // Initialize icons positions
        iconsRef.current.forEach((icon, index) => {
            const angle = (index * Math.PI / 2) - Math.PI / 2;
            const pos = getCirclePosition(angle);
            gsap.set(icon, { x: pos.x - 20, y: pos.y - 20, opacity: 0 });
        });

        // Create animation timeline
        timelineRef.current = gsap.timeline({
            repeat: 0,
            onComplete: () => {
                // Ensure minimum loading time is met
                setTimeout(() => {
                    setIsLoading(false);
                    if (onLoadComplete) {
                        onLoadComplete();
                    }
                }, minimumLoadTime);  // Ensures loader stays for at least the specified minimum load time
            }
        });

        // Animate each icon
        iconsRef.current.forEach((icon, index) => {
            timelineRef.current
                .to(icon, {
                    duration: fadeInDuration,
                    opacity: 1,
                    ease: "power1.inOut"
                })
                .to(icon, {
                    duration: totalDuration / 2,
                    rotation: 360,
                    motionPath: {
                        path: Array(8).fill().map((_, i) => {
                            const angle = ((i + 1) * Math.PI / 4) - Math.PI / 2;
                            const pos = getCirclePosition(angle);
                            return { x: pos.x - 20, y: pos.y - 20 };
                        }),
                        curviness: 1
                    },
                    ease: "none"
                }, "<");
        });

        // Animate progress bar
        gsap.to('.progress-bar', {
            duration: minimumLoadTime / 1000,
            width: '100%',
            ease: 'linear'
        });

        // Cleanup
        return () => {
            if (timelineRef.current) {
                timelineRef.current.kill();
            }
        };
    }, [minimumLoadTime, onLoadComplete]);

    // Return loader if loading is still in progress
    if (isLoading) {
        return (
            <div className="loader-container">
                <div className="spinner-container">
                    {organIcons.map((icon, index) => (
                        <div
                            key={icon.id}
                            className="organ-icon"
                            ref={el => iconsRef.current[index] = el}
                        >
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d={icon.path} />
                            </svg>
                        </div>
                    ))}
                    <div className="heart" />
                </div>
                <div className="message">
                    <div className="title">Giving Hope</div>
                    <div className="subtitle">One heart, one life, one miracle at a time</div>
                </div>
                <div className="progress-container">
                    <div className="progress-bar" />
                </div>
            </div>
        );
    }

    // Once loading is complete, return the page content
    return (
        <div className="page-content">
            {/* Your actual page content goes here */}
            <h1>Welcome to the Page!</h1>
        </div>
    );
};

export default OrganLoader;
