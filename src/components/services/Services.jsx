import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";
import about from '/about.png'
// import Github from "./Github";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="Introduction"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          About Section
         
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
    
          <h1>
            <motion.b whileHover={{color:"orange"}}><u>ABOUT ME</u></motion.b> 
          </h1>
        </div>
        
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
      <img src={about} alt="about" className="img-fluid"  />
      <h2> Hi Everyone, I am Shivam Singh from Bihar, India   <br /> I am a 3rd year student pursuing an Integrated MTech (IPG-MTECH)
            in Information Technology at IIITM Gwalior.
            <br />
          
            <br />
            
            
            Apart from coding, some other activities that I love to do!
            <br/>
            <br/>
            <ul>
            <li className="about-activity">
          Playing Games
            </li>
            <li className="about-activity">
              Listening Music
            </li>
            <li className="about-activity">
             Travelling
            </li>
          </ul>
          <p style={{ color: "rgb(155 126 172)" }}>
          <br/>
            "Strive to build things that make a difference!"{" "}
          </p>
          {/* <Github/> */}
            </h2>
 
          
      
      </motion.div>
    </motion.div>
    
  );
};

export default Services;