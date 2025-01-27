import React, { useState, useEffect } from 'react';
import "./Adminhome.css";
import axios from "axios";

function Adminhome() {

    const url = `http://localhost:1000`;

    const [product, setProduct] = useState([]);
    const [order, setOrder] = useState([]);

    const adminId = localStorage.getItem("adminId")

    useEffect(() => {
     axios.get(url+`/api/menu/get`)
     .then((res) => setProduct(res.data.menu));
    },[])

    useEffect(() => {
        axios.get(url+`/api/order/get`)
        .then((res) => setOrder(res.data.as));
       },[])

    const menu_filter = product.filter((item) => item.adminId === adminId);

    const order_filter = order.filter((item) => item.adminId === adminId);

    const cancel_order = order_filter.map((item) => item.status === "Cancel Order")

    const pending_order = order_filter.map((item) => item.status === "pending")


  console.log(cancel_order.length)

  return (
    <div id="adminhome">
      <section className='container' id="adminhome-section-1">
         <div id="adminhome-section-1-div-1">
           <p id="adminhome-section-1-div-1-p-1">Total Menu Item</p>
           <p id="adminhome-section-1-div-1-p-2">{menu_filter && menu_filter.length}</p>
         </div>
         <div id="adminhome-section-1-div-1">
           <p id="adminhome-section-1-div-1-p-1">Total Orders</p>
           <p id="adminhome-section-1-div-1-p-2">{order_filter && order_filter.length}</p>
         </div>
         {/* <div id="adminhome-section-1-div-1">
           <p id="adminhome-section-1-div-1-p-1">Cancel Order</p>
           <p id="adminhome-section-1-div-1-p-2">{cancel_order && cancel_order.length}</p>
         </div>
         <div id="adminhome-section-1-div-1">
           <p id="adminhome-section-1-div-1-p-1">Pending Order</p>
           <p id="adminhome-section-1-div-1-p-2">{pending_order && pending_order.length}</p>
         </div> */}
      </section>
    </div>
  )
}

export default Adminhome;