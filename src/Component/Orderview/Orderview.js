import React, { useState, useEffect } from 'react';
import "./Orderview.css";
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import axios from "axios";
import { IoMdClose } from "react-icons/io";

function Orderview() {

  const url = "https://royal-backend-1.onrender.com";


  const { id } = useParams();

  console.log(id);

  const [adminorderview, setAdminorderview] = useState();

  useEffect(() => {
    axios.get(url+`/api/order/get/${id}`)
    .then((res) => setAdminorderview(res.data.ords))
    .catch((err) => console.log(err))
  },[]);

  console.log(adminorderview)

  return (
    <div id="orderview">
       {/* Section 1 */}
       <section id="orderview-section-1">
           <div id="orderview-section-1-div-1">
             <p id="orderview-section-1-div-1-p-1">Indian Restaurant Birmingham - 
             Royal Mysore Dosa</p>
           </div>
           <div  id="orderview-section-1-div-2">
              <p id="orderview-section-1-div-2-p-1">Orderview</p>
              <p id="orderview-section-1-div-2-p-2">Home > Orderview</p>
           </div>
           </section>

          {/* Section 2 */}

           <section className='container' id="orderview-section-2">
                      <button id="orderview-section-2-back" onClick={() => window.location.href=`/order`}>Back</button>
                       <div id="orderview-section-2-div-1">
                           {
                            adminorderview && adminorderview.product.map((item) => (
                                <div id="orderview-section-2-div-1-1">
                                   <div id="orderview-section-2-div-1-1-1">
                                     <img id="orderview-section-2-div-1-1-1-img" src={item.img} alt={item.img} />
                                   </div>
                                   <div id="orderview-section-2-div-1-1-2">
                                     <p id="orderview-section-2-div-1-1-2-p-1">{item.name} <IoMdClose /> {item.qty}</p>
                                     <p id="orderview-section-2-div-1-1-2-p-2"><span id="orderview-section-2-div-1-1-2-p-2-span">Type:</span> {item.categories}</p>
                                   </div>
                                </div>
                              ))
                           }
                       </div>
                       <div id="orderview-section-2-div-2">
                          {
                              adminorderview && adminorderview.address.map((item)=> (
                                  <div id="orderview-section-2-div-2-1">
                                       <p id="orderview-section-2-div-2-1-p-1"><span id="orderview-section-2-div-2-1-p-1-span">Customer Name:</span>  {adminorderview.name}.</p>
                                       <p id="orderview-section-2-div-2-1-p-2"><span id="orderview-section-2-div-2-1-p-2-span">Phone No:</span>  {item.phone_no}.</p>
                                       <p id="orderview-section-2-div-2-1-p-3"><span id="orderview-section-2-div-2-1-p-3-span">Email:</span>  {adminorderview.email}.</p>
                                       <p id="orderview-section-2-div-2-1-p-4"><span id="orderview-section-2-div-2-1-p-4-span">Address:</span>  {item.door_no}, {item.street_name}, {item.city}, {item.state}, {item.country}, {item.pincode}.</p>
          
                                  </div>
                              ))
                          }
                       <div id="orderview-section-2-div-2-2">
                          <div id="orderview-section-2-div-2-2-1">
                             <p id="orderview-section-2-div-2-2-1-p-1"><span id="orderview-section-2-div-2-2-1-p-1-span">Total Amount:</span> {adminorderview && adminorderview.totalAmount} /-</p>
                             <p id="orderview-section-2-div-2-2-1-p-2"><span id="orderview-section-2-div-2-2-1-p-2-span">Payment Mode:</span> Online.</p>
                          </div>
                          <div id="orderview-section-2-div-2-2-2">
                          <p id="orderview-section-2-div-2-2-1-p-2"><span id="orderview-section-2-div-2-2-1-p-2-span">Order Status:</span> {adminorderview && adminorderview.status}.</p>
                          </div>
                       </div>
                       </div>
                  </section>
    </div>
  )
}

export default Orderview
