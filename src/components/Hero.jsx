import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { ComputersCanvas } from './canvas'


const Hero = () => {
  return (
   <section className="relative z-0 mx-auto h-screen w-full">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] mx-auto flex flex-row items-start gap-5`} >
        <div className="flex flex-col items-center justify-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#f2ff5e]" />
          <div className="w-1 sm:h-80 h-40 bg-[#f2ff5e]"/>
          <div className="w-5 h-5 rounded-full bg-[#f2ff5e]" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi there, I'm <span className="text-[#f2ff5e]">Stanley</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a <span className="text-[#f2ff5e]">Frontend Developer</span> and <br className='sm:block hidden' /> <span className="text-[#f2ff5e]">Backend Developer</span>
          </p>
        </div>
      </div>
      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div 
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
   </section>
  )
}

export default Hero