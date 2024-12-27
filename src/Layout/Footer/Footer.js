import React from 'react';
import "./Footer.css";
import footer_logo from "../../RoyalAssets/royal.png";


function Footer() {
  return (
    <div id="footer">
        {/* section 1 */}
        <section className='container' id="footer-section-1">
          {/* Part 1 */}
           <div id="footer-section-1-div-1">
               <div id="footer-section-1-div-1-1">
                <img id="footer-section-1-div-1-1-img" src={footer_logo} alt={footer_logo} />
               </div>
               <div id="footer-section-1-div-1-2">
                <p id="footer-section-1-div-1-2-p-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat officia aliquid iusto illo laboriosam, sit, nostrum id quaerat pariatur repellendus quis ullam hic in, non harum inventore cumque laudantium . </p>
               </div>
           </div>

          {/* Part 2 */}
         
         <div id="footer-section-1-div-2">
            <div id="footer-section-1-div-2-1">
               <p id="footer-section-1-div-2-1-p-1">Page Links</p>
            </div>
            <div id="footer-section-1-div-2-2">
               <ul id="footer-section-1-div-2-2-ul">
                <li id="footer-section-1-div-2-2-li"><a id="footer-section-1-div-2-2-li-a" href="/">Home</a></li>
                <li id="footer-section-1-div-2-2-li"><a id="footer-section-1-div-2-2-li-a" href="/">About Us</a></li>
                <li id="footer-section-1-div-2-2-li"><a id="footer-section-1-div-2-2-li-a" href="/">Menu</a></li>
                <li id="footer-section-1-div-2-2-li"><a id="footer-section-1-div-2-2-li-a" href="/">Gallery</a></li>
                <li id="footer-section-1-div-2-2-li"><a id="footer-section-1-div-2-2-li-a" href="/">Contact</a></li>
               </ul>
            </div>
         </div>


        </section>
    </div>
  )
}

export default Footer;
