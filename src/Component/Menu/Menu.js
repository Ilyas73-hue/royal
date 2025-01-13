import React, { useState, useEffect } from 'react';
import "./Menu.css";
import { IoMdSearch } from "react-icons/io";
import food_icon from "../../RoyalAssets/food_icon.png";
import axios from "axios";
 
function Menu() {

    const [categoriesdata , setCategoriesdata] = useState("Desi Breakfast");
    const [filtermenu, setFiltermenu] = useState([])

    // console.log(categoriesdata);

    const [carddata, setCarddata] = useState([]);

    const [cardid , setCardId] = useState();

    useEffect(() => {
   const data =   axios.get(`http://localhost:1000/api/menu/get`)
     data.then((res) => {setCarddata(res.data.menu) ;
    setFiltermenu(res.data.menu)})
     .catch((err) => console.log(err))
    },[]);

 const Filter = (event) => {
  setCategoriesdata(event)
    setFiltermenu(carddata.filter(f => f.categories.toLowerCase().includes(event.toLowerCase())))
 }



 const [onedata, setOneData] = useState();



 const cartget = async(id) => {
  
  const data =  await axios.get(`http://localhost:1000/api/menu/get/${id}`)

 }
 






  return (
    <div id="menu">
       
{/* Section 1 */}
<section id="menu-section-1">
           <div id="menu-section-1-div-1">
             <p id="menu-section-1-div-1-p-1">Indian Restaurant Birmingham - 
             Royal Mysore Dosa</p>
           </div>
           <div  id="menu-section-1-div-2">
              <p id="menu-section-1-div-2-p-1">Menu</p>
              <p id="menu-section-1-div-2-p-2">Home > Menu</p>
           </div>
        </section>

  {/* Section 2 */}

  <section id="menu-section-2">
      <div className='container' id="menu-section-2-div-1">
            <div id="menu-section-2-div-1-1">

            </div>
            <div id="menu-section-2-div-1-2">
              <p id="menu-section-2-div-1-2-p">Menu</p>
            </div>
            <div id="menu-section-2-div-1-3">

            </div>
      </div>

      <div className='container' id="menu-section-2-div-2">
         <div id="menu-section-2-div-2-1">
           <div id="menu-section-2-div-2-1-1">
             <input id="menu-section-2-div-2-1-1-input" type="text" placeholder='Search your food'   />
             <IoMdSearch id="menu-section-2-div-2-1-1-input-search" />
           </div>
           <div id="menu-section-2-div-2-1-2">
             <p id="menu-section-2-div-2-1-2-p-1">Categories</p>
             <div id="menu-section-2-div-2-1-2-line">

             </div>
             <div id="menu-section-2-div-2-1-2-1">
               <div id="menu-section-2-div-2-1-2-1-1" onClick={() => Filter("Desi Breakfast")}>
                 <img  src={food_icon} alt={food_icon} />
                 <p id={ categoriesdata.toLowerCase() === "desi breakfast" ? "menu-section-2-div-2-1-2-1-1-p-1-active" : "menu-section-2-div-2-1-2-1-1-p-1"}>Desi Breakfast</p>
               </div>
             </div>
             <div id="menu-section-2-div-2-1-2-1" onClick={() => Filter("Special Non Veg Dishes") }>
               <div id="menu-section-2-div-2-1-2-1-1">
                 <img  src={food_icon} alt={food_icon} />
                 <p id={ categoriesdata.toLowerCase() === "special non veg dishes" ? "menu-section-2-div-2-1-2-1-1-p-1-active" : "menu-section-2-div-2-1-2-1-1-p-1"}>Special Non Veg Dishes</p>
               </div>
             </div>
           </div>
           <div id="menu-section-2-div-2-1-3">
           <select id="menu-section-2-div-2-1-3-1-1-p-1-active" onChange={(e) => setCategoriesdata(e.target.value)}>
  <option  id={ categoriesdata === "Desi breakfast" ? "menu-section-2-div-2-1-2-1-1-p-1-active" : "menu-section-2-div-2-1-2-1-1-p-1"} value="Desi breakfast">Desi breakfast</option>
  <option id={ categoriesdata === "Super Deals" ? "menu-section-2-div-2-1-2-1-1-p-1-active" : "menu-section-2-div-2-1-2-1-1-p-1"} value="Super Deals">Super Deals</option>
</select>
           </div>
         </div>
         <div id="menu-section-2-div-2-2">
            <div className='container' id="menu-section-2-div-2-2-1">
                 <p id="menu-section-2-div-2-2-1-p-1">{categoriesdata}</p>
                 <div id="menu-section-2-div-2-2-1-card">

{
  filtermenu.map((item) => (
    <div id="menu-section-2-div-2-2-1-card-1" key={item._id}>
    <div id="menu-section-2-div-2-2-1-card-1-1">
      <img id="menu-section-2-div-2-2-1-card-1-1-img" src={item.img} alt={item.img} />
    </div>
    <div id="menu-section-2-div-2-2-1-card-1-2">
      <p id="menu-section-2-div-2-2-1-card-1-2-p-1">{item.name}</p>
      <p id="menu-section-2-div-2-2-1-card-1-2-p-2">$ {item.price}</p>
    </div>
    <div id="menu-section-2-div-2-2-1-card-1-3">
     <p id="menu-section-2-div-2-2-1-card-1-3-p-1">{item.description}</p>
    </div>
    <div id="menu-section-2-div-2-2-1-card-1-4">
       <button id="menu-section-2-div-2-2-1-card-1-4-button" onClick={() => { cartget(`${item._id}`) }}>Order Now</button>
    </div>
</div>
  ))
}

               



                 </div>
            </div>
         </div>
      </div>

  </section>

    </div>
  )
}

export default Menu
