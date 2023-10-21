import './cierre.css'
import React from "react";

function Cierre() {

    return (
        <div className="cierreComponent">
                
                    <div className="cierre-title">Vamos por más derechos</div>
                   <div className="cierre-caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </div>
               
            <div className="cierre-imagen-component"> 
            <div className="cierre-imagen-1">
                <img src="./casita.png" alt="casita" />
            </div>
            <div className="cierre-imagen-2">
                <img src="./casita.png" alt="casita" />
            </div>
            <div className="cierre-imagen-3">
                <img src="./casita.png" alt="casita" />
            </div>
            <div className="cierre-imagen-4">
                <img src="./casita.png" alt="casita" />
            </div>
            </div>
        </div>
    );
}

export default Cierre;