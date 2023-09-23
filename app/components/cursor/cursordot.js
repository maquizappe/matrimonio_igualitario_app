import './cursordot.css'
import React, { useEffect } from 'react';

function CursorDot() {
  useEffect(() => {
    function handleMousemove(e) {
      const cursorDot = document.querySelector(".cursordot");
      const posX = e.clientX;
      const posY = e.clientY;

      cursorDot.style.left = `${posX}px`;
      cursorDot.style.top = `${posY}px`;
    }

    window.addEventListener("mousemove", handleMousemove);

    return () => {
      window.removeEventListener("mousemove", handleMousemove);
    };
  }, []);

  return <div className="cursordot"></div>;
}

export default CursorDot;