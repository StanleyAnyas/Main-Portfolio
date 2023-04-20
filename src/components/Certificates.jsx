import React from 'react'
import { certificates } from '../constants'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import { SectionWrapper } from '../hoc'
import { styles } from '../style'
import { fadeIn, textVariant } from '../utils/motion'

const CertificationCard = ({name, learnt, institution, image}) => {
    return (
        <motion.div>
            <Tilt 
                options={{ max: 45, scale: 1, speed: 450 }}
                className='bg-tertiary p-6 rounded-2xl sm:w-[360px] w-full'>
                <div className='relative w-full h-[230px]'>
                    <img src={image} alt={name} 
                    className='w-full h-full object-cover rounded-2xl p-3' />
                </div>
                <div className='mt-4'>
                    <h3
                        className='text-white text-[25px] font-bold'>{name}</h3>
                    <p
                        className='text-secondary text-[18px] mt-3'
                    >{institution}</p>
                    <p className='text-white text-[20px] font-medium mt-3'>
                        {`Where I learnt => ${learnt}`}
                    </p>
                </div>
            </Tilt>
        </motion.div>
    )
}

function Certificates() {
  return (
    <>
        <motion.div>
            <p className={styles.sectionSubText}>MY CERTIFICATES</p>
            <h2 className={styles.sectionHeadText}>Certifications.</h2>
        </motion.div>

        <div className='w-full flex'>
            <motion.div className='mt-3 text-secondary text-[17px] max-w-3xl leading-[28px]'>
                Here are some the certifications i have acquired in my road of experience:
            </motion.div>
        </div>

        <div className='flex flex-wrap gap-6 mt-20'>
            {certificates.map((certificate, index) => (
                <CertificationCard key={`certificate-${index}`} index={index} {...certificate} />
            ))}
        </div>
    </>
  )
}

export default SectionWrapper(Certificates, "certificates")