import React, { useState, useEffect } from 'react';
import axios from "axios";


function Product() {


    const [data, setData] = useState([]);


    useEffect(() => {
      const get = axios.get(`http://localhost:1000/api/menu/get`)
      get.then((res) => setData(res.data.menu))
      .catch((err) => console.log(err));
      },[]);

      const handleDelete = async(id) => {
        const datadelete = await axios.delete(`http://localhost:1000/api/menu/delete/${id}`)
         window.location.reload()
        return  datadelete
      }
      
      console.log(data)

  return (
    <div id="product">
          <div id="product-data">
            {
                data.map((item, i) => (
                    <div key={i}>
                    <p>{item.name}</p>
                    <button onClick={() => window.location.href=`/admin/product/update/${item._id}`}>Update</button>
                    <button onClick={() => handleDelete(item._id)}>Delete</button>
                    </div>               
                ))
            }
          </div>
    </div>
  )
}

export default Product;
