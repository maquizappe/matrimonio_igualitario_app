import React, { useContext, useEffect, useState } from 'react';
import CursorContext from './CursorContext';
import useMousePosition from './useMousePosition';
import { isTouchDevice } from './touchDeviceDetector';

const Cursor = () => {
  if (isTouchDevice) {
    return null;
  }

  const { clientX, clientY } = useMousePosition();
  const [cursor] = useContext(CursorContext);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);
    document.body.addEventListener('mouseenter', handleMouseEnter);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        pointerEvents: 'none',
      }}
    >
      <svg
        width={50}
        height={50}
        viewBox="0 0 50 50"
        style={{
          position: 'absolute',
          pointerEvents: 'none',
          left: clientX,
          top: clientY,
          opacity: isVisible && clientX > 1 ? 1 : 0,
          transform: `translate(-50%, -50%) scale(${cursor.active ? 2.5 : 1})`,
          stroke: cursor.active ? 'transparent' : 'black',
          strokeWidth: 1,
          fill: cursor.active ? 'transparent' : 'black',
          transition: 'transform .2s ease-in-out',
        }}
      >
        <circle cx="15" cy="15" r="5" />
      </svg>
      {cursor.active && (
        <img
          src="./brides.png" // Use an absolute path to the image in the public folder
          alt="Custom Cursor"
          style={{
            position: 'absolute',
            left: clientX,
            top: clientY,          
            height: "170px",
          }}
        />
      )}
    </div>
  );
};

export default Cursor;
