import React, { useState, useEffect } from 'react';
import "./Cancelorder.css";
import axios from "axios";
import { IoMdClose } from "react-icons/io";

function Cancelorder() {

  const url = `http://localhost:1000`;

    const adminId = localStorage.getItem("adminId");

 const [cancelorder, setcancelorder] = useState([]);




 useEffect(() => {
     axios.get(url+`/api/order/get/`)
  .then((res) => setcancelorder(res.data.as))
  }, []);

 
  const adminIdfilter = cancelorder.filter((item) => item.adminId === adminId);

  const delivered_order = adminIdfilter.filter((item) => item.status === "Cancel Order");




  const storedata = [...delivered_order];

  console.log(storedata);

 

  return (
    <div id="cancelorder">
       <div id="cancelorder-div-1">
                      {
                        storedata.map((item) => (
                            <div id="cancelorder-div-1-1" key={item._id}>
                               <div id="cancelorder-div-1-1-1">
                               {
                                item.product.map((items) => (
                                    <div id="cancelorder-div-1-1-1-1">
                                  <p id="cancelorder-div-1-1-1-1-p-1" key={item._id}>{items && items.name} <IoMdClose /> {items && items.qty}</p>
                                    </div>
                                   
                                ))
                               }
                               </div>
                               <div id="cancelorder-div-1-1-2">
                                <p id="cancelorder-div-1-1-2-p-1">$ {item.totalAmount}/-</p>
                               </div>
                               <div id="cancelorder-div-1-1-3">
                               <p id="cancelorder-div-1-1-3-p-1">{item.status}</p>
                               </div>
                               <div id="cancelorder-div-1-1-4">
                               <p id="cancelorder-div-1-1-4-p-1">{item.name}</p>
                               </div>
                               <div id="cancelorder-div-1-1-5">
                              <button onClick={() => window.location.href=`/admin/order/view/${item._id}`} id="cancelorder-div-1-1-5-button">View</button>
                               </div>
                            </div>
                        ))
                      }
                    </div>
    </div>
  )
}

export default Cancelorder
