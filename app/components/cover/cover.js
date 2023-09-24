import './cover.css'
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import useCursorHandlers from '@/app/components/cursor/useCursorHandlers';

function Cover() {
  const cursorHandlers = useCursorHandlers();

  
  return (
    <div className="App"  {...cursorHandlers}>  
      <div className="contentcover">
        <div className="contentTile">
          <div className="title">Matrimonio</div>
          <div className="subtitle">Igualitario</div>
          <div className="caption">
            Argentina fue el primer país en América Latina en legalizar el matrimonio LGBTQ+ en 2010, siendo el décimo país en el mundo.
          </div>
        </div>
      </div>
     {/*  {cursorVisible && (
        <div className="cursor-follow" ref={cursor}>
          <img src="./brides.png" alt="brides" />
        </div>
      )} */}
    </div>
  );
}

export default Cover;

