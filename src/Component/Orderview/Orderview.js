import React, { useState, useEffect } from 'react';
import "./Orderview.css";

function Orderview() {
  return (
    <div id="orderview">
       {/* Section 1 */}
       <section id="orderview-section-1">
           <div id="orderview-section-1-div-1">
             <p id="orderview-section-1-div-1-p-1">Indian Restaurant Birmingham - 
             Royal Mysore Dosa</p>
           </div>
           <div  id="orderview-section-1-div-2">
              <p id="orderview-section-1-div-2-p-1">Orderview</p>
              <p id="orderview-section-1-div-2-p-2">Home > Orderview</p>
           </div>
           </section>

          {/* Section 2 */}

           <section id="orderview-section-2">
                <div className='container' id="orderview-section-2-div-1">
                <button id="orderview-section-2-div-1-button">Back</button>
                </div>
           </section>
    </div>
  )
}

export default Orderview
