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
import Matirmonioschart from './components/matrimonioschart/matrimonioschart';
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
         <div className="matrimonios-chart-wrapper">
          <div className="matrimonios-caption">En 2010, con la Ley de Matrimonio Igualitario, 786 parejas LGBTQ+ dieron el sí, marcando un descenso en las uniones convivenciales </div>
          <div className="matrimonios-content" >
          <div className="matrimonios-title"> Matrimonios LGTBQ+ </div>
        <div className="matrimonios-subtitle"> su evolución histórica en la Ciudad de Buenos Aires </div>
       
            <div> <Matirmonioschart /> </div>
          </div>
        </div>
        <Cursor />

      </CursorContextProvider>
    </div>
  );
}