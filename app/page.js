"use client"
import React, { useRef } from "react";
import Cover from "./components/cover/cover";
import Piechart from "./components/piechart/piechart";
import AreaChart from "./components/ringschart/ringschart"
import "./page.css";

export default function Home() {
  const areaChartRef = useRef(null);
  return (
    <div className="content">
      <div>        <Cover />      </div>

      <div>        <Piechart />       </div>

      <div ref={areaChartRef}> <AreaChart/> </div>
    </div>
  );
}