"use client"
import React, { useRef } from "react";
import Cover from "./components/cover/cover";
import Piechart from "./components/piechart/piechart";
import AreaChart from "./components/ringschart/ringschart";
import CursorContextProvider from './components/cursor/CursorContextProvider';
import Cursor from './components/cursor/Cursor';
import Vivienda from './components/porquematrimonio/vivienda';
import Adopcion from './components/porquematrimonio/adopcion';
import Salud from './components/porquematrimonio/salud';
import "./page.css";

export default function Home() {
  const areaChartRef = useRef(null);
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
       
        <div> <Vivienda /> </div>
        <div> <Adopcion /> </div>
        <div> <Salud /> </div>
        <Cursor />

      </CursorContextProvider>
    </div>
  );
}