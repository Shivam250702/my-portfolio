import { useRef } from "react";
import "./protfolio.scss";
import { color, motion, useScroll, useSpring, useTransform } from "framer-motion";
import Github from "../skills/Github";
const items = [
  {
    id: 1,
    title: "E Commerce-APP",
    img: "/public/Ecommerce.png",
    desc: "This e-commerce web project serves as a platform for online retail, providing users with a seamless and secure shopping experience. Users can explore a diverse catalog of products through an intuitive and responsive ReactJS-based frontend. NodeMailer facilitates communication by sending transactional emails, such as order confirmations and updates",
    site:  "https://ecombackend-c4u1.vercel.app/"
  },
  {
    id: 2,
    title: "Movie-APP",
    img: "./Movie-App.png",
    desc: "MovieExplorer is a modern and user-friendly website that leverages the power of the Movie Database (TMDb) API to provide users with a comprehensive and immersive movie browsing experience. Built with the latest web development technologies, including VITE, SASS, and React, MovieExplorer offers a seamless and visually appealing platform for movie enthusiasts to discover, explore, and learn more about their favorite films.",
    site:  "https://64fc9ad2ea09c403c1237a66--famous-puffpuff-8f2a4d.netlify.app/"
  },
  {
    id: 3,
    title: "CryptoAdmirer",
    img: "/CryptoAdmirer.png",
    desc: "Crypto-Admirer is a comprehensive online platform that caters to cryptocurrency enthusiasts, providing a wealth of resources, news, and insights. Users can stay up-to-date with the latest developments, explore various crypto projects, and engage in a vibrant community of like-minded individuals.",
    site:   "https://crypto-admirer.netlify.app/"
  },
  {
    id: 4,
    title: "NewsBlaze",
    img: "/NewsBlaze.png",
    desc: "NewsMonkey is a web application built with modern technologies that allow users to stay updated with the latest tech news. The app fetches news articles from multiple sources and presents them in an intuitive and user-friendly interface.",
    site:  "https://github.com/Shivam250702/newsmonkey" 
  },
  {
    id: 5,
    title: "TodoList",
    img: "/TodoList.png",
    desc: "The To-Do List Project is a comprehensive task management application designed to help individuals and teams organize, prioritize, and track their daily activities efficiently.",
    site: "https://todolistuni.netlify.app/"  
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
           <a href={item.site}> <button  className="lal">See Demo</button>
           </a>
        
          </motion.div>
          
        </div>
        
      </div>
      
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
    
      <div className="progress">
      
        <h1>Featured Works</h1>
        
        <motion.div style={{ scaleX }} className="progressBar"> </motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
        
      ))}
      
    </div>
    
  );
};

export default Portfolio;
