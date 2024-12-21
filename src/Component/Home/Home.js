import React from 'react';
import "./Home.css";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";


function Home() {
  return (
    <div id="home">
      {/* home section 1 */}

         <section className='container' id="home-section-1">
         <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div id="carousel-content">
       <div id="carousel-content-1">
          <p id="carousel-content-1-p-1">Craving delicious Indian food in Birmingham?</p>
          <h6 id="carousel-content-1-h6-1">Indian Restaurant Birmingham - 
          Royal Mysore Dosa</h6>
          <div id="carousel-button">
          <button id="carousel-button-1">Book Table</button>
          <button id="carousel-button-2">Explore Menu</button>
          </div>
       </div>
    </div>
 
  </div>

  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    {/* <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span> */}
    <FaArrowLeft id="carousel-arrow" />

  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    {/* <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span> */}
<FaArrowRight id="carousel-arrow" />
  </button>
</div>
         </section>

         {/* Home section 2 */}

         <section id="home-section-2">

         </section>

    </div>
  )
}

export default Home;
