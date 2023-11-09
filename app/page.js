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
import ScrollTrigger from 'gsap/ScrollTrigger';


export default function Home() {
  const areaChartRef = useRef(null);
  const matrimonio = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    matrimonio.current = gsap.timeline();

    matrimonio.current
        .fromTo(".matrimonios-caption", { opacity:0,y: 20}, { opacity:1, y:0,  duration:0.8, ease: "power1.inOut", delay:2})

    ScrollTrigger.create({
        trigger: ".matrimonios-chart-wrapper",      
        start: "top bottom", 
        end: "bottom top", 
        animation: matrimonio.current, 
        toggleActions: "play none none none", 
    });


  }, []);

  return (
    <div className="content">
      <CursorContextProvider>
    
        <div>        <Cover />      </div>

        <div>        <Piechart />       </div>
        <div className="area-chart-wrapper">
          <div className="fixed-content" >
            <AreaChart />
          </div>
        </div>
        <div className="porque-matrimonio"> ¿Por qué se elige el matrimonio? </div>
            <div className="porque-matrimonio-subtitle"> Beneficios frente a las uniones convivenciales </div>
           
        <div> <Vivienda /> </div>
        <div> <Adopcion /> </div>
        <div> <Salud /> </div>
        <div className="matrimonios-chart-wrapper">
          <div className="matrimonios-caption">A lo largo de los años es cada vez menor la brecha entre varones y mujeres que contraen matrimonio. </div>
          <div className="matrimonios-content" >
            <div className="matrimonios-title"> Matrimonios LGTBQ+ </div>
            <div className="matrimonios-subtitle"> su evolución histórica en la Ciudad de Buenos Aires </div>
            <div> <Matirmonioschart /> </div>
          </div>
        </div>

        <div> <Cierre/></div>
        <Cursor />

      </CursorContextProvider>
    </div>
  );
}