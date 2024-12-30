import React from 'react';
import "./Footer.css";
import footer_logo from "../../RoyalAssets/royal.png";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { LuInstagram } from "react-icons/lu";

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

         {/* Part 3 */}


         <div id="footer-section-1-div-3">
    <div id="footer-section-1-div-3-1">
       <p id="footer-section-1-div-3-1-p-1">Location</p>
    </div>
    <div id="footer-section-1-div-3-2">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2431.871105345203!2d-1.9707727234963166!3d52.445249641761386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bda966e719c3%3A0xf12dca74cce6bdd4!2sRoyal%20Mysore%20Dosa!5e0!3m2!1sen!2sin!4v1735365213073!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
 </div>

{/* Part 4 */}

<div id="footer-section-1-div-4">
    <div id="footer-section-1-div-4-1">
      <div id="footer-section-1-div-4-1-1">
      <p id="footer-section-1-div-4-1-1-p-1">Contacts</p>
      </div>
      <div id="footer-section-1-div-4-1-2">
          <div id="footer-section-1-div-4-1-2-1">
          <FaPhoneAlt id="footer-section-1-div-4-1-2-1-phone" />
          </div>
          <div id="footer-section-1-div-4-1-2-2">
            <p id="footer-section-1-div-4-1-2-2-p-1">Lorem ipsum dolor</p>
          </div>
      </div>
      <div id="footer-section-1-div-4-1-2">
          <div id="footer-section-1-div-4-1-2-1">
          <MdEmail id="footer-section-1-div-4-1-2-1-phone" />
          </div>
          <div id="footer-section-1-div-4-1-2-2">
            <p id="footer-section-1-div-4-1-2-2-p-1">Lorem ipsum dolor</p>
          </div>
      </div>
      <div id="footer-section-1-div-4-1-1">
      <p id="footer-section-1-div-4-1-1-p-1">Quick Links</p>
      </div>
      <div id="footer-section-1-div-4-1-3">
          <div id="footer-section-1-div-4-1-3-1">
          <FaTwitter id="footer-section-1-div-4-1-3-1-ico" />
          </div>
          <div id="footer-section-1-div-4-1-3-1">
          <TiSocialFacebook id="footer-section-1-div-4-1-3-1-ico" />
          </div>
          <div id="footer-section-1-div-4-1-3-1">
          <LuInstagram id="footer-section-1-div-4-1-3-1-ico" />
          </div>
      </div>
    </div>
</div>



        </section>
        {/* Section 2 */}

        <section id="footer-section-2">

        </section>

        {/* Section 3 */}

        <section id="footer-section-3">
           <div className='container' id="footer-section-3-div-1"> 
            <div id="footer-section-3-div-1-1">
              <p id="footer-section-3-div-1-1-p-1">Copyright © 2024 <a href='/' id="footer-section-3-div-1-1-p-1-a">Royal Mysore Dosa</a>. All Rights Reserved.</p>
            </div>
            <div id="footer-section-3-div-1-2">
            <p id="footer-section-3-div-1-2-p-1">Developed by intwhizz</p>
            </div>
           </div>
        </section>

    </div>
  )
}

export default Footer;
