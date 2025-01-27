import React, { useState, useEffect } from 'react';
import "./Adminhome.css";
import axios from "axios";

function Adminhome() {

  const url = "https://royal-backend-1.onrender.com";

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

    const cancel_order = order_filter.map((item) => item.status === "Cancel Order");

    const totalAmount = order_filter.map(item => item.totalAmount);

    const sum_total = totalAmount.map((item) => parseInt(item)).reduce((sum, item) => sum + item,0);

console.log(sum_total)

  console.log(totalAmount)

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
         <div id="adminhome-section-1-div-1">
           <p id="adminhome-section-1-div-1-p-1">Total Amount</p>
           <p id="adminhome-section-1-div-1-p-2">$ {sum_total}/-</p>
         </div>
      </section>
    </div>
  )
}

export default Adminhome;