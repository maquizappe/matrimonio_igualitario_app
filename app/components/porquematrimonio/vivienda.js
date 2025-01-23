import './vivienda.css'
import React from "react";

function Vivienda() {

    return (
        <div className="vivendaComponent">
            <div className="vivendaComponentTitle">
                <div className="vivendaSubcomponentTitle">
                    <div className="vivendaTitle">Housing</div>
                    <div className="viviendaCaption">
                        Legal protection of the household as a familiy asset. </div>
                </div>
            </div >
            <div className="casita">
                <img src="./casita.png" alt="Casita" />
            </div>

        </div>
    );
}

export default Vivienda;
