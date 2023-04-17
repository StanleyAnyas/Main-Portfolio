import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { experiences } from '../constants'
import { SectionWrapper } from '../hoc'
import { textVariant } from '../utils/motion'

const ExperienceCard = ({ experiences }) => (
    <VerticalTimelineElement
      contentStyle={{ background: 'rgb(33, 37, 41)', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 37, 41)' }}
      date={experiences.date}
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experiences.title}</h3>
      </div>
    </VerticalTimelineElement>
  )

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Experience</p>
        <h2 className={styles.sectionHeadText}>My Journey.</h2>
      </motion.div>

      <div>
        <VerticalTimeline>
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experiences={exp} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, 'experiences')