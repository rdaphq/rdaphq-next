'use client'

import Image from 'next/image';
import Logo from '../../../public/rdap-iso.svg';

import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useEffect, useRef } from 'react';
import './splash.css';

function SplashScreen () {
    const splashRef = useRef(null);

    useGSAP(() => {
        gsap.to(splashRef.current, {
            delay: 1.5,
            duration: 0.5,
            opacity: 0
        })
    })
    
    useEffect(() => {
        const splash = document.getElementById('splash');

        if (splash) {
            setTimeout(() => {
                splash.style.display = 'none';
            }, 2000);
        }

    }, []);

    return (
        <div ref={splashRef} id="splash" className="splash w-screen min-h-screen bg-black flex items-center justify-center fixed z-100">
            <Image src={Logo} alt="Rdap Logo" width={40} />
        </div>
    );
}

export default SplashScreen;