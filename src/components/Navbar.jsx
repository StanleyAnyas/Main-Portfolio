import { Link } from 'react-router-dom'
import React, {useEffect, useState} from 'react'
import { styles } from '../style'
import { navLinks } from '../constants'
import { logo3, menu, close } from '../assets'

const Navbar = () => {
  const [active, setActive] = useState("")
  const [show, setShow] = useState(false)
  return (
    <nav className={`${styles.paddingX} w-full items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="flex justify-between items-center w-full max-w-7x1 mx-auto">
        <Link to="/" className='flex items-center gap-2' onClick={
          () => {
            setActive("")
            window.scrollTo(0, 0)
          }} >
            <img src={logo3} alt="logo" className="w-9 h-9 object-contain" />
            <p className="text-[18px] font-bold cursor-pointer text-white flex">
              <span className='sm:block hidden' >Stanley Anyas</span>
            </p>
        </Link>
        <ul className="sm:flex hidden flex-row gap-10 list-none">
          {navLinks.map((link) => (
            <li key={link.id} className={`{ active === link.title ? 'text-white' : 'text-secondary' } hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`} > {link.title} </a>
            </li>
          ))}
        </ul> 
        <div className="sm:hidden flex flex-1 gap-10 justify-end items-center">
          <img src={show ? close : menu}  alt="menu" className="w-[30px] h-[30px] object-contain cursor-pointer" onClick={() => setShow(!show)} />
          <div className={`${!show ? 'hidden' : 'flex'} absolute top-20 right-0 mx-4 my-2 p-6 black-gradient min-w[140px] z-10 rounded-xl `}>
            <ul className="flex justify-end items-start flex-col gap-4 list-none">
              {navLinks.map((link) => (
                <li key={link.id} className={`{ active === link.title ? 'text-white' : 'text-secondary' } font-medium font-poppins cursor-pointer text-[18px]`}
                onClick={() => {
                  setShow(!show)
                  setActive(link.title)
                }}
                >
                  <a href={`#${link.id}`} > {link.title} </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar