'use client'

import Image from 'next/image';
import { useEffect } from 'react';
import Logo from '../../public/rdap-iso.svg';
import './navbar.css';

function Navbar() {
    const navLinks = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'Music',
            path: '/music'
        },
        {
            name: 'Merch',
            path: '/shop'
        },
        {
            name: 'Services',
            path: '/services'
        },
        {
            name: 'Portfolio',
            path: '/portfolio'
        }
    ];

    useEffect(() => {
        const nav = document.getElementById('nav');
        
        const handleScroll = () => {
            if (window.scrollY > 10) {
                nav?.classList.add('scrolled');
            } else {
                nav?.classList.remove('scrolled');
            }
        };

        document.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav id='nav' className='nav sticky top-0 z-50'>
            <div className='nav-container flex items-center justify-between'>
                <div className='nav-wrapper flex items-center gap-6'>
                    <div className='nav-brand'>
                        <a href='/'>
                            <Image
                                className='w-8'
                                src={Logo}
                                alt='Rdap Logo'
                                priority
                            />
                        </a>
                    </div>
                    <div className='nav-links flex items-center gap-8 text-gray-400'>
                        {navLinks.map((link, index) => (
                            <div key={index}>
                                <a href={link.path} aria-label={link.name}>{link.name}</a>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='nav-wrapper flex items-center gap-4'>
                    <div className='nav-buttons hidden sm:flex items-center gap-4'>
                        <div className='nav-button flex items-center gap-2'>
                            <i className='fi fi-rr-handshake'></i>
                            <a href=''>Hire</a>
                        </div>
                        <div className='nav-button flex items-center gap-2'>
                            <i className='fi fi-rr-heart'></i>
                            <a href=''>Support</a>
                        </div>
                    </div>
                    <div className='nav-burger'>
                        <i className='fi fi-rr-menu-burger'></i>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;