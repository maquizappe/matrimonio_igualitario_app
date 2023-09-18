import React, {useRef, useEffect} from 'react';
import './stylecover.css';
import {gsap} from 'gsap';
function Cover() {
let tl = gsap.timeline();
let cursor = useRef(null);
let h1 = useRef(null);
let posX = 0;
let posY = 0;
let mouseX = 0;
let mouseY = 0;
useEffect(() => {
  tl.to({},0.016,{
    repeat: -1,
    onRepeat: function(){
      posX += (mouseX-posX) / 10;
      posY += (mouseY-posY) / 10;
      tl.set(cursor,{
        css: {
          left: posX - 50,
          top: posY - 50,
        }
      })
    }
  })
  document.addEventListener("mousemove", function(e){
    mouseX = e.pageX;
    mouseY = e.pageY;

  })
  /* tl2.from(h1.children,{
    skewY: 8,
    y: 100,
    duration: 1,
    delay: .3,
    opacity: 0,
    stagger: {
      each: .4,
      from: "end"
    }
  })
  tl2.from(cursor,{
    duration: 1.5,
    delay: 1,
    opacity: 0
  },"-=1") */
})
return (
  <div className="App">
  <div className="content" ref={(el) => (h1 = el)}>
    <div className="contentTile"> 
    <div className="title">Matrimonio</div>
    <div className="subtitle">Igualitario</div>
    <div className="caption">
      Argentina fue el primer país en América Latina en legalizar el matrimonio LGBTQ+ en 2010, siendo el décimo país en el mundo en hacerlo.
    </div>
    </div>
  </div>
  <div className="cursor-follow" ref={(el) => (cursor = el)}></div>
</div>
);
}
  
  export default Cover;