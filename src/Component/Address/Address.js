import React, { useState, useEffect } from 'react';
import "./Address.css";
import axios from "axios";
import StripeCheckout from 'react-stripe-checkout';

function Address() {

  const [door_no, setDoor_no] = useState("");
  const [street_name, setStreet_name] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [pincode, setPincode] = useState("");
  const [phone_no, setPhoneno] = useState("");

  const [address, setAddress] = useState([]);
  const [menu_cart, setMenucart] = useState([]);


  useEffect(() => {
     axios.get(`http://localhost:1000/api/address/get`)
     .then((res) => setAddress(res.data.address))
     .catch((err) => console.log(err))
  },[])

  useEffect(() => {
    axios.get(`http://localhost:1000/api/cart/get`)
    .then((res) => setMenucart(res.data.cart))
    .catch((err) => console.log(err))
   },[]);

  //  cart data

   const userId_filter = menu_cart.filter(item => item.userId.includes(localStorage.getItem("userId")))

   console.log(userId_filter)


  //  total Amount

   const totalAmount = userId_filter.map(item => item.qty  * item.price ).reduce((sum, item ) => sum + item,0);

   console.log(totalAmount)
  
  const address_filter = address.filter(item => item.userId.includes(localStorage.getItem("userId")))

  console.log(address_filter)

  const address_post = async(e) =>{
    e.preventDefault();

    const post = await axios.post(`http://localhost:1000/api/address/post`, {
      door_no, street_name,  city, state, country, pincode, adminId: localStorage.getItem("adminId"), userId: localStorage.getItem("userId")
    })

    console.log(post.data.address)

  } 


  console.log(address_filter.length)

  const stripe = 'pk_test_51BTUDGJAJfZb9HEBwDg86TN1KNprHjkfipXmEDMb0gSCassK5T3ZfxsAbcgKVmAIXF7oZ6ItlZZbXO6idTHE67IM007EwQ4uN3';

  const checkout = async(token) => {
   
    
    const post  = await axios.post(`http://localhost:1000/api/order/post`, {
      stripe_id: stripe, name: localStorage.getItem("username"), address: address_filter, product: userId_filter, totalAmount: totalAmount, token, userId: localStorage.getItem("userId"), adminId: localStorage.getItem("adminId")
    })

    console.log(post)
  
  }



  return (
    <div id="address">
     

    {
      address_filter.length === 0 ? (

          <section id="address-section-1">
             <div className='container' id="address-section-1-div-1">
              <div  id="address-section-1-div-1-1">
                 <h6 id="address-section-1-div-1-1-h6">Address Form</h6>
                 <form onSubmit={address_post} id="address-section-1-div-1-1-form">
                   <input id="address-section-1-div-1-1-form-input-1" type="text" placeholder='Enter Door No' value={door_no} onChange={(e) => setDoor_no(e.target.value)} required/>
                   <input id="address-section-1-div-1-1-form-input-2" type="text" placeholder='Enter Street Name' value={street_name} onChange={(e) => setStreet_name(e.target.value)} required />
                   <input id="address-section-1-div-1-1-form-input-3" type="text" placeholder='Enter City' value={city} onChange={(e) => setCity(e.target.value)} required />
                   <input id="address-section-1-div-1-1-form-input-4" type="text" placeholder='Enter State' value={state} onChange={(e) => setState(e.target.value)} required />
                   <input id="address-section-1-div-1-1-form-input-5" type="text" placeholder='Enter Country' value={country} onChange={(e) => setCountry(e.target.value)} required />
                   <input id="address-section-1-div-1-1-form-input-6" type="text" placeholder='Enter Pincode' value={pincode} onChange={(e) => setPincode(e.target.value)} required />
                   <input id="address-section-1-div-1-1-form-input-6" type="text" placeholder='Enter Phone No' value={phone_no} onChange={(e) => setPhoneno(e.target.value)} required />
                   <button type='Submit' id="address-section-1-div-1-1-button">Submit</button>
                 </form>
              </div>
             </div>
       </section> 

      ) : (


 <section id="address-section-2">
 <div className='container' id="address-section-2-div-1">
     <div id="address-section-2-div-1-1">
        <h6 id="address-section-2-div-1-1-h6">Address Detial</h6>
        {
          address_filter.map(item => (
        <div id="address-section-2-div-1-1-1" key={item._id}>
            <p id="address-section-2-div-1-1-1-p-1"><span id="address-section-2-div-1-1-1-p-1-span">Door No:</span> {item.door_no},</p>
            <p id="address-section-2-div-1-1-1-p-1"><span id="address-section-2-div-1-1-1-p-1-span">Street Name:</span> {item.street_name},</p>
            <p id="address-section-2-div-1-1-1-p-1"><span id="address-section-2-div-1-1-1-p-1-span">City:</span> {item.city},</p>
            <p id="address-section-2-div-1-1-1-p-1"><span id="address-section-2-div-1-1-1-p-1-span">State:</span> {item.state},</p>
            <p id="address-section-2-div-1-1-1-p-1"><span id="address-section-2-div-1-1-1-p-1-span">Country:</span> {item.country},</p>
            <p id="address-section-2-div-1-1-1-p-1"><span id="address-section-2-div-1-1-1-p-1-span">Pincode:</span> {item.pincode},</p>
            <p id="address-section-2-div-1-1-1-p-1"><span id="address-section-2-div-1-1-1-p-1-span">Phone No:</span> {item.phone_no}.</p>
            <div id="address-section-2-div-1-1-1-flex">
              <StripeCheckout stripeKey={stripe} token={checkout}><button id="address-section-2-div-1-1-1-flex-button-1">Checkout</button></StripeCheckout>
              <button id="address-section-2-div-1-1-1-flex-button-2" onClick={() => window.location.href=`/address/update/${item._id}`}>Change Address</button>
            </div>
        </div>
          ))
        }
        
     </div>
 </div>
</section>

      )
    }

      

  

    </div>
  )
}

export default Address
