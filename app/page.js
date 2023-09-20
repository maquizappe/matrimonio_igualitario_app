"use client"
import React from "react";
import Cover from "./components/cover/cover";
import Piechart from "./components/piechart/piechart";
import "./page.css";

export default function Home() {
  return (
    <div className="content">
      <div>        <Cover />      </div>

      <div>        <Piechart />       </div>
    </div>
  );
}