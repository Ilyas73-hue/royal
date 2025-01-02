import React from 'react';
import "./Gallery.css";
import gallery_img_1 from "../../RoyalAssets/royal_gallery_img_1.png";
import gallery_img_2 from "../../RoyalAssets/royal_gallery_img_2.png";
import gallery_img_3 from "../../RoyalAssets/royal_gallery_img_3.png";
import gallery_img_4 from "../../RoyalAssets/royal_gallery_img_4.png";
import gallery_img_5 from "../../RoyalAssets/royal_gallery_img_5.png";
import gallery_img_6 from "../../RoyalAssets/royal_gallery_img_6.png";
import gallery_img_7 from "../../RoyalAssets/royal_gallery_img_7.png";
import gallery_img_8 from "../../RoyalAssets/royal_gallery_img_8.png";
import gallery_img_9 from "../../RoyalAssets/royal_gallery_img_9.png";



function Gallery() {

  const gallery = [{
    id: 1,
    img: `${gallery_img_1}`
  }, 
  {
    id: 2,
    img: `${gallery_img_2}`
  }, {
    id: 3,
    img: `${gallery_img_3}`
  }, {
     id: 4,
    img: `${gallery_img_4}`
  }, {
    id: 5,
    img: `${gallery_img_5}`
  }, {
    id: 6,
    img: `${gallery_img_6}`
  }, {
    id: 7,
    img: `${gallery_img_7}`
  }, {
    id: 8,
    img: `${gallery_img_8}`
  }, {
    id: 9,
    img: `${gallery_img_9}`
  }
]

  return (
    <div id="gallery">
        {/* Section 1 */}
        <section id="gallery-section-1">
           <div id="gallery-section-1-div-1">
             <p id="gallery-section-1-div-1-p-1">Indian Restaurant Birmingham - 
             Royal Mysore Dosa</p>
           </div>
           <div  id="gallery-section-1-div-2">
              <p id="gallery-section-1-div-2-p-1">Gallery</p>
              <p id="gallery-section-1-div-2-p-2">Home > Gallery</p>
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

         <div className='container' id="gallery-section-2-div-2">
          {
            gallery.map((item) => (
              <img id="gallery-section-2-div-1-img" src={item.img} alt={item.img} />
            ))
          }
           
         </div>
       </section>

       
       {/* Section 3 */} 

       <section id="gallery-section-3">
  <div className='container' id="gallery-section-3-div-1">
   <p id="gallery-section-3-div-1-p-1"> Subscribe Newsletter </p>
   <p id="gallery-section-3-div-1-p-2">Sign up for newsletter to receive special offers and exclusive news about Botanica products</p>
    <div id="gallery-section-3-div-1-1">
      <input id="gallery-section-3-div-1-1-input-1" type="text"  placeholder='Enter Your Email' />
      <button id="gallery-section-3-div-1-1-button">Subscribe</button>
    </div>
  </div>
</section>


    </div>
  )
}

export default Gallery
