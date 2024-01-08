import React from 'react'
import './Skills.css'
 import Github from "./Github";
const Skills = () => {
  return (
    <>
    <h1 className="b2"><center>SKILLS</center></h1>
    <div className="container" id="skills">
      <div className="stack-container">
        <img alt="Tech1" src="/Tech1.png"></img>
        <h1 className="b3">Tech Stack</h1>
      </div>
      <div className="icon-container b3">
        <img alt="C" src="/C.png"></img>
        <img alt="C++" src="/C++.png"></img>
        <img alt="Html" src="/HTML.png"></img>
        <img alt="CSS" src="/CSS.png"></img>
        <img alt="Bootstrap" src="/bootstrap.png"></img>
        <img alt="TailWindCSS" src="/tailwindcss.png"></img>
        <img alt="Javascript" src="/javascript.png"></img>
        <img alt="ReactJs" src="/React.png"></img>
        <img alt="Redux" src="/Redux.png"></img>
        <img alt="Git" src="/Git.png"></img>
        <img alt="Github" src="/github (1).png"></img>
        <img alt="Node" src='/node.png'></img>
        <img alt="Express" src="/express.png"></img>
        <img alt="Postgres" src="/postgres.png"></img>
        <img alt="MySql" src="/mysql.png"></img>
        <img alt="Mongodb" src="/mongodb.png"></img>
        <img alt="Postman" src="/postman.png"></img>
        <img alt="ThunderClint" src="/Thunder Clint.png"></img>
        <img alt="Markdown" src="/MarkDown.png"></img>
        <img alt="Vercel" src="/Vercel.png"></img>
      </div>

      <div className="b1">
    <center>
    
    <Github/>
    </center>   


      </div>
    </div>
  </>
  )
}

export default Skills
