import React from 'react'
import { SectionWrapper } from '../hoc'
import { styles } from '../style'
import { motion } from 'framer-motion'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Socials() {
    return (
        <>
          <p className={styles.sectionSubText}>MY SOCIALS</p>
          <div className='w-full flex'>
            <motion.div className='mt-3 text-secondary text-[17px] max-w-3xl leading-[28px]'>
                You can also connect with me on my social media handles:
            </motion.div>
        </div>
          <div className="flex flex-wrap justify-between items-center w-[200px] max-w-3xl">
            <div
                onClick={() => window.open("https://www.facebook.com/anyassor.stanley.7", "_blank")}
            >
                <FacebookIcon fontSize='large' className="mx-1 my-6 cursor-pointer" />
            </div>
            <div
                onClick={() => window.open("https://www.instagram.com/anyax_xtanley/", "_blank")}
            >
                <InstagramIcon fontSize='large' className="mx-1 my-6 cursor-pointer" />
            </div>
            <div
                onClick={() => window.open("https://www.linkedin.com/in/anyassor-stanley/", "_blank")}
            >
                <LinkedInIcon fontSize='large' className="mx-1 my-6 cursor-pointer" />
            </div>
          </div>
        </>
      )
}

export default SectionWrapper(Socials)