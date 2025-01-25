import React, { useState, useEffect } from 'react';
import "./Deliveryorder.css";
import axios from "axios";
import { IoMdClose } from "react-icons/io";

function Deliveryorder() {

    const url = `http://localhost:1000`;

    const adminId = localStorage.getItem("adminId");

 const [Deliveryorder, setDeliveryorder] = useState([]);




 useEffect(() => {
     axios.get(url+`/api/order/get/`)
  .then((res) => setDeliveryorder(res.data.as))
  }, []);

 
  const adminIdfilter = Deliveryorder.filter((item) => item.adminId === adminId);

  const delivered_order = adminIdfilter.filter((item) => item.status === "Delivered");




  const storedata = [...delivered_order];

  console.log(storedata);



  return (
    <div id="Deliveryorder">
      <div id="Deliveryorder-div-1">
                {
                  storedata.map((item) => (
                      <div id="Deliveryorder-div-1-1" key={item._id}>
                         <div id="Deliveryorder-div-1-1-1">
                         {
                          item.product.map((items) => (
                              <div id="Deliveryorder-div-1-1-1-1">
                            <p id="Deliveryorder-div-1-1-1-1-p-1" key={item._id}>{items && items.name} <IoMdClose /> {items && items.qty}</p>
                              </div>
                             
                          ))
                         }
                         </div>
                         <div id="Deliveryorder-div-1-1-2">
                          <p id="Deliveryorder-div-1-1-2-p-1">$ {item.totalAmount}/-</p>
                         </div>
                         <div id="Deliveryorder-div-1-1-3">
                         <p id="Deliveryorder-div-1-1-3-p-1">{item.status}</p>
                         </div>
                         <div id="Deliveryorder-div-1-1-4">
                         <p id="Deliveryorder-div-1-1-4-p-1">{item.name}</p>
                         </div>
                      </div>
                  ))
                }
              </div>
    </div>
  )
}

export default Deliveryorder;
