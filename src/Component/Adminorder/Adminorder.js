import React, { useState, useEffect } from 'react';
import "./Adminorder.css";
import axios from "axios";
import { IoMdClose } from "react-icons/io";

function Adminorder() {


     const url = `http://localhost:1000`;

     const adminId = localStorage.getItem("adminId");

  const [adminorder, setAdminOrder] = useState([]);

  useEffect(() => {
      axios.get(url+`/api/order/get/`)
   .then((res) => setAdminOrder(res.data.as))
   }, []);

  
   const adminIdfilter = adminorder.filter((item) => item.adminId === adminId);

   const pending_order = adminIdfilter.filter((item) => item.status === "Pending");

   const food_processing_order = adminIdfilter.filter((item) => item.status === "Food Processing");

   const out_of_devivery_order = adminIdfilter.filter((item) => item.status === "Out Of Delivery");

   const storedata = [...pending_order, ...food_processing_order, ...out_of_devivery_order];

   console.log(storedata)

  return (
    <div id="adminorder">
        <div id="adminorder-div-1">
          {
            storedata.map((item) => (
                <div id="adminorder-div-1-1">
                   <div id="adminorder-div-1-1-1">
                   {
                    item.product.map((items) => (
                        <div id="adminorder-div-1-1-1-1">
                      <p id="adminorder-div-1-1-1-1-p-1" key={item._id}>{items && items.name} <IoMdClose /> {items && items.qty}</p>
                        </div>
                       
                    ))
                   }
                   </div>
                   <div id="adminorder-div-1-1-2">
                    <p id="adminorder-div-1-1-2-p-1">$ {item.totalAmount}/-</p>
                   </div>
                   <div id="adminorder-div-1-1-3">
                   <p id="adminorder-div-1-1-3-p-1">{item.status}</p>
                   </div>
                   <div id="adminorder-div-1-1-4">
                   <p id="adminorder-div-1-1-4-p-1">{item.name}</p>
                   </div>
                </div>
            ))
          }
        </div>
    </div>
  )
}

export default Adminorder
