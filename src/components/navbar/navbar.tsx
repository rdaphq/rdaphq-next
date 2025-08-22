'use client'

import Image from 'next/image';
import { useEffect } from 'react';
import Logo from '../../../public/rdap.png';
import './navbar.css';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

function Navbar() {
    const navLinks = [
        {
            name: 'Music',
            path: '/music'
        },
        {
            name: 'Merch',
            path: '/shop'
        },
        // {
        //     name: 'Services',
        //     path: '/services'
        // },
        {
            name: 'Portfolio',
            path: '/portfolio'
        },
        {
            name: 'Discord',
            path: '/discord'
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
                <div className='nav-wrapper flex items-center gap-10'>
                    <div className='nav-brand brightness-100 hover:brightness-50'>
                        <a href='/'>
                            <Image
                                src={Logo}
                                alt='Rdap Logo'
                                priority
                            />
                        </a>
                    </div>
                </div>
                <div className='nav-links rdap-sans-alt flex items-center gap-10'>
                    {navLinks.map((link, index) => (
                        <div key={index}>
                            <a className='rdap-small' href={link.path} aria-label={link.name}>{link.name}</a>
                        </div>
                    ))}
                    <div className='rdapClerk' key='rdapClerk'>
                    <SignedOut>
                        <SignInButton>
                            <button className='rdapClerkLogin text-[.7rem] uppercase bg-white/10 text-white/40 py-2 px-4 rounded-full cursor-pointer hover:bg-white/20 hover:text-white transition-all duration-200'>SIGN IN</button>
                        </SignInButton>
                    </SignedOut>
                    <SignedIn>
                        <div className='rdapClerkProfile'>
                            <UserButton />
                        </div>
                    </SignedIn>
                </div>
                </div>
                <div className='nav-burger'>
                    <i className='fi fi-rr-menu-burger'></i>
                </div>
                {/* <div className='nav-wrapper flex items-center gap-4'>
                    <div className='nav-buttons hidden sm:flex items-center gap-4'>
                        <div className='nav-button flex items-center gap-2'>
                            <a href=''>Hire</a>
                            <i className='fi fi-rr-globe'></i>
                        </div>
                        <div className='nav-button flex items-center gap-2'>
                            <a className='font-normal' href='/paypal'>Support</a>
                            <i className='fi fi-rr-heart'></i>
                        </div>
                    </div>
                </div> */}
            </div>
        </nav>
    )
}

export default Navbar;