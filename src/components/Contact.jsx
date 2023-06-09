import React from 'react'
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../style'
import { slideIn } from '../utils/motion'
import { SectionWrapper } from '../hoc'
import EarthCanvas from './canvas/Earth'

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
    file: '',
  })
  const formRef = useRef()
  const [loading, setLoading] = useState(false)
  const [file, setFile] = useState(null)

  const handleFileChange = (e) => {
    e.preventDefault()
    setFile(e.target.files[0])
    setForm({
      ...form,
      file: e.target.files[0],
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleFileUpload = (e) => {
    e.preventDefault()
    if(!file){
      alert('Please select a file')
      return
    }
    const formData = new FormData()
    formData.append('file', file)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      alert('Please fill in all the required fields')
      return
    }else if(!form.email.includes('@')){
      alert('Please enter a valid email address')
      return
    }else{
    setLoading(true)
    emailjs.send(
      'service_8a6i4he',
      'template_jha15q1', 
      {
      form_name: form.name,
      to_name: 'Stanley Anyas',
      from_email: form.email,
      message: form.message,
      file: form.file,
      to_email: 'anyassorstanley@gmail.com',
    }, 
    '00cnxZY9BRdz_pwJ8'
    )
    .then((result) => {
      setLoading(false)
      alert('Message sent, I will get back to you shortly. Thank you!')
      formRef.current.reset()
    }, (error) => {
      setLoading(false)
      console.log(error)
      alert('Message not sent, please try again')
      console.log(error.text)
    })
  }
  setForm({
    name: '',
    email: '',
    message: '',
    file: '',
  })
  setFile(null)
  }
  return (
    <div
      className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-8 overflow-hidden"
    >
      <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>
          Get in touch with me via email. I'm always open to
          discussing new projects, creative ideas or opportunities to be part of
          your visions.
        </p>
        <h3 className={styles.sectionHeadText}>
          Contact.
        </h3>
        <p>
          Fields with <span className=" text-red-700"> * </span> are required
        </p>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className='flex flex-col'>
            <span className="text-white font-medium mb-4">Name <span className=" text-red-700"> * </span></span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder='Your name'
              className="bg-tertiary py-4 px-6 placeholder-text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className='flex flex-col'>
            <span className="text-white font-medium mb-4">Email <span className=" text-red-700"> * </span></span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder='Your email'
              className="bg-tertiary py-4 px-6 placeholder-text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className='flex flex-col'>
            <span className="text-white font-medium mb-4">Your message <span className=" text-red-700"> * </span></span>
            <textarea
              rows="8"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to talk about?"
              className="bg-tertiary py-4 px-6 placeholder-text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className='flex flex-col'>
            <span className="text-white font-medium mb-4">Upload file</span>
            <input
              type="file"
              name="file"
              className="bg-tertiary py-4 px-6 placeholder-text-secondary text-white rounded-lg outline-none border-none font-medium"
              onChange={handleFileChange}
            />
            <button
              type="button"
              className="bg-white py-2 px-4 outline-none w-fit text-tertiary font-medium shadow-md shadow-primary rounded-xl mt-4"
              onClick={handleFileUpload}
            >
              Upload
            </button>
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn('right', "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')