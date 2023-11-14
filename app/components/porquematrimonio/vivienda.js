import './vivienda.css'
import React from "react";

function Vivienda() {

    return (
        <div className="vivendaComponent">
            <div className="vivendaComponentTitle">
                <div className="vivendaSubcomponentTitle">
                    <div className="vivendaTitle">Vivienda</div>
                    <div className="viviendaCaption">
                        Protección de la vivienda como bien de familia. </div>
                </div>
            </div >
            <div className="casita">
                <img src="./casita.png" alt="Casita" />
            </div>

        </div>
    );
}

export default Vivienda;