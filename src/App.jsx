import './App.css'
import Discover from './components/Discover'
import Hero from './components/Hero'
import Magic from './components/Magic'
import Nav from './components/Nav'
// import { SmoothScroll } from './components/SmoothScroll'
import Spellbook from './components/Spellbook'
// import Sphere from './components/Sphere'
import Parallax from './components/Parallax'
import Services from './components/Services'
import Spwl from './components/Spwl'
import Contact from './components/Contact'
import { motion, useScroll } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Lenis from '@studio-freight/lenis';
import Card from './components/Card'
import { services } from './services'





function App() {
  useEffect(() => {
    if (window.innerWidth >= 1024) { // Enable smooth scroll only for desktop
      const lenis = new Lenis({
        duration: 4.2,   // Set the smooth scrolling duration
        smooth: true,    // Enable smooth scrolling
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      return () => {
        lenis.destroy(); // Clean up on component unmount
      };
    }
  }, []);
  
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePos({
        x: e.clientX,
        y: e.clientY
      });
    };

    if (window.innerWidth >= 1024) {
      window.addEventListener("mousemove", mouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePos.x - 7.7,
      y: mousePos.y - 7.7
    }
  };

  const variants2 = {
    default2: {
      x: mousePos.x,
      y: mousePos.y
    }
  };

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <>
      <div className="smooth-wrapper">
        <div className="smooth-content">
          
          {window.innerWidth >= 1024 && (
            <>
              <motion.div 
                className='cursor'
                variants={variants}
                animate="default"
              />
              <motion.div 
                className='cursor2'
                variants={variants2}
                animate="default2"
              />
            </>
          )}

          <Magic />
          <Spellbook />
          <Spwl />
          <Discover />
          <Spwl />
          <Parallax />

          <div className="cc" ref={container}>
            <p className='cshead'>Our services</p>
            {services.map((service, index) => {
              const targetScale = 1 - ((services.length - index) * 0.08);
              return (
                <Card 
                  key={index} 
                  i={index} 
                  {...service} 
                  progress={scrollYProgress} 
                  range={[index * 0.25, 1]} 
                  targetScale={targetScale} 
                />
              );
            })}
          </div>

          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
