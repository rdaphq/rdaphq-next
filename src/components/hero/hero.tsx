'use client'
import './hero.css';

import { useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import { gsap } from 'gsap';

gsap.registerPlugin(SplitText);

export default function Hero () {
    const titleRef = useRef(null);
    const buttonsRef = useRef(null);

    useGSAP(() => {
        const title = new SplitText(titleRef.current, {
            type: 'words'
        });

        gsap.from(title.words, {
            delay: 2,
            duration: 1.5,
            y: 100,
            opacity: 0,
            filter: 'blur(10px)',
            ease: 'power3.out',
            stagger: 0.1
        });

        gsap.from(buttonsRef.current, {
            duration: 1,
            opacity: 0,
            delay: 3.5,
            ease: 'power3.out',
        })
    });

    useEffect(() => {
        const heroCursor = document.getElementById('heroCursor');
        const heroContainer = document.getElementById('heroContainer');

        if (heroContainer) {
            heroContainer.addEventListener('mouseenter', () => {
                if (heroCursor) {
                    heroCursor.style.display === 'none' ? heroCursor.style.display = 'block' : heroCursor.style.display = 'block';
                }
            });

            heroContainer.addEventListener('mouseleave', () => {
                if (heroCursor) {
                    heroCursor.style.display === 'block' ? heroCursor.style.display = 'none' : heroCursor.style.display = 'none';
                }
            });

            heroContainer.addEventListener('mousemove', (event) => {
                const { clientX, clientY } = event;

                if (heroCursor) {
                    heroCursor.style.left = `${clientX}px`;
                    heroCursor.style.top = `${clientY}px`;
                }
            });
        }
    }, [])

    return (
        <section className='hero h-[62vh] select-none'>
            <div id='heroContainer' className='hero-container overflow-clip h-full flex items-center justify-center'>
                <div id='heroCursor' className="hero-cursor"></div>

                <div className='hero-box z-2'>
                    <h1 ref={titleRef} className='hero-title text-6xl text-balance tracking-tighter font-bold'>The art of everything.</h1>
                    <div ref={buttonsRef} className='hero-buttons flex items-center justify-center gap-3'>
                        <div className='hero-button flex items-center gap-2'>
                            <p><i className='fi fi-rr-arrow-small-down'></i></p> Explore
                        </div>

                        <a href='/music'>
                            <div className='hero-button alt flex items-center gap-2'>
                                Music
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}