import './piechart.css';
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

function Piechart() {
  /*  const cursor = useRef(null);
   const animation = useRef(null); // Reference to the GSAP animation instance
 
   const posX = useRef(0);
   const posY = useRef(0);
   const mouseX = useRef(0);
   const mouseY = useRef(0);
   
   const [cursorVisible, setCursorVisible] = useState(true);
   const [cursorImage, setCursorImage] = useState("./dot.png");
 
   useEffect(() => {
     animation.current = gsap.timeline();
     animation.current.to({}, 0.016, {
       repeat: -1,
       onRepeat: function () {
         posX.current += (mouseX.current - posX.current) / 10;
         posY.current += (mouseY.current - posY.current) / 10;
         animation.current.set(cursor.current, {
           css: {
             left: posX.current - 50,
             top: posY.current - 50,
           },
         });
 
         const pieElement = document.querySelector(".Piesection");
         if (pieElement) {
           const pieRect = pieElement.getBoundingClientRect();
           if (
             mouseX.current >= pieRect.left &&
             mouseX.current <= pieRect.right &&
             mouseY.current >= pieRect.top &&
             mouseY.current <= pieRect.bottom
           ) {
             setCursorVisible(true);
             setCursorImage("./dot.png");
           } else {
             setCursorVisible(false);
           }
         }
       },
     });
 
     document.addEventListener("mousemove", function (e) {
       mouseX.current = e.pageX;
       mouseY.current = e.pageY;
     });
 
     // Clean up the animation when the component unmounts
     return () => {
       if (animation.current) {
         animation.current.kill(); // Cancel the animation
       }
     };
   }, []);
  */
  return (
    <div className="Piesection">
      <div className="pie">
        <img src="./pie.png" alt="pie" />
      </div>


      <div className="referenceSection">
        <div className="lines">
          <div className='groupline1'>

            <div className="dot">  </div>
            <div className='year'>2010</div>
            <div className='value'>786</div>
            <div className="line"> </div>
          </div>

          <div className='groupline2'>
            <div className="dot">  </div>
            <div className='year'>2014</div>
            <div className='value2'>870</div>
            <div className="line2"> </div>
          </div>
          <div className='groupline3'>
            <div className="dot">  </div>
            <div className='year'>2018</div>
            <div className='value3'>1.038</div>
            <div className="line3"> </div>
          </div>
          <div className='groupline4'>
            <div className="dot">  </div>
            <div className='year'>2022</div>
            <div className='value4'>1.720</div>
            <div className="line4"> </div>
          </div>
        </div>
      </div>

      <div  className="text"> Argentina fue el primer país en América Latina en legalizar el matrimonio LGBTQ+ en 2010, 
</div>

      {/*   {cursorVisible && (
        <div className="cursor-follow-pie" ref={cursor}>
          <img src={cursorImage} alt="dot" />
        </div>
      )} */}
    </div>
  );
}

export default Piechart;
