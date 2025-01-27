import React, { useState, useEffect } from 'react';
import './Order.css';
import axios from "axios";
import { IoMdClose } from "react-icons/io";

function Order() {

  const url = "https://royal-backend-1.onrender.com";

  const userId = localStorage.getItem("userId")

  const [order, setOrder] = useState([]);
   
  useEffect(() => {
    axios.get(url+ `/api/order/findget/${userId}`)
    .then((res) => setOrder(res.data.o))
    .catch((err) => console.log(err))
  },[])

  console.log(order)

  const cancelOrder = async(id) =>{
   
    const update = await axios.patch(url+`/api/order/update/${id}`, {
        status: "Cancel Order"
    }
    )

    if(update.status === 200){
      window.location.reload()
    }

  } 

  return (
    <div id="order">
            {/* Section 1 */}
<section id="order-section-1">
           <div id="order-section-1-div-1">
             <p id="order-section-1-div-1-p-1">Indian Restaurant Birmingham - 
             Royal Mysore Dosa</p>
           </div>
           <div  id="order-section-1-div-2">
              <p id="order-section-1-div-2-p-1">Order</p>
              <p id="order-section-1-div-2-p-2">Home > Order</p>
           </div>
           </section>

  {/* Section 2  */}

  <section id="order-section-2">
       <div className='container' id="order-section-2-div-1">
          <h6 id="order-section-2-div-1-h6-1">My Order</h6>
       </div>
       <div className='container' id="order-section-2-div-2">
        {
          order.map((item) => (
            <div  id="order-section-2-div-2-1" key={item._id}>
              <div id="order-section-2-div-2-1-2">
            {
              item.product.map((data) => (
            
              <p id="order-section-2-div-2-1-2-p-1">{data.name} <IoMdClose /> {data.qty}</p>
           
              ))
            }
             </div>
            <div id="order-section-2-div-2-1-3">
             <p id="order-section-2-div-2-1-3-p-1">$ {item.totalAmount}</p>
            </div>
            <div id="order-section-2-div-2-1-3">
             <p id="order-section-2-div-2-1-3-p-1">Items:  {item.product.length}</p>
            </div>
            <div id="order-section-2-div-2-1-5">
             <button onClick={() => window.location.href=`/orderview/${item._id}`} id="order-section-2-div-2-1-5-button">View</button>
            </div>
          </div>
          ))
        }
     
       </div>
  </section>

    </div>
  )
}

export default Order
