"use client"
import React, { useEffect, useRef } from 'react';
import Cover from "./components/cover/cover";
import Piechart from "./components/piechart/piechart";
import AreaChart_2 from "./components/ringschart/ringschart_2";
import AreaChart from "./components/ringschart/ringschart";
import CursorContextProvider from './components/cursor/CursorContextProvider';
import Cursor from './components/cursor/Cursor';
import Vivienda from './components/porquematrimonio/vivienda';
import Adopcion from './components/porquematrimonio/adopcion';
import Salud from './components/porquematrimonio/salud';
import Matirmonioschart_2 from './components/matrimonioschart/matrimonioschart_2';
import Matirmonioschart_3 from './components/matrimonioschart/matrimonioschart_3';

import Cierre from './components/cierre/cierre'
import "./page.css";
import { gsap } from 'gsap';



export default function Home() {
  const areaChartRef = useRef(null);
  const matrimonio = useRef();
  const tl = useRef();


  
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
 gsap.fromTo(".matrimonios-caption-2", { opacity:0,y: 0}, { opacity:1, y:-40,  duration:1, ease: "power1.inOut", delay:3})

 
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
gsap.fromTo(".area-caption-2", { opacity:0,y: 0}, { opacity:1, y:-30,  duration:1, ease: "power1.inOut", delay:3})

}

  return (
    <div className="content">
      <CursorContextProvider>
    
        <div>        <Cover />      </div>

        <div>        <Piechart />       </div>
        <div className="area-chart-wrapper" ref={areaChartRef}>
          <div className="fixed-content" >
          <div className="area-caption">LGBTQ+ people prefer marriage to domestic partnership. In the year the law was passed, most of the spouses were over 50 years old, having managed to exercise this right after a lifetime of experience. </div>
      
            <div className="area-title"> From domestic partnership to same-sex marriage </div>
            <div className="area-subtitle"> Its historical evolution in the city of Buenos Aires </div>
          <div className="areachart"> 
           <AreaChart />
            </div>
            <div className='fake-areachart'>        <AreaChart_2 /></div>
            <div className="area-caption-2">LGBTQ+ people prefer marriage to domestic partnership. In the year the law was passed, most of the spouses were over 50 years old, having managed to exercise this right after a lifetime of experience. </div>
      
          </div>
        </div>

        <div className="component-matrimonio"> 
        <div className="porque-matrimonio"> Why get married? </div>
            <div className="porque-matrimonio-subtitle"> Benefits versus domestic partherships </div>
           
        <div> <Vivienda /> </div>
        <div> <Adopcion /> </div>
        <div> <Salud /> </div>
        </div>

        <div className="matrimonios-chart-wrapper" ref={matrimonio}>
          <div className="matrimonios-content" >
          <div className="matrimonios-caption">Over the years, the gap between men an women getting mattied has narrowed over. </div>
                   <div className="matrimonios-title"> LGTBQ+ Marriages </div>
            <div className="matrimonios-subtitle"> Its historical evolution in the city of Buenos Aires </div>
            <div className="matrimonio-chart"> <Matirmonioschart_2 /> </div>
            <div className='fake-areachart'>   <Matirmonioschart_3 /> </div>
            <div className="matrimonios-caption-2">Over the years, the gap between men an women getting mattied has narrowed over.</div>
         
          </div>
        </div>

       <div> <Cierre/></div> 
        <Cursor />

      </CursorContextProvider>
    </div>
  );
}
