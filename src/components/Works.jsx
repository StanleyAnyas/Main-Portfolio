import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import { SectionWrapper } from '../hoc'
import { styles } from '../style'
import { github } from '../assets'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'


const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  
  return (
    <motion.div
      // variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    >
      <Tilt 
        options={{ max: 45, scale: 1, speed: 450 }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'>
        <div className='relative w-full h-[230px]'>
          <img src={image} alt={name} 
          className='w-full h-full object-cover rounded-2xl' />
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient rounded-full flex justify-center items-center cursor-pointer w-10 h-10'
            >
              <img src={github} alt='github' className='w-1/2 h-1/2 object-contain' />
            </div>
          </div>
        </div>
        <div className='mt-5'>
          <h3
            className='text-white text-[25px] font-bold'>{name}</h3>
          <p
            className='text-secondary text-[15px] mt-3'
          >{description}</p>
        </div>

        <div className='flex flex-wrap gap-2 mt-3'>
          {tags.map((tag) => (
            <p 
              key={tag.name} 
              className={`text-[15px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div 
        // variants={textVariant()}
      >
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          // variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following are some of the projects I have worked on. 
          I have also worked on some other projects which are not listed here.
          Each project is briefly described below with a link to the code repository.
          It reflects my skills and experience in the field and ability to solve problems,
          work with different technologies and deliver quality products.
          This are not all the projects I have worked on, but some of them.
        </motion.p>
      </div>
      {/* look at the w-full */}
      <div className='flex flex-wrap gap-7 mt-20'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, 'work')