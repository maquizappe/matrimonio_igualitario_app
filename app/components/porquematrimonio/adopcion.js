import './adopcion.css'
import React from "react";

function Adopcion() {

    return (
        <div className="adopcionComponent">
                 <div className="adopcionComponentTitle">
                <div className="adopcionSubcomponentTitle">
                    <div className="adopcionTitle">Adopcion</div>
                   <div className="adopcionCaption">
          Derecho a la adopción conjunta </div>
                </div>
            </div >
            <div className="chupete">
                <img src="/adopcion.png" alt="adopcion" />
            </div>
            
        </div>
    );
}

export default Adopcion;