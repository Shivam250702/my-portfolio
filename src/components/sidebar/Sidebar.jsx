import React from 'react'
import './Sidebar.scss'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Links from './links/Links'
import ToggleButton from './toggleButton/ToggleButton'
const variants={
    open:{
        clipPath:"circle(1200px at 50px 50px )",
        transition:{

        },
    },
    closed:{
        clipPath:"circle(30px at 50px 50px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
             damping: 40,

        },
    },
};
const Sidebar = () => {
    const [open, setopen] = useState(false)
   
  return (
    <motion.div className='sidebar' animate={open?"open":"closed"}>
      <motion.div className="bg" variants={variants}>
        <Links></Links>
      </motion.div>
     <ToggleButton setopen={setopen}></ToggleButton>
    </motion.div>
  )
}

export default Sidebar
