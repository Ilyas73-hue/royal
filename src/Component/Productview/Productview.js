import React, { useState, useEffect } from 'react';
import "./Productview.css";
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import food_img_1 from "../../RoyalAssets/Fried Chicken.png";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import axios from "axios";

function Productview() {

  const [qty, setQty] = useState(1);
  const [getapi, setGetapi] = useState();
  const [matchdata, setMatchdata] = useState([]);

  const [cartbutton, setCartbutton] = useState(false);

  if(qty < 1){
    setQty(1)
  }


  const {id} = useParams();

  useEffect(() => {
    axios.get(`http://localhost:1000/api/menu/get/${id}`)
    .then((res) => setGetapi(res.data.menu))
    .catch((err) => console.log(err))
  },[]);


  const post = async(id) => {

    const data = await axios.post(`http://localhost:1000/api/cart/post`, {
      name: getapi.name, price: getapi.price, categories: getapi.categories, qty: qty,img: getapi.img, description: getapi.description, adminId: getapi.adminId, userId: localStorage.getItem("userId")
    })

    localStorage.setItem("adminId", getapi.adminId)

    if(data.status === 201){
      window.location.href=`/cart`
    }
  }


  useEffect(() => {
    axios.get(`http://localhost:1000/api/cart/get/`)
    .then((res) => setMatchdata(res.data.cart))
    .catch((err) => console.log(err))
  },[]);



 



  return (
    <div id="productview">
        <section id="productview-section-1">
          <div className='container' id="productview-section-1-back">
              <button onClick={() => window.location.href=`/menu`} id="productview-section-1-back-button">Back</button>
          </div>
            <div id="productview-section-1-div-1">
             <div id="productview-section-1-div-1-1">
                <img id="productview-section-1-div-1-1-img"  src={food_img_1} alt={food_img_1} />
             </div>
             <div  id="productview-section-1-div-1-2">
               <div id="productview-section-1-div-1-2-1">
                   <p id="productview-section-1-div-1-2-1-p-1">{getapi && getapi.name}</p>
               </div>
               <div id="productview-section-1-div-1-2-1">
                   <p id="productview-section-1-div-1-2-1-p-2">$  {getapi &&  getapi.price}</p>
               </div>
               <div id="productview-section-1-div-1-2-1">
                   <p id="productview-section-1-div-1-2-1-p-3">{getapi && getapi.description}</p>
               </div>
               <div id="productview-section-1-div-1-2-2">
                 <button id="productview-section-1-div-1-2-2-lplus" onClick={() => setQty(qty + 1)}><FaPlus id="productview-section-1-div-1-2-2-l-plus-qty" /></button>
                 <p id="productview-section-1-div-1-2-2-p-1">{qty}</p>
                 <button id="productview-section-1-div-1-2-2-minus" onClick={() => setQty(qty - 1)}><FaMinus id="productview-section-1-div-1-2-2-minus-qty" /></button>
               </div>
               <div id="productview-section-1-div-1-2-3">
                 <button id="productview-section-1-div-1-2-3-button" onClick={() => post(`${getapi._id}`)}>Add To Cart</button>
               </div>
             </div>
            </div>
        </section>
    </div>
  )
}

export default Productview
