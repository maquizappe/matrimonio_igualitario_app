import './cover.css'
import React, { useRef, useState, useEffect } from "react";
import useCursorHandlers from '@/app/components/cursor/useCursorHandlers'; 
import gsap from 'gsap';



function Cover() {
  const cursorHandlers = useCursorHandlers(); 

  const handleImageTransition = () => {
    const timeline = gsap.timeline({
      onComplete: () => {
        // Restart the animation when it completes
        timeline.restart();
      },
    });

    // Set initial properties
    timeline.set('.groomes', { visibility: 'hidden', zIndex: 2 });
    
    // Add animation to switch between brides and groomes
    timeline
      .set('.brides', { visibility: 'visible', zIndex: 1 })
      .to('.brides', { visibility: 'hidden', duration: 2, delay: 1 })
      .set('.groomes', { visibility: 'visible' }, '-=2');
  };


  useEffect(() => {
    handleImageTransition();
  }, []);
  return (
    <div className="App"  {...cursorHandlers} > 
      <div  className="Margintop">  </div> 
      <div className="contentcover">      
        <div className="contentTile">
          <div className="title">Matrimonio</div>
          <div className="subtitle">Igualitario</div>
          <div className="caption">
          En un contexto en el que se cuestiona la importancia de ciertos derechos adquiridos, ofrecemos un analisis sobre la evolución e impacto del matrimonio igualitario. Una conquista pionera a nivel latinoamericano y de vanguarida mundial.
          </div>
        </div>
      </div>
      <div className="images"> 
      <div className="brides">
                <img src="./brides.png" alt="brides" />
            </div>

            <div className="groomes">
                <img src="./boys.png" alt="boys" />
            </div>      
        </div>

        </div>
    
  );
}

export default Cover;

