import './app.scss'
import Test from './Test.jsx'
import Navbar from './components/navbar/Navbar.jsx';
import Hero from './components/hero/Hero.jsx';
import Parallax from './components/parallax/Parallax.jsx';
import Services from './components/services/Services.jsx';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Cursor from './components/cursor/Cursor';
import Footer from './components/footer/Footer';
import Skills from './components/skills/Skills.jsx';
import './app.scss'
const App = () => {
  
  return (
  <div>
  <Cursor/>
<section id="Homepage">
<Navbar/>
 <Hero />
 </section>
<section id="Introduction"><Parallax type="Introduction"/></section>
<section id="about"><Services></Services></section>
<section id="skills"><Skills></Skills></section>
<section id="portfolio"> <Parallax type="portfolio"/></section>
<Portfolio/>

<section id="contact">
  <Contact></Contact>
</section>


<Footer></Footer>
  </div>

  );
};

export default App;
