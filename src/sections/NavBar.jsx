import React from 'react'
import { useState } from 'react';
import { navLinks } from '../constants/index';

export const NavBarItems = () => {
    return (
        <>
            <ul className='nav-ul'>
                <li className='nav-li text-grad-small'>
                    <a className='nav-li-a' href="/">Home</a>
                </li>
                <li className='nav-li text-grad-small'>
                    <a className='nav-li-a' href="/about">About</a>
                </li>
                <li className='nav-li text-grad-small'>
                    <a className='nav-li-a' href="/skills">Skills</a>
                </li>
                <li className='nav-li text-grad-small'>
                    <a className='nav-li-a' href="/projects">Projects</a>
                </li>
                <li className='nav-li text-grad-small'>
                    <a className='nav-li-a' href="/contact">Contact</a>
                </li>
            </ul>
        </>
    );
}


const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen((prevValue) => setIsOpen(!prevValue));
    return (
        <>
            <header className='fixed top-0 left-0 right-0 z-50 bg-black/90'>
                <div className="w-full mx-auto">
                    <div className='flex justify-between items-center py-5 mx-auto c-space'>
                        <a href="/" className='text-grad-small font-bold text-8xl hover:text-violet-600 transition-colors head-text'>
                            Sanket Mishra</a>
                        <button onClick={toggleMenu} className='text-slate-400 hover:text-violet-600 focus:outline-none sm:hidden flex' aria-label='toggle menu'>
                            <img src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'} alt="toggle" className='h-6 w-6' />
                        </button>
                        <nav className='sm:flex hidden sm:w-auto justify-end'>
                            <NavBarItems />
                        </nav>
                    </div>
                </div>
                <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                    <nav className='p-5'>
                        <NavBarItems />
                    </nav>
                </div>
            </header>
        </>
    )
}

export default NavBar
