import React from 'react';
import "./Home.css";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import home_card_img_1 from "../../RoyalAssets/royal_card_img 1.png";
import home_card_img_2 from "../../RoyalAssets/royal_card_img 2.png";
import home_card_img_3 from "../../RoyalAssets/royal_card_img 3.png";
import home_card_img_4 from "../../RoyalAssets/royal_card_img 4.png";
import home_card_img_5 from "../../RoyalAssets/royal_card_img 5.png";
import home_service from "../../RoyalAssets/service.png";
import home_time from "../../RoyalAssets//time.png";
import home_offer from "../../RoyalAssets/offer.png";
import home_about_img_1 from "../../RoyalAssets/about_img_1.png";
import home_about_img_2 from "../../RoyalAssets/about_img_2.png";
import home_about_img_3 from "../../RoyalAssets/about_img_3.png";
import service_ico_1 from "../../RoyalAssets/service_ico_1.png";
import service_ico_2 from "../../RoyalAssets/service_ico_2.png";
import service_ico_3 from "../../RoyalAssets/service_ico_3.png";
import service_ico_4 from "../../RoyalAssets/service_ico_4.png";
import mark_1 from "../../RoyalAssets/mark_1.png";
import mark_2 from "../../RoyalAssets/mark_2.png";
import customer_says from "../../RoyalAssets/customer_says.png";


function Home() {

  const home_sample_card = [{
    id: 1,
    img: `${home_card_img_1}`
  }, {
     id: 2,
    img: `${home_card_img_2}`
  }, {
     id: 3,
    img: `${home_card_img_3}`
  }, {
      id: 4,
    img: `${home_card_img_4}`
  }, {
      id: 5,
    img: `${home_card_img_5}`
  }];

  const home_services_data = [{
    id: 1, 
    name: "Online Food Ordering",
    description: "Easy Food delivery from the best restaurants.",
    img: `${service_ico_1}`
  }, {
    id: 2, 
    name: "100% Healthy Food",
    description: "Eating a wide variety nutritious Healthy foods",
    img: `${service_ico_2}`
  }, {
    id: 3, 
    name: "Favorite food",
    description: "Choose your favorite food and order online.",
    img: `${service_ico_3}`
  }, {
    id: 4, 
    name: "Fast deliver",
    description: "We prepared and deliver food arrive at your door.",
    img: `${service_ico_4}`
  }];

  const what_our_customer_say =[{
    id: 1,
    name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat officia aliquid iusto illo laboriosam, sit, nostrum id quaerat pariatur repellendus quis ullam hic in, non harum inventore cumque laudantium .",
    img_1: `${mark_1}`,
    img_2: `${mark_2}`,
    img_3: `${customer_says}`,
    customer_name: "John",
    customer_role: "Business manager"
  },
  {
    id: 2,
    name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat officia aliquid iusto illo laboriosam, sit, nostrum id quaerat pariatur repellendus quis ullam hic in, non harum inventore cumque laudantium .",
    img_1: `${mark_1}`,
    img_2: `${mark_2}`,
    img_3: `${customer_says}`,
    customer_name: "John",
    customer_role: "Business manager"
  }, 
  {
    id: 3,
    name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat officia aliquid iusto illo laboriosam, sit, nostrum id quaerat pariatur repellendus quis ullam hic in, non harum inventore cumque laudantium .",
    img_1: `${mark_1}`,
    img_2: `${mark_2}`,
    img_3: `${customer_says}`,
    customer_name: "John",
    customer_role: "Business manager"
  }
]

  return (
    <div id="home">
      {/* home section 1 */}

       <section id="home-section-1">
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

       </section>

        {/* home-section-2 */}

        <section  id="home-section-2">
        {/* section 2 part 1 */}
        <div className='container' id="home-section-2-div-1">
            <div id="home-section-2-div-1-1">

            </div>
            <div id="home-section-2-div-1-2">
             <p id="home-section-2-div-1-2-p-1">Order Online</p>
            </div>
            <div id="home-section-2-div-1-3">

            </div>
        </div>
   {/* section 2 part 2 */}
   <div className='container' id="home-section-2-div-2">
                <div id="home-section-2-div-2-1">
                  {
                    home_sample_card.map((item) => (
                      <div id="home-section-2-div-2-1-1">
                      <img id="home-section-2-div-2-1-1-img" src={item.img} alt={item.img} />
                      <div id="home-section-2-div-2-1-1-order-now">
                          <button id="home-section-2-div-2-1-1-order-now-button">Order Now</button>
                      </div>
                     </div>
                    ))
                  }
                </div>
        </div>

       </section>

         {/* Home-section-3 */}

      <section id="home-section-3"> 

<div className='container' id="home-section-3-div-1">
   <div id="home-section-3-div-1-1">
       <div id="home-section-3-div-1-1-1">
            <p id="home-section-3-div-1-1-1-p-1">About Us</p>
            <div id="home-section-3-div-1-1-1-line">

            </div>
       </div>
      <div id="home-section-3-div-1-1-2">
          <p id="home-section-3-div-1-1-2-p-1">Welcome to Royal Mysore Dosa </p>
      </div>
      <div id="home-section-3-div-1-1-3">
          <p id="home-section-3-div-1-1-3-p-1">Indian Restaurant in Birmingham is a popular meeting place for those who want to enjoy delicious Indian. Our chefs have years of experience and ensure that each Indian is freshly prepared. We offer a wide variety of Indian. Come by or order for home delivery and savor our tasty Indian</p>
      </div>
      <div id="home-section-3-div-1-1-4">
          <p id="home-section-3-div-1-1-4-p-1">In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat. Stpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat. Maecenas sollicitudin est in libero pretium.</p>
      </div>
      <div id="home-section-3-div-1-1-5">
       <div id="home-section-3-div-1-1-5-1">
        <img id="home-section-3-div-1-1-5-1-home-time" src={home_time} alt={home_time} />
       </div>
       <div id="home-section-3-div-1-1-5-2">
        <p id="home-section-3-div-1-1-5-2-p-1">Delivery within 30 minutes</p>
       </div>
      </div>
      <div id="home-section-3-div-1-1-6">
      <div id="home-section-3-div-1-1-6-1">
        <img id="home-section-3-div-1-1-6-1-home-time" src={home_offer} alt={home_offer} />
       </div>
       <div id="home-section-3-div-1-1-6-2">
        <p id="home-section-3-div-1-1-6-2-p-1">Best Offer & Prices</p>
       </div>
      </div>
      <div id="home-section-3-div-1-1-7">
      <div id="home-section-3-div-1-1-7-1">
        <img id="home-section-3-div-1-1-7-1-home-time" src={home_service} alt={home_service} />
       </div>
       <div id="home-section-3-div-1-1-7-2">
        <p id="home-section-3-div-1-1-7-2-p-1">Online Services Available</p>
       </div>
      </div>
   </div>
   <div id="home-section-3-div-1-2">
      <div id="home-section-3-div-1-2-1">
         <img id="home-section-3-div-1-2-1-img-1" src={home_about_img_1} alt={home_about_img_1}  />
      </div>
      <div id="home-section-3-div-1-2-2">
      <img id="home-section-3-div-1-2-1-img-1" src={home_about_img_2} alt={home_about_img_2}  />
      <img id="home-section-3-div-1-2-1-img-1" src={home_about_img_3} alt={home_about_img_3}  />
      </div>
    </div>
</div>

</section>



    


       {/* Home-section-4 */}
       <section id="home-section-4">
              
              {/* Part 1 */}
              <div className='container' id="home-section-4-div-1">
                <div id="home-section-4-div-1-1-line">

                </div>
                <div id="home-section-4-div-1-1">
                  <p id="home-section-4-div-1-1-p-1">Our Services</p>
                </div>
                <div id="home-section-4-div-1-1-line">
                  
                </div>

              </div>

              {/* Part 2 */}

              <div className='container' id="home-section-4-div-2">
                {
                  home_services_data.map((item) => (
                    <div id="home-section-4-div-2-1">
                    <div id="home-section-4-div-2-1-1">
                       <img id="home-section-4-div-2-1-1-img" src={item.img} alt={item.img} />
                    </div>
                    <div id="home-section-4-div-2-1-2">
                     <p id="home-section-4-div-2-1-2-p-1">{item.name}</p>
                    </div>
                    <div id="home-section-4-div-2-1-3">
                       <p id="home-section-4-div-2-1-3-p-1">{item.description}</p>
                    </div>
                </div>
                  ))
                }
           
              </div>

       </section>
      

            {/* Home-section-7 */}

            {/* <section id="home-section-7">
              <div className='container' id="home-section-7-div-1">
                  <div id="home-section-7-div-1-line"> 

                  </div>
                  <div id="home-section-7-div-1">
                      <p id="home-section-7-div-1-p-1">What Our Customers Say</p>
                  </div>
                  <div id="home-section-7-div-1-line"> 
              
                  </div>
              </div>

             <div className='container' id="home-section-7-div-2">
              {
                what_our_customer_say.map((item)=> (
                  <div id="home-section-7-div-2-1">
                  <div id="home-section-7-div-2-1-1">
                      <p id="home-section-7-div-2-1-1-p-1"><span><img src={item.img_1} alt={item.img_1} /></span>  {item.name} <span><img src={item.img_2} alt={item.img_2} /></span></p>
                  </div>
                  <div id="home-section-7-div-2-1-2">
                     <div id="home-section-7-div-2-1-2-1">
                        <img src={item.img_3} alt={item.img_3}/>
                     </div>
                     <div id="home-section-7-div-2-1-2-2">
                      <p id="home-section-7-div-2-1-2-2-p-1">{item.customer_name}</p>
                      <p id="home-section-7-div-2-1-2-2-p-2">{item.customer_role}</p>
                      </div>
                  </div>
               </div>
                ))
              }
            
             </div>

          </section> */}

           {/* Home Section 8 */} 

       <section id="home-section-8">
            <div className='container' id="home-section-8-div-1">
             <p id="home-section-8-div-1-p-1"> Subscribe Newsletter </p>
             <p id="home-section-8-div-1-p-2">Sign up for newsletter to receive special offers and exclusive news about Botanica products</p>
              <div id="home-section-8-div-1-1">
                <input id="home-section-8-div-1-1-input-1" type="text"  placeholder='Enter Your Email' />
                <button id="home-section-8-div-1-1-button">Subscribe</button>
              </div>
            </div>
       </section>



    </div>
  )
}

export default Home;
