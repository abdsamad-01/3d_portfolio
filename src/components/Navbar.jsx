import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../style'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'

const Navbar = () => {
    const [active, setActive] = useState('');

    return (
        <nav
            className={`
                ${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary
            `}
        >
            <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
                <Link 
                    to='/'
                    className='flex items-center gap-2'
                    onClick={() => {
                        setActive('')
                        window.scrollTo(0, 0)
                    }}
                >
                    <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
                    <p className='text-white cursor-pointer text-[15px] sm:block hidden font-bold'> Samad Musiliu </p>
                </Link>

                <ul className='list-none hidden sm:flex flex-row gap-10'>
                    {navLinks.map(link => (
                        <li 
                            className={`pb-1 ${active == link && 'text-red-200'} ${active == link && 'border-b-2 border-red-300'}`}
                            onClick={() => setActive(link)}
                            key={link.id}>
                            <a href={`#${link.id}`}> {link.title} </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar

