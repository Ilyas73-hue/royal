import React, { useState, useEffect } from 'react';
import "./Address.css";
import axios from "axios";

function Address() {

  const [door_no, setDoor_no] = useState("");
  const [street_name, setStreet_name] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [pincode, setPincode] = useState("");

  const [address, setAddress] = useState([]);


  useEffect(() => {
     axios.get(`http://localhost:1000/api/address/get`)
     .then((res) => setAddress(res.data.address))
     .catch((err) => console.log(err))
  },[])

  
  const address_filter = address.filter(item => item.userId.includes(localStorage.getItem("userId")))

  console.log(address_filter)

  const address_post = async(e) =>{
    e.preventDefault();

    const post = await axios.post(`http://localhost:1000/api/address/post`, {
      door_no, street_name,  city, state, country, pincode, adminId: localStorage.getItem("adminId"), userId: localStorage.getItem("userId")
    })

    console.log(post.data.address)

  } 




  return (
    <div id="address">
        {/* section 1 */}
       {/* <section id="address-section-1">
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
                   <button type='Submit' id="address-section-1-div-1-1-button">Submit</button>
                 </form>
              </div>
             </div>
       </section> */}

   {/* section 2 */}

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
                    <p id="address-section-2-div-1-1-1-p-1"><span id="address-section-2-div-1-1-1-p-1-span">Pincode:</span> {item.pincode}.</p>
                    <div id="address-section-2-div-1-1-1-flex">
                      <button id="address-section-2-div-1-1-1-flex-button-1">Next</button>
                      <button id="address-section-2-div-1-1-1-flex-button-2" onClick={() => window.location.href=`/address/update/${item._id}`}>Change Address</button>
                    </div>
                </div>
                  ))
                }
                
             </div>
         </div>
      </section>

    </div>
  )
}

export default Address
