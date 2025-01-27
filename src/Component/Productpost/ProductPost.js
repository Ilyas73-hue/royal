import React, { useState } from 'react';
import "./ProductPost.css";
import axios from "axios";


function ProductPost() {

    const categories_dropdown = [
        {
            label: "Categories",
            data:""
        }
        ,{
        label:"Desi Breakfast",
        data:"Desi Breakfast"
    }, {
         label:"Super Deals",
          data:"Super Deals"
    },{
          label:"Special Non Veg Dishes",
           data:"Special Non Veg Dishes"
    }]

   const [name, setName] = useState("");
   const [price, setPrice] = useState("");
   const [img, setImg] = useState("")
   const [categories, setCategories] = useState("");
   const [description, setDescription] = useState("");

   console.log(img);

   const handleEvent =(e) => {
    setCategories(e.target.value)
   }

// Image upload
   const handleImage = (e) =>{
    const file = e.target.files[0];
    setFileToBase(file);
    console.log(file);
}

const setFileToBase = (file) =>{
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () =>{
        setImg(reader.result);
    }
}

const url = "https://royal-backend-1.onrender.com";

   const data = async(e) => {
     e.preventDefault();

     const post = await axios.post(url+`/api/menu/post`, {
        name, price, img,categories,description, adminId: localStorage.getItem("adminId")
     })

     if(post.status === 201){
      alert("Product Post Successfully...");
      window.location.reload();
     }else if(post.status === 400){
      alert("please Check Internet");
      window.location.reload();
     }


   }


  return (
    <div id="product-post">
        <div id="product-post-1">  
            <h6 id="product-post-1-h6-1">Product Post</h6>
           <form onSubmit={data} id="product-post-1-form">
             <input id="product-post-1-form-input-1" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Name' required/>
             <input id="product-post-1-form-input-2" type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder='Enter price' required/>
             <input id="product-post-1-form-input-3" type="file" onChange={handleImage}   requied/>
             <select id="product-post-1-form-input-4" name="categories"  onChange={handleEvent} required>
               {
                categories_dropdown.map((item) => (
                    <option value={item.data}>{item.label}</option>
                ))
               }
             </select>
             <textarea id="product-post-1-form-input-5" value={description} onChange={(e) => setDescription(e.target.value)} type="text" placeholder='Enter Description' required></textarea>
            <button id="product-post-1-form-submit" type="submit">Submit</button>
           </form>

        </div>
    </div>
  )
}

export default ProductPost
