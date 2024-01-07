import React from 'react'
import './navbar.scss'
import { motion } from 'framer-motion'
import Sidebar from '../sidebar/Sidebar'
const Navbar = () => {
  return (
    <div className="navbar">
    {/*Sidebar */}
    <Sidebar></Sidebar>
      <div className="wrapper">
        <motion.span initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration: 0.5}}>PORTFOLIO</motion.span>
        <div className="social">
            <a href="https://www.linkedin.com/in/shivam-singh-1a8681243/"><img src='/linkedin.png' alt=''/></a>
            <a href="https://github.com/Shivam250702"><img src='/github.png' alt=''/></a>
            <a href="https://www.cloudskillsboost.google/public_profiles/9ccc1aaf-dc55-4e40-8df2-d354d7af0e20"><img src='/google.png' alt=''/></a>
            <a href="https://www.hackerrank.com/profile/shivamjazzy1221"><img src='/HackerRank.png' alt='' /></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
