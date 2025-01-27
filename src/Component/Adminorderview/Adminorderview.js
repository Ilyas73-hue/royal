import React, { useEffect, useState } from 'react';
import "./Adminorderview.css";
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import axios from "axios";
import { IoMdClose } from "react-icons/io";

function Adminorderview() {

    const url = `http://localhost:1000`;


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
    <div id="adminorderview">
        <section className='container' id="adminorderview-section-1">
            <button id="adminorderview-section-1-back" onClick={() => window.location.href=`/admin/order`}>Back</button>
             <div id="adminorderview-section-1-div-1">
                 {
                  adminorderview && adminorderview.product.map((item) => (
                      <div id="adminorderview-section-1-div-1-1">
                         <div id="adminorderview-section-1-div-1-1-1">
                           <img id="adminorderview-section-1-div-1-1-1-img" src={item.img} alt={item.img} />
                         </div>
                         <div id="adminorderview-section-1-div-1-1-2">
                           <p id="adminorderview-section-1-div-1-1-2-p-1">{item.name} <IoMdClose /> {item.qty}</p>
                           <p id="adminorderview-section-1-div-1-1-2-p-2"><span id="adminorderview-section-1-div-1-1-2-p-2-span">Type:</span> {item.categories}</p>
                         </div>
                      </div>
                    ))
                 }
             </div>
             <div id="adminorderview-section-1-div-2">
                {
                    adminorderview && adminorderview.address.map((item)=> (
                        <div id="adminorderview-section-1-div-2-1">
                             <p id="adminorderview-section-1-div-2-1-p-1"><span id="adminorderview-section-1-div-2-1-p-1-span">Customer Name:</span>  {adminorderview.name}.</p>
                             <p id="adminorderview-section-1-div-2-1-p-2"><span id="adminorderview-section-1-div-2-1-p-2-span">Phone No:</span>  {item.phone_no}.</p>
                             <p id="adminorderview-section-1-div-2-1-p-3"><span id="adminorderview-section-1-div-2-1-p-3-span">Email:</span>  {adminorderview.email}.</p>
                             <p id="adminorderview-section-1-div-2-1-p-4"><span id="adminorderview-section-1-div-2-1-p-4-span">Address:</span>  {item.door_no}, {item.street_name}, {item.city}, {item.state}, {item.country}, {item.pincode}.</p>

                        </div>
                    ))
                }
             <div id="adminorderview-section-1-div-2-2">
                <div id="adminorderview-section-1-div-2-2-1">
                   <p id="adminorderview-section-1-div-2-2-1-p-1"><span id="adminorderview-section-1-div-2-2-1-p-1-span">Total Amount:</span> {adminorderview && adminorderview.totalAmount} /-</p>
                   <p id="adminorderview-section-1-div-2-2-1-p-2"><span id="adminorderview-section-1-div-2-2-1-p-2-span">Payment Mode:</span> Online.</p>
                </div>
                <div id="adminorderview-section-1-div-2-2-2">
                <p id="adminorderview-section-1-div-2-2-1-p-2"><span id="adminorderview-section-1-div-2-2-1-p-2-span">Order Status:</span> {adminorderview && adminorderview.status}.</p>
                </div>
             </div>
             </div>
        </section>
    </div>
  )
}

export default Adminorderview
