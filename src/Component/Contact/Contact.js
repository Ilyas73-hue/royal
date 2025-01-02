import React from 'react';
import "./Contact.css";
import { IoLocationSharp } from "react-icons/io5";

function Contact() {
  return (
    <div id="contact">
         {/* Section 1 */}
         <section id="contact-section-1">
           <div id="contact-section-1-div-1">
             <p id="contact-section-1-div-1-p-1">Indian Restaurant Birmingham - 
             Royal Mysore Dosa</p>
           </div>
           <div  id="contact-section-1-div-2">
              <p id="contact-section-1-div-2-p-1">Contact Us</p>
              <p id="contact-section-1-div-2-p-2">Home > Contact Us</p>
           </div>
        </section>

       {/* Section 2 */}

       <section id="contact-section-2">
             <div className='container' id="contact-section-2-div-1">
                   <div id="contact-section-2-div-1-line">
               
                   </div>
                   <div id="contact-section-2-div-1-1">
                        <p id="contact-section-2-div-1-1-p-1">Contact</p>
                   </div>
                   <div id="contact-section-2-div-1-line">
                            
                   </div>
             </div>
             <div className='container' id="contact-section-2-div-2">
                   <div id="contact-section-2-div-2-1">
                       <div id="contact-section-2-div-2-1-1">
                         <input type="text" id="contact-section-2-div-2-1-1-input-1" placeholder="Name" />
                         <input type="email" id="contact-section-2-div-2-1-1-input-2" placeholder="Email" />
                       </div>
                       <div id="contact-section-2-div-2-1-2">
                       <input type="number" id="contact-section-2-div-2-1-1-input-1" placeholder="Phone Number" />
                       <input type="date" id="contact-section-2-div-2-1-1-input-2"  />
                       </div>
                       <div id="contact-section-2-div-2-1-3">
                         <textarea id="contact-section-2-div-2-1-3-textarea" placeholder='Feedback'></textarea>
                       </div>
                      <div id="contact-section-2-div-2-1-4"> 
                           <button id="contact-section-2-div-2-1-3-button">Send Message</button>
                      </div>
                   </div>
                   <div id="contact-section-2-div-2-2">
                      <div id="contact-section-2-div-2-2-1">
                        <p id="contact-section-2-div-2-2-1-p-1">Address</p>
                      </div>
                      <div id="contact-section-2-div-2-2-2">
                        <div id="contact-section-2-div-2-2-2-1">
                        <IoLocationSharp id="contact-section-2-div-2-2-2-1-location" />
                        </div>
                        <div id="contact-section-2-div-2-2-2-2">
                         <p id="contact-section-2-div-2-2-2-2-p-1">Bottetourt Road 71 B29 5TF Birmingham</p>
                        </div>
                      </div>
                      <div id="contact-section-2-div-2-3">
                         <div id="contact-section-2-div-2-3-1">
                            <ul id="contact-section-2-div-2-3-1-ul">
                              <li id="contact-section-2-div-2-3-1-li-1">Opening Hours</li>
                              <li id="contact-section-2-div-2-3-1-li-2">Mon :</li>
                              <li id="contact-section-2-div-2-3-1-li-2">Tue :</li>
                              <li id="contact-section-2-div-2-3-1-li-2">Wed :</li>
                              <li id="contact-section-2-div-2-3-1-li-2">Fri :</li>
                              <li id="contact-section-2-div-2-3-1-li-2">Sat :</li>
                              <li id="contact-section-2-div-2-3-1-li-2">Sun :</li>
                            </ul>
                         </div>
                         <div id="contact-section-2-div-2-3-2">
                          <div id="contact-section-2-div-2-3-2-1">
                          <ul id="contact-section-2-div-2-3-2-ul">
                              <li id="contact-section-2-div-2-3-2-li-1">Am</li>
                              <li id="contact-section-2-div-2-3-2-li-2">00:01-</li>
                              <li id="contact-section-2-div-2-3-2-li-2">00:01-</li>
                              <li id="contact-section-2-div-2-3-2-li-2">00:01-</li>
                              <li id="contact-section-2-div-2-3-2-li-2">00:01-</li>
                              <li id="contact-section-2-div-2-3-2-li-2">00:01-</li>
                              <li id="contact-section-2-div-2-3-2-li-2">00:01-</li>
                            </ul>
                          </div>
                          <div id="contact-section-2-div-2-3-2-2">
                          <ul id="contact-section-2-div-2-3-2-2-ul">
                              <li id="contact-section-2-div-2-3-2-2-li-1">Pm</li>
                              <li id="contact-section-2-div-2-3-2-2-li-2">23:59</li>
                              <li id="contact-section-2-div-2-3-2-2-li-2">23:59</li>
                              <li id="contact-section-2-div-2-3-2-2-li-2">23:59</li>
                              <li id="contact-section-2-div-2-3-2-2-li-2">23:59</li>
                              <li id="contact-section-2-div-2-3-2-2-li-2">23:59</li>
                              <li id="contact-section-2-div-2-3-2-2-li-2">23:59</li>
                            </ul>
                          </div>
              
                         </div>
                      </div>
                   </div>
             </div>
       </section> 

       {/* Section 3 */}

      <section id="contact-section-3">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2431.871105345203!2d-1.9707727234963166!3d52.445249641761386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bda966e719c3%3A0xf12dca74cce6bdd4!2sRoyal%20Mysore%20Dosa!5e0!3m2!1sen!2sin!4v1735365213073!5m2!1sen!2sin" id="contact-section-3-g-map"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </section>

{/* Section 4 */}

      <section id="contact-section-4">
            <div className='container' id="contact-section-4-div-1">
             <p id="contact-section-4-div-1-p-1"> Subscribe Newsletter </p>
             <p id="contact-section-4-div-1-p-2">Sign up for newsletter to receive special offers and exclusive news contact Botanica products</p>
              <div id="contact-section-4-div-1-1">
                <input id="contact-section-4-div-1-1-input-1" type="text"  placeholder='Enter Your Email' />
                <button id="contact-section-4-div-1-1-button">Subscribe</button>
              </div>
            </div>
       </section>



    </div>
  )
}

export default Contact
