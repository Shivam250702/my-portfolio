import React from 'react'
import { useState, } from 'react'
import {motion} from "framer-motion"
const test = () => {
  
const [open, setopen] = useState(false)

    const variants={
        visible:{opacity:1, x:1000,transition:{duration:2}},
        hidden:{opacity:0}
    }
  return (
    <div className='course'>
      <motion.div className="box" initial={{ opacity:0, scale:0.5}} transition={{duration: 2,delay: 2}} animate={open?"visible":"hidden"}>

      </motion.div>
      <button onClick={(prev)=>{return !prev}}> Click</button>
    </div>
  )
}

export default test
