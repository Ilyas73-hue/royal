import React, { useState, useEffect } from 'react';
import "./Adminorder.css";
import axios from "axios";
import { IoMdClose } from "react-icons/io";

function Adminorder() {


  const url = "https://royal-backend-1.onrender.com";
  
     const adminId = localStorage.getItem("adminId");

  const [adminorder, setAdminOrder] = useState([]);

  const [updatestatus, setUpdatestatus] = useState("")



  useEffect(() => {
      axios.get(url+`/api/order/get/`)
   .then((res) => setAdminOrder(res.data.as))
   }, []);

  
   const adminIdfilter = adminorder.filter((item) => item.adminId === adminId);

   const pending_order = adminIdfilter.filter((item) => item.status === "Pending");

   const food_processing_order = adminIdfilter.filter((item) => item.status === "Food Processing");

   const waiting_for_delivery_order = adminIdfilter.filter((item) => item.status === "Waiting For Delivery");

   const out_of_devivery_order = adminIdfilter.filter((item) => item.status === "Out Of Delivery");



   const storedata = [...pending_order, ...food_processing_order, ...out_of_devivery_order, ...waiting_for_delivery_order];

   console.log(updatestatus);


   const status = async(id) => {

     const update = await axios.patch(url+`/api/order/update/${id}`, {
      status: updatestatus
     });

     if(update.status === 200){
        alert("status updated successfully...")
        window.location.reload()
     }

    console.log(update)

   }

  return (
    <div id="adminorder">
        <div id="adminorder-div-1">
          {
            storedata.map((item) => (
                <div id="adminorder-div-1-1" key={item._id}>
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
                   <div id="adminorder-div-1-1-5">
                        <select id="adminorder-div-1-1-5-1" onChange={(e) => setUpdatestatus(e.target.value)}>
                        <option> Status Update </option>
                          <option value="Food Processing"> Food Processing </option>
                          <option value="Waiting For Delivery"> Waiting For Delivery </option>
                          <option value="Out Of Delivery"> Out Of Delviery </option>
                          <option value="Delivered"> Delivered </option>
                        </select>
                   </div>
                   <div id="adminorder-div-1-1-6">
                     <button id="adminorder-div-1-1-6-button" onClick={() => status(`${item._id}`)}>Update</button>
                   </div>
                   <div id="adminorder-div-1-1-6">
                     <button id="adminorder-div-1-1-6-button" onClick={() => window.location.href=`/admin/order/view/${item._id}`} >View</button>
                   </div>
                </div>
            ))
          }
        </div>
    </div>
  )
}

export default Adminorder
