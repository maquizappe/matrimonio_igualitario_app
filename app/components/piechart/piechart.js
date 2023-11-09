import './piechart.css';
import React from "react";

function Piechart() {
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
            <div className="line1"> </div>
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

      <div  className="text"> Según datos de la Ciudad de Buenos Aires, desde 2010 el número de casamientos LGBTIQ+ por año se ha casi triplicado.
</div>


    </div>
  );
}

export default Piechart;
