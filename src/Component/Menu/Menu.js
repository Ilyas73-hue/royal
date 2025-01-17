import React, { useState, useEffect } from 'react';
import "./Menu.css";
import { IoMdSearch } from "react-icons/io";
import food_icon from "../../RoyalAssets/food_icon.png";
import food_img_1 from "../../RoyalAssets/Fried Chicken.png";
import axios from "axios";
 
function Menu() {

    const [categoriesdata , setCategoriesdata] = useState("Desi Breakfast");
    const [filtermenu, setFiltermenu] = useState([]);
    const [onedatapopup, setOneDatapopup] = useState(false)

    console.log(categoriesdata);

    const categories = [{
      name:"Desi Breakfast"
    }, {
      name:"Special Non Veg Dishes"
    }]

    const [carddata, setCarddata] = useState([]);


      useEffect(() => {
        const data =   axios.get(`http://localhost:1000/api/menu/get/`)
          data.then((res) => {setCarddata(res.data.menu) ;
         setFiltermenu(res.data.menu)
          })
          .catch((err) => console.log(err))
         },[]);






 const Filter = (event) => {
    setCategoriesdata(event)
    if(!event){
      event = categoriesdata
    }
    setFiltermenu(carddata.filter(f => f.categories.toLowerCase().includes(event.toLowerCase())))
 }

 console.log(filtermenu);
 

 const [onedata, setOneData] = useState();



//  const cartget = async(id) => {
  
//   const data =  await axios.get(`http://localhost:1000/api/menu/get/${id}`)
//   setOneData(data.data.menu)
//  };



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
           {/* <div id="menu-section-2-div-2-1-1">
             <input id="menu-section-2-div-2-1-1-input" type="text" placeholder='Search your food'    />
             <IoMdSearch id="menu-section-2-div-2-1-1-input-search" />
           </div> */}
           <div id="menu-section-2-div-2-1-2">
             <p id="menu-section-2-div-2-1-2-p-1">Categories</p>
             <div id="menu-section-2-div-2-1-2-line">

             </div>
             {
              categories.map((item) => (
                <div id="menu-section-2-div-2-1-2-1">
                <div id="menu-section-2-div-2-1-2-1-1" onClick={() => Filter(`${item.name}`)}>
                  <img   src={food_icon} alt={food_icon} />
                  <p id={ categoriesdata.toLowerCase() === item.name.toLowerCase() ? "menu-section-2-div-2-1-2-1-1-p-1-active" : "menu-section-2-div-2-1-2-1-1-p-1"}>{item.name}</p>
                </div>
              </div>
              ))
             }
            
             {/* <div id="menu-section-2-div-2-1-2-1" onClick={() => Filter("special non veg dishes") }>
               <div id="menu-section-2-div-2-1-2-1-1">
                 <img  src={food_icon} alt={food_icon} />
                 <p id={ categoriesdata === "special non veg dishes" ? "menu-section-2-div-2-1-2-1-1-p-1-active" : "menu-section-2-div-2-1-2-1-1-p-1"}>Special Non Veg Dishes</p>
               </div>
             </div> */}

           </div>
           {/* <div id="menu-section-2-div-2-1-3">
           <select id="menu-section-2-div-2-1-3-1-1-p-1-active" onChange={(e) => setCategoriesdata(e.target.value)}>
  <option  id={ categoriesdata === "Desi breakfast" ? "menu-section-2-div-2-1-2-1-1-p-1-active" : "menu-section-2-div-2-1-2-1-1-p-1"} value="Desi breakfast">Desi breakfast</option>
  <option id={ categoriesdata === "Super Deals" ? "menu-section-2-div-2-1-2-1-1-p-1-active" : "menu-section-2-div-2-1-2-1-1-p-1"} value="Super Deals">Super Deals</option>
</select>
           </div> */}
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
       <button id="menu-section-2-div-2-2-1-card-1-4-button" onClick={() => window.location.href=`/menu/view/${item._id}` }>Order Now</button>
    </div>
</div>
  ))}
                 </div>
            </div>

            

{/* {
  onedatapopup && <div  id="menu-section-2-div-2-2-popup">
            <div id="menu-section-2-div-2-2-1-card-1-popup" key={onedata._id}>
    <div id="menu-section-2-div-2-2-1-card-1-1">
      <img id="menu-section-2-div-2-2-1-card-1-1-img" src={onedata.img} alt={onedata.img} />
    </div>
    <div id="menu-section-2-div-2-2-1-card-1-2">
      <p id="menu-section-2-div-2-2-1-card-1-2-p-1">{onedata.name}</p>
      <p id="menu-section-2-div-2-2-1-card-1-2-p-2">$ {onedata.price}</p>
    </div>
    <div id="menu-section-2-div-2-2-1-card-1-3">
     <p id="menu-section-2-div-2-2-1-card-1-3-p-1">{onedata.description}</p>
    </div>
    <div id="menu-section-2-div-2-2-1-card-1-4">
       <button id="menu-section-2-div-2-2-1-card-1-4-button" onClick={cartpost}>Order Now</button>
    </div>
</div>
  </div>  
} */}

         </div>
      </div>

  </section>

    </div>
  )
}

export default Menu
