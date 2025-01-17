import React from 'react';
import "./Address.css";

function Address() {
  return (
    <div id="address">
        {/* section 1 */}
       <section id="address-section-1">
             <div className='container' id="address-section-1-div-1">
              <div  id="address-section-1-div-1-1">
                 <h6 id="address-section-1-div-1-1-h6">Address Form</h6>
                 <form id="address-section-1-div-1-1-form">
                   <input id="address-section-1-div-1-1-form-input-1" type="text" placeholder='Enter Door No' />
                   <input id="address-section-1-div-1-1-form-input-2" type="text" placeholder='Enter Street Name' />
                   <input id="address-section-1-div-1-1-form-input-3" type="text" placeholder='Enter City' />
                   <input id="address-section-1-div-1-1-form-input-4" type="text" placeholder='Enter State' />
                   <input id="address-section-1-div-1-1-form-input-5" type="text" placeholder='Enter Country' />
                   <input id="address-section-1-div-1-1-form-input-6" type="text" placeholder='Enter Pincode' />
                   <button id="address-section-1-div-1-1-button">Submit</button>
                 </form>
              </div>
             </div>
       </section>
    </div>
  )
}

export default Address
