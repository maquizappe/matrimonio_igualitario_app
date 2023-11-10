"use client"
import React, { useEffect, useRef } from 'react';
import Cover from "./components/cover/cover";
import Piechart from "./components/piechart/piechart";
import AreaChart from "./components/ringschart/ringschart";
import CursorContextProvider from './components/cursor/CursorContextProvider';
import Cursor from './components/cursor/Cursor';
import Vivienda from './components/porquematrimonio/vivienda';
import Adopcion from './components/porquematrimonio/adopcion';
import Salud from './components/porquematrimonio/salud';
import Matirmonioschart from './components/matrimonioschart/matrimonioschart';
import Cierre from './components/cierre/cierre'
import "./page.css";
import { gsap } from 'gsap';



export default function Home() {
  const areaChartRef = useRef(null);
  const matrimonio = useRef();


  
  useEffect(() => {    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            matrimonioAnimation();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    if (matrimonio.current) {
      observer.observe(matrimonio.current);
    }

    return () => {
      if (tl.current) {
        observer.unobserve(matrimonio.current);
      }
    }
    
  }, []);

  const matrimonioAnimation = () => {
 gsap.fromTo(".matrimonios-caption", { opacity:0,y: -200}, { opacity:1, y:-250,  duration:1, ease: "power1.inOut", delay:1})
  }


  useEffect(() => {    const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          areaAnimation();
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 } // Adjust the threshold as needed
  );

  if (areaChartRef.current) {
    observer.observe(areaChartRef.current);
  }

  return () => {
    if (tl.current) {
      observer.unobserve(areaChartRef.current);
    }
  }
  
}, []);

const areaAnimation = () => {
gsap.fromTo(".area-caption", { opacity:0,y: -200}, { opacity:1, y:-250,  duration:1, ease: "power1.inOut", delay:3})
}

  return (
    <div className="content">
      <CursorContextProvider>
    
        <div>        <Cover />      </div>

        <div>        <Piechart />       </div>
        <div className="area-chart-wrapper" ref={areaChartRef}>
          <div className="fixed-content" >
          <div className="area-caption">A lo largo de los años es cada vez menor la brecha entre varones y mujeres que contraen matrimonio. </div>
      
                    <div className="area-title"> De la unión convivencial al matrimonio igualitario </div>
            <div className="area-subtitle"> Su evolución histórica en la Ciudad de Buenos Aires </div>
          <div className="areachart"> 
           <AreaChart />
            </div>
            
          </div>
        </div>
        <div className="porque-matrimonio"> ¿Por qué se elige el matrimonio? </div>
            <div className="porque-matrimonio-subtitle"> Beneficios frente a las uniones convivenciales </div>
           
        <div> <Vivienda /> </div>
        <div> <Adopcion /> </div>
        <div> <Salud /> </div>
        <div className="matrimonios-chart-wrapper" ref={matrimonio}>
          <div className="matrimonios-content" >
          <div className="matrimonios-caption">A lo largo de los años es cada vez menor la brecha entre varones y mujeres que contraen matrimonio. </div>
                   <div className="matrimonios-title"> Matrimonios LGTBQ+ </div>
            <div className="matrimonios-subtitle"> Su evolución histórica en la Ciudad de Buenos Aires </div>
            <div> <Matirmonioschart /> </div>
          </div>
        </div>

        <div> <Cierre/></div>
        <Cursor />

      </CursorContextProvider>
    </div>
  );
}