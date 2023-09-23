"use client"
import React from "react";
import Cover from "./components/cover/cover";
import Piechart from "./components/piechart/piechart";
import AreaChart from "./components/ringschart/ringschart"
import "./page.css";

export default function Home() {
  return (
    <div className="content">
      <div>        <Cover />      </div>

      <div>        <Piechart />       </div>

      <div> <AreaChart/> </div>
    </div>
  );
}