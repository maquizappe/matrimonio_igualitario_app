import './cover.css'
import React, { useRef, useState } from "react";
import useCursorHandlers from '@/app/components/cursor/useCursorHandlers'; 

function Cover() {
 const cursorHandlers = useCursorHandlers(); 

  return (
    <div className="App"  {...cursorHandlers} > 
      <div  className="Margintop">  </div> 
      <div className="contentcover">      
        <div className="contentTile">
          <div className="title">Matrimonio</div>
          <div className="subtitle">Igualitario</div>
          <div className="caption">
          En un contexto en el que se cuestiona la importancia de ciertos derechos adquiridos, ofrecemos una analisis sobre la evolución e impacto del matrimonio igualitario. Una conquista pionera a nivel latinoamericano y de vanguarida mundial.
          </div>
        </div>
      </div>
        </div>
  );
}

export default Cover;

