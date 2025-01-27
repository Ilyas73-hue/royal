import React, { useState, useEffect } from 'react';
import axios from "axios";
import  { useParams } from "react-router-dom";


function Productupdate() {

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

const {id} = useParams()


   const [img, setImg] = useState("");





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
        // setImg(reader.result);
        setTempData({ ...tempData, img: reader.result })
    }
}





   const data = async(e) => {
     e.preventDefault();

     const post = await axios.put(`http://localhost:1000/api/menu/update/${id}`, 
        tempData
     )

     console.log(post)

   }


   const [datas, setDatas] = useState();
   const [tempData, setTempData] = useState();

 console.log(img)

   useEffect(() => {
     const get = axios.get(`http://localhost:1000/api/menu/get/${id}`)
     get.then((res) => { setDatas(res.data.menu) 
        setTempData(res.data.menu) })
     .catch((err) => console.log(err));
     },[]);


     
     
     console.log(tempData)


  return (
    <div id="product-post">
        <div id="product-post-1">  
            <h6 id="product-post-1-h6-1">Product Update</h6>
           <form onSubmit={data} id="product-post-1-form">
             <input id="product-post-1-form-input-1" type="text" value={tempData && tempData.name}  onChange={(e) => setTempData({ ...tempData, name: e.target.value })}  placeholder='Enter Name' required/>
             <input id="product-post-1-form-input-2" type="text"  value={tempData && tempData.price} onChange={(e) => setTempData({ ...tempData, price: e.target.value })}  placeholder='Enter price' required/>
             <input id="product-post-1-form-input-3" type="file"  onChange={handleImage}   requied/>
             <select id="product-post-1-form-input-4" name="categories" value={tempData && tempData.categories }  onChange={(e) => setTempData({ ...tempData, categories: e.target.value })} required>
               {
                categories_dropdown.map((item) => (
                    <option value={item.data}>{item.label}</option>
                ))
               }
             </select>
             <textarea id="product-post-1-form-input-5" value={tempData && tempData.description} onChange={(e) => setTempData({ ...tempData, description: e.target.value })} type="text" placeholder='Enter Description' required></textarea>
            <button id="product-post-1-form-submit" type="submit">Submit</button>
           </form>

        </div>
    </div>
  )
}

export default Productupdate
