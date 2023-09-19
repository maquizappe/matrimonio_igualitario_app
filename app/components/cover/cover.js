"use client"
import './cover.css'
import React, { useRef, useEffect  } from 'react';
import { gsap } from 'gsap';

function Cover() {
  let cursor = useRef(null);

  const posX = useRef(0);
  const posY = useRef(0);
  const mouseX = useRef(0);
  const mouseY = useRef(0);

  useEffect(() => {
    let tl = gsap.timeline();
    tl.to({}, 0.016, {
      repeat: -1,
      onRepeat: function () {
        posX.current += (mouseX.current - posX.current) / 10;
        posY.current += (mouseY.current - posY.current) / 10;
        tl.set(cursor.current, {
          css: {
            left: posX.current - 50,
            top: posY.current - 50,
          },
        });
      },
    });

    document.addEventListener('mousemove', function (e) {
      mouseX.current = e.pageX;
      mouseY.current = e.pageY;
    });
  }, []);

  return (
    <div className="App">
    <div className="content" ref={(el) => (el)}>
    <div className="contentTile"> 
  <div className="title">Matrimonio</div>
  <div className="subtitle">Igualitario</div>
  <div className="caption">
    Argentina fue el primer país en América Latina en legalizar el matrimonio LGBTQ+ en 2010, siendo el décimo país en el mundo en hacerlo.
  </div>
  </div>
    </div>
    <div className="cursor-follow" ref={cursor}></div>
    <style>
    
    </style>
  </div>
 
  );
}
export default Cover;
