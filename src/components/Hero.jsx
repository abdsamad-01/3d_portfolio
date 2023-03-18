import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { ComputersCanvas } from './canvas'

const Hero = () => {
    return (
        <section className='relative w-full h-screen mx-auto'>
            <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl flex flex-row items-start gap-5`}>
                <div className='flex flex-col justify-center items-center mt-5'>
                    <div className='w-5 h-5 rounded-full bg-[#915eff]' />
                    <div className='w-1 sm:h-80 h-40 violet-gradient' />
                </div>  

                <div>
                    <h1 className={`${styles.heroHeadText} text-white hero-text`}> Hi, I'm <span className='text-[#915eff] hero-text'> Samad </span> </h1>
                    <p className={`mt-5 ${styles.heroSubText}`}> I develop 3D Visuals, user <br className='sm:block hidden' /> interfaces and Web Applications </p>
                </div>
            </div>

            <ComputersCanvas />
        </section>
    )
}

export default Hero

