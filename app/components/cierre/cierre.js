import './cierre.css'
import React, { useEffect, useRef } from 'react';
import { motion, Variants } from "framer-motion"
import { gsap } from 'gsap';



function Cierre() {
    const cierre_tl = useRef();

    useEffect(() => {    const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
                cierreAnimation();
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 } // Adjust the threshold as needed
      );
  
      if (cierre_tl.current) {
        observer.observe(cierre_tl.current);
      }
  
      return () => {
        if (tl.current) {
          observer.unobserve(cierre_tl.current);
        }
      }
      
    }, []);
  
    const cierreAnimation = () => {
    gsap.fromTo(".cierreComponent", { opacity:0}, { opacity:1})
   gsap.fromTo(".cierre-imagen-1", { opacity:0,y: 60}, { opacity:1, y:0,  duration:0.8, ease: "power1.inOut"})
   gsap.fromTo(".cierre-imagen-2", { opacity:0,y: 60}, { opacity:1, y:0,  duration:0.8, ease: "power1.inOut", delay:0.4})
   gsap.fromTo(".cierre-imagen-3", { opacity:0,y: 60}, { opacity:1, y:0,  duration:0.8, ease: "power1.inOut", delay:0.9})
   gsap.fromTo(".cierre-imagen-4", { opacity:0,y: 60}, { opacity:1, y:0,  duration:0.8, ease: "power1.inOut", delay:1.3})
   gsap.fromTo(".cierre-title", { opacity:0,x: -30}, { opacity:1, x:0,  duration:0.8, ease: "power1.inOut", delay:1.6})
   gsap.fromTo(".cierre-caption", { opacity:0,x: -30}, { opacity:1, x:0,  duration:0.8, ease: "power1.inOut", delay:1.8})

}



    return (
        <div className="cierreComponent ">

            <div
                className="cierre-title"
            
            >
                Vamos por más derechos
            </div>
            <div className="cierre-caption"
            
            >Es evidente que una sociedad más igualitaria es beneficios para todos/as. Es importante proteger los derechos conquistarlos, y cuestionarlos solo para ampliarlos y mejorarlos. </div>

            <div className="cierre-imagen-component"  ref={cierre_tl}>
                <div className="cierre-imagen-1" >
                    <img src="./casita.png" alt="casita" />
                </div>
                <div className="cierre-imagen-2" >
                    <img src="./casita.png" alt="casita" />
                </div>
                <div className="cierre-imagen-3" >
                    <img src="./casita.png" alt="casita" />
                </div>
                <div className="cierre-imagen-4" >
                    <img src="./casita.png" alt="casita" />
                </div>
            </div>
        </div>
    );
}

export default Cierre;