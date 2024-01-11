import React from 'react'
import './hero.scss'
import { motion } from 'framer-motion'
const textVairants={
  initial:{
    x:-500,
    opacity:0,
  },
  animate:{
    x: 0,
    opacity:1,
    transition:{
      duration:1,
      staggerChildren:0.1
    },
  },
  scrollButton:{
    opacity:0,
    y:10,
    transition:{
      duration:2,
      repeat:Infinity,
    }
  },
}
const sliderVairants={
  initial:{
    x:0,
    
  },
  animate:{
    x: "-220%",
   
    transition:{
      repeat:Infinity,
      repeatType:"mirror",
      duration:20,
     
    },
  },
  };
const hero = () => {
  return (
    <div className='hero'> 
    
    <div className="wrapper">
    
    <motion.div className="textContainer" variants={textVairants} initial="initial" animate="animate">
      <motion.h2 className='t2' variants={textVairants}>Shivam Singh</motion.h2>
      <motion.h1 variants={textVairants}>Web Devloper and Competitive Programmer</motion.h1>
      <motion.div variants={textVairants} className="buttons">
        <motion.button variants={textVairants}> See the Latest Works</motion.button>
        <motion.button variants={textVairants}> Contact Me</motion.button>
      </motion.div>
      <motion.img variants={textVairants} animate="scrollButton" src='./scroll.png'></motion.img>
    </motion.div>
    </div>
<motion.div className="slidingTextContainer" variants={sliderVairants} initial="initial" animate="animate">
 WEB DEVELOPER COMPETITIVE PROGRAMMER
 
</motion.div>
    
    <div className="imageContainer">
    
        <img className="s3" src="./pic.jpeg" alt="" />
    </div>
   
    </div>
  )
}

export default hero
