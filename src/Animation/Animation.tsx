import React, { useState, useEffect, useRef } from "react";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";

export const MyComponent = () => {
    const [vantaEffect, setVantaEffect] = useState(0);
    const vantaRef = useRef(null);

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                NET({
                    el: vantaRef.current,
                    THREE: THREE,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    scale: 1.0,
                    scaleMobile: 1.0,
                    color: 0xde18de,
                    backgroundColor: '#5F5C6D',
                    points: 14.00,
                })
            );
        }
    }, [vantaEffect]);
    return (
        <div ref={vantaRef}>
            <p>
                <h1>Hi, I'm <h2 style={{color: 'black'}}>Lina</h2> </h1>
                <h1>Front end developer</h1>
            </p>
        </div>
    );
};