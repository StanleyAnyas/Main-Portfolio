import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { services} from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const Ser = ({ index, title, icon }) => {
  return (
    <Tilt 
    className='xs:w-[250px] w-full'>

      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.80)}
        className='w-full green-pink-gradient p-[1px] rounded-[21px] shadow-card'
        >
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450
            }}
            className='bg-tertiary rounded-[21px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
          >
            <img src={icon} alt={title} className='w-17 h-17 object-contain' />
            <h3 className='text-white text-[20px] font-bold mt-5 text-center'>{title}</h3>
          </div>
        </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
      >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a Frontend Developer and Backend Developer.
        I'm passionate about building web applications and learning new 
        technologies. I'm experienced in TypeScript and JavaScript, and in frameworks 
        like React, Next.js, and Node.js. I'm also experienced in databases like MongoDB,
        PostgreSQL, and MySQL. I'm currently learning GraphQL and Golang.
        I'm a quick learner and I'm always looking for new opportunities to 
        learn and grow. I collaborate well and closely with client to create
        efficient, scalable, and user-friendly solutions that solves real-world problems.
      </motion.p>

      <div
        className="mt-20 flex flex-wrap gap-10"
      >
        {services.map((service, index) => (
          <Ser key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')