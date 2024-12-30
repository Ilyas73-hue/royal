import React from 'react';
import "./Gallery.css";
import gallery_img_1 from "../../RoyalAssets/royal_gallery_img_1.png";
import gallery_img_2 from "../../RoyalAssets/royal_card_img 2.png";
import gallery_img_3 from "../../RoyalAssets/royal_card_img 3.png";
import gallery_img_4 from "../../RoyalAssets/royal_card_img 4.png";
import gallery_img_5 from "../../RoyalAssets/royal_card_img 5.png";
import gallery_img_6 from "../../RoyalAssets/royal_card_img 6.png";
import gallery_img_7 from "../../RoyalAssets/royal_card_img 7.png";
import gallery_img_8 from "../../RoyalAssets/royal_card_img 8.png";
import gallery_img_2 from "../../RoyalAssets/royal_card_img 9.png";



function Gallery() {
  return (
    <div id="gallery">
        {/* Section 1 */}
        <section id="about-section-1">
           <div id="about-section-1-div-1">
             <p id="about-section-1-div-1-p-1">Indian Restaurant Birmingham - 
             Royal Mysore Dosa</p>
           </div>
           <div  id="about-section-1-div-2">
              <p id="about-section-1-div-2-p-1">Gallery</p>
              <p id="about-section-1-div-2-p-2">Home > Gallery</p>
           </div>
        </section>

       {/* Section 2 */}

       <section id="gallery-section-2">
         <div className='container' id="gallery-section-2-div-1">
           <div id="gallery-section-2-div-1-line">

           </div>
           <div id="gallery-section-2-div-1-1">
             <p id="gallery-section-2-div-1-1-p-1">Gallery</p>
           </div>
           <div id="gallery-section-2-div-1-line">

           </div>
         </div>

         <div className='container' id="gallery-section-2-div-1">
            <img src='' alt="" />
         </div>
       </section>


    </div>
  )
}

export default Gallery
