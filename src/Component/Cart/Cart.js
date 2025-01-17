import React, { useState, useEffect } from 'react';
import axios from "axios";
import "./Cart.css";
import food_img_1 from "../../RoyalAssets/Fried Chicken.png";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";

function Cart() {

      const [qty, setQty] = useState(1);
      const [cart, setCart] = useState([]);

      if(qty < 1){
        setQty(1);
      };

      useEffect(() => {
       axios.get(`http://localhost:1000/api/cart/get`)
       .then((res) => setCart(res.data.cart))
       .catch((err) => console.log(err))
      },[]);


 
      const cartdelete = async(id) => {
     const data = await axios.delete(`http://localhost:1000/api/cart/delete/${id}`)
     if(data.status === 201){
        window.location.href=`/menu`
     }
      }


      const userId_filter = cart.filter(item => item.userId.includes(localStorage.getItem("userId")))

      console.log(userId_filter)

      const totalAmount = cart.map(item => item.qty  * item.price ).reduce((sum, item ) => sum + item,0);

      console.log(totalAmount)


  return (
    <div id="cart">
      {/* Section 1 */}
<section id="cart-section-1">
           <div id="cart-section-1-div-1">
             <p id="cart-section-1-div-1-p-1">Indian Restaurant Birmingham - 
             Royal Mysore Dosa</p>
           </div>
           <div  id="cart-section-1-div-2">
              <p id="cart-section-1-div-2-p-1">Cart</p>
              <p id="cart-section-1-div-2-p-2">Home > Cart</p>
           </div>
           </section>

           {/* Section 2 */}

          <section id="cart-section-2">
               <div className='container' id="cart-section-2-div-1">
                <div id="cart-section-2-div-1-1">
                <p id="cart-section-2-div-1-1-p-1">Product</p>
                </div>
                <div id="cart-section-2-div-1-2">
                 <p id="cart-section-2-div-1-2-p-1">Quantity</p>
                 <p id="cart-section-2-div-1-2-p-2">Price</p>
                 <p id="cart-section-2-div-1-2-p-3">Delete</p>
                </div>
               </div>
               <div className='container' id="cart-section-2-div-2"></div>
               {
                userId_filter.map((item) => (
                    <div className='container' id="cart-section-2-div-3" key={item._id}>
                    <div id="cart-section-2-div-3-1">
                       <div id="cart-section-2-div-3-1-1">
                         <img id="cart-section-2-div-3-1-1-img" src={item.img} alt={item.img} />
                       </div>
                       <div id="cart-section-2-div-3-1-2">
                           <p id="cart-section-2-div-3-1-2-p-1">{item.name}</p>
                           <p id="cart-section-2-div-3-1-2-p-2">$ {item.price}.00</p>
                           <p id="cart-section-2-div-3-1-2-p-3">Type : {item.categories}</p>
                       </div>
                    </div>
                    <div id="cart-section-2-div-3-2">
                     <div id="cart-section-2-div-3-2-1">
                            <p id="cart-section-2-div-3-2-1-p-1">{item.qty}</p>
                     </div>
                     <div id="cart-section-2-div-3-2-2">
                       <p id="cart-section-2-div-3-2-2-p-1">$ {item.price * item.qty}.00</p>
                     </div>
                     <div id="cart-section-2-div-3-2-3">
                       <button id="cart-section-2-div-3-2-3-button" onClick={() => cartdelete(`${item._id}`)}><FaTrash  id="cart-section-2-div-3-2-3-button-trash" /></button>
                     </div>
                    </div>
                  </div>
                ))
               }
              
          </section>

          {/* Section 3 */}

          <section id="cart-section-3">
              <div className='container' id="cart-section-3-div-1">
                  <p id="cart-section-3-div-1-p-1">Sub Total: <span id="cart-section-3-div-1-p-1-span">$ {totalAmount}/-</span></p>
                  <button onClick={() => window.location.href=`/address`} id="cart-section-3-div-1-button">Confirm & pay</button>
              </div>
          </section>

    </div>
  )
}

export default Cart;

