import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'
import { testimonials } from '../constants'

const FeedbacksCard = ({ index, testimonial, name, designation, image, company}) => {
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-100 rounded-3xl p-10 xs:w-[300px] w-full'
  >
    <p className='text-white font-black text-[48px]'>"</p>
    <div
      className='mt-1'
    >
      <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

      <div
        className='mt-7 flex items-center gap-1 justify-between'
      >
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>{designation} of {company}</p>
        </div>
      </div>
    </div>
  </motion.div>
}


const Feedbacks = () => {
  return (
    <div
      className='mt-12 bg-black-100 rounded-[20px] '
    >
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <motion.div
          variants={textVariant()}
        >
          <p
            className={styles.sectionSubText}
          >
            What people say about me
          </p>
          <h2
            className={styles.sectionHeadText}
          >
            Testimonials
          </h2>
        </motion.div>
      </div>
      <div
        className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}
      >
        {testimonials.map((testimonial, index) => (
          <FeedbacksCard
            key={testimonial.name}
            {...testimonial}
            index={index} />
        ))}
      </div>
    
    </div>
  )
}

export default SectionWrapper(Feedbacks, "")