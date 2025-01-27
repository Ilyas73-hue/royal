import React, { useState, useEffect } from 'react';
import "./Addressupdate.css";
import axios from "axios";
import { useParams } from 'react-router-dom/cjs/react-router-dom';

function Addressupdate() {


  const url = "https://royal-backend-1.onrender.com";

   const [address, setAddress] = useState();
      const [tempData, setTempData] = useState();

   const { id } = useParams()

   useEffect(() => {
    axios.get(url+`/api/address/get/${id}`)
    .then((res) => {setAddress(res.data.address)
      setTempData(res.data.address)
    })
    .catch((err) => console.log(err))
   },[]);

   const data = async(e) => {
    e.preventDefault();

    const post = await axios.put(url+`/api/address/update/${id}`, 
      tempData
    )
    
    if(post.status === 201){
      window.location.href="/cart"
    }

   }

  return (
    <div id="address-update">
           <section id="address-section-1">
             <div className='container' id="address-section-1-div-1">
              <div onSubmit={data} id="address-section-1-div-1-1">
                 <h6 id="address-section-1-div-1-1-h6">Address Update Form</h6>
                 <form  id="address-section-1-div-1-1-form">
                   <input id="address-section-1-div-1-1-form-input-1" type="text" value={tempData && tempData.door_no}  onChange={(e) => setTempData({ ...tempData, door_no: e.target.value })} placeholder='Enter Door No'  required/>
                   <input id="address-section-1-div-1-1-form-input-2" type="text" value={tempData && tempData.street_name}  onChange={(e) => setTempData({ ...tempData, street_name: e.target.value })} placeholder='Enter Street Name'  required />
                   <input id="address-section-1-div-1-1-form-input-3" type="text" value={tempData && tempData.city}  onChange={(e) => setTempData({ ...tempData, city: e.target.value })} placeholder='Enter City'  required />
                   <input id="address-section-1-div-1-1-form-input-4" type="text" value={tempData && tempData.state}  onChange={(e) => setTempData({ ...tempData, state: e.target.value })} placeholder='Enter State'  required />
                   <input id="address-section-1-div-1-1-form-input-5" type="text" value={tempData && tempData.country}  onChange={(e) => setTempData({ ...tempData, country: e.target.value })} placeholder='Enter Country'  required />
                   <input id="address-section-1-div-1-1-form-input-6" type="text" value={tempData && tempData.pincode}  onChange={(e) => setTempData({ ...tempData, pincode: e.target.value })} placeholder='Enter Pincode'  required />
                   <input id="address-section-1-div-1-1-form-input-6" type="text" value={tempData && tempData.phone_no}  onChange={(e) => setTempData({ ...tempData, phone_no: e.target.value })} placeholder='Enter Phone No'  required />
                   <button type='Submit' id="address-section-1-div-1-1-button">Submit</button>
                 </form>
              </div>
             </div>
       </section> 
    </div>
  )
}

export default Addressupdate
