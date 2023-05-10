import React from 'react'
import { certificates } from '../constants'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import { SectionWrapper } from '../hoc'
import { styles } from '../style'
import { fadeIn, textVariant } from '../utils/motion'

const CertificationCard = ({name, learnt, institution, image}) => {
    // implement a read more button
    const [readMore, setReadMore] = React.useState(false)

    const toggleReadMore = (value) => {
        setReadMore(value)
    }
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
                        className='text-white text-[18px] mt-3'
                    >{institution}.</p>
                    <p
                        className='text-white text-[20px] font-medium mt-3'
                    > {readMore ? learnt : learnt.slice(0, 100) + '...'}
                    {learnt.length > 1 && (
                        <span
                            className='text-secondary m1-1 text-[18px] cursor-pointer'
                            onClick={() => toggleReadMore(!readMore)}
                        >{readMore ? '  show less' : ' continue reading....'}</span>
                    )}
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