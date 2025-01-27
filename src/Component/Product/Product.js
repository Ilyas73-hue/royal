import React, { useState, useEffect } from 'react';
import axios from "axios";
import "./Product.css";


function Product() {


    const [data, setData] = useState([]);
    const [adminproduct, setAdminProduct] = useState([]);

    const url = "https://royal-backend-1.onrender.com";

    const adminId = localStorage.getItem("adminId");


    useEffect(() => {
      const get = axios.get(url+`/api/menu/get`)
      get.then((res) => { setData(res.data.menu) 
        setAdminProduct(res.data.menu)} )
      .catch((err) => console.log(err));
      },[]);

      const handleDelete = async(id) => {
        const datadelete = await axios.delete(url+`/api/menu/delete/${id}`)
         window.location.reload()
        return  datadelete
      }
      
      console.log(data)

       const adminProduct = adminproduct.filter((item) => item.adminId === adminId)

                          // <div key={i}>
                    // <p>{item.name}</p>
                    // <button onClick={() => window.location.href=`/admin/product/update/${item._id}`}>Update</button>
                    // <button onClick={() => handleDelete(item._id)}>Delete</button>
                    // </div>      

                    console.log()

  return (
    <div id="product">
          <div id="product-data">
            {
                adminProduct.map((item, i) => (
                  <div id="product-data-section-1" key={item._id}>
                      <div id="product-data-section-1-div-1">
                            <div id="product-data-section-1-div-1-1">
                             <img id="product-data-section-1-div-1-1-img" src={item.img} alt={item.img} />
                            </div>
                            <div id="product-data-section-1-div-1-2">
                              <p id="product-data-section-1-div-1-2-p-1">{item.name}</p>
                              <p id="product-data-section-1-div-1-2-p-2">$ {item.price}/-</p>
                              <p id="product-data-section-1-div-1-2-p-3"><span id="product-data-section-1-div-1-2-p-3-span">Type:</span>  {item.categories}</p>
                              <p id="product-data-section-1-div-1-2-p-4"><span id="product-data-section-1-div-1-2-p-4-span">Description:</span>  {item.description}</p>
                            </div>
                            <div id="product-data-section-1-div-1-3">
                              <button onClick={() => window.location.href=`/admin/product/update/${item._id}`} id="product-data-section-1-div-1-3-update">Update</button>
                              <button onClick={() => handleDelete(`${item._id}`)} id="product-data-section-1-div-1-3-delete">Delete</button>
                            </div>
                      </div>
                  </div>
                ))
            }
          </div>
    </div>
  )
}

export default Product;
