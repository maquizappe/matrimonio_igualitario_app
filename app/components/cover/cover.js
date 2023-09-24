import './cover.css'
import React, { useRef, useState } from "react";
/* import useCursorHandlers from '@/app/components/cursor/useCursorHandlers'; */

function Cover() {
/*   const cursorHandlers = useCursorHandlers(); */

  return (
    <div className="App" /*  {...cursorHandlers} */>  
      <div className="contentcover">
        <div className="contentTile">
          <div className="title">Matrimonio</div>
          <div className="subtitle">Igualitario</div>
          <div className="caption">
            Argentina fue el primer país en América Latina en legalizar el matrimonio LGBTQ+ en 2010, siendo el décimo país en el mundo.
          </div>
        </div>
      </div>
        </div>
  );
}

export default Cover;

