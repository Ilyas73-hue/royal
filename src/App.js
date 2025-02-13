import './App.css';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Gallery from './Component/Gallery/Gallery';
import Home from './Component/Home/Home';
import Footer from './Layout/Footer/Footer';
import Navbar from './Layout/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route  } from "react-router-dom";
import Register from './Component/Register/Register';
import { useState, useEffect } from 'react';
import Login from './Component/Login/Login';
import AdminRegister from './Component/AdminRegister/AdminRegister';
import AdminLogin from './Component/AdminLogin/AdminLogin';
import ProductPost from './Component/Productpost/ProductPost';
import Product from './Component/Product/Product';
import Productupdate from './Component/ProductUpdate/Productupdate';
import Menu from './Component/Menu/Menu';
import Productview from './Component/Productview/Productview';
import Cart from './Component/Cart/Cart';
import Address from './Component/Address/Address';
import Addressupdate from './Component/Addressupdate/Addressupdate';
import Order from './Component/Order/Order';
import Orderview from './Component/Orderview/Orderview';
import Adminnavbar from './Component/Adminnavbar/Adminnavbar';
import Adminorder from './Component/Adminorder/Adminorder';
import Deliveryorder from './Component/Deliveryorder/Deliveryorder';
import Cancelorder from './Component/Cancelorder/Cancelorder';
import Adminorderview from './Component/Adminorderview/Adminorderview';
import Adminhome from './Component/Adminhome/Adminhome';
import AdminScreen from './adminScreen';



function App() {

  const location  = window.location.pathname;
  // console.log("/orderview/".length)



  const [one, setOne] = useState();

   useEffect(() => {
      if(location === "/login"){
      setOne(false);
     }else if(location === "/register"){
      setOne(false);
    }
    else if(location === "/admin/product/post"){
      setOne(false);
    }
    else if(location.slice(0, 22) === "/admin/product/update/"){
      setOne(false);
    }
    else if(location === "/admin/product"){
      setOne(false);
    }
    else if(location === "/admin/register"){
      setOne(false);
    }
    else if(location === "/admin/login"){
      setOne(false);
    }
    else if(location === "/"){
      setOne(true);
    }
    else if(location === "/about"){
      setOne(true);
    } else if(location === "/gallery"){
      setOne(true);
    }else if(location === "/contact"){
      setOne(true);
    }
    else if(location === "/menu"){
      setOne(true);
    }
   else if(location.slice(0, 11) === "/menu/view/"){
    setOne(true);
   }else if(location === "/cart"){
    setOne(true);
}
else if(location === "/address"){
  setOne(true);
}else if(location.slice(0, 16) === "/address/update/"){
  setOne(true);
}else if(location === "/order"){
  setOne(true);
}else if(location.slice(0, 11) === "/orderview/"){
  setOne(true);
}
},[location])



  const [two, setTwo] = useState();

  useEffect(() => {
   if(location === "/admin/product/post"){
    setTwo(true)
   }else if(location === "/admin/product"){
    setTwo(true)
   }else if(location.slice(0, 22) === "/admin/product/update/"){
    setTwo(true)
   }else if(location === "/admin/order"){
    setTwo(true)
   }else if(location === "/admin/delivery/order"){
    setTwo(true)
   }else if(location === "/admin/cancel/order"){
    setTwo(true)
   }else if(location.slice(0, 18) === "/admin/order/view/"){
    setTwo(true)
   }else if(location === "/admin/home"){
    setTwo(true)
   }
   else if(location === "/admin/register"){
    setTwo(false)
   }
   else if(location === "/admin/login"){
    setTwo(false)
   }
  },[location])
   




  return (
    <div className="App">
      <Router>
      { one && <Navbar /> }
      { two && <Adminnavbar /> }
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/address" component={Address} />
          <Route exact path="/address/update/:id" component={Addressupdate} />
          <Route exact path="/order" component={Order} />
          <Route exact path="/orderview/:id" component={Orderview} />
          <Route exact path="/menu/view/:id" component={Productview} />
          <Route exact path="/admin/register" component={AdminRegister} />
          <Route exact path="/admin/login" component={AdminLogin} />
          <AdminScreen exact path="/admin/product/post" component={ProductPost} />
          <AdminScreen exact path="/admin/product" component={Product} />
          <AdminScreen exact path="/admin/product/update/:id" component={Productupdate} />
          <AdminScreen exact path="/admin/order" component={Adminorder} />
          <AdminScreen exact path="/admin/delivery/order" component={Deliveryorder} />
          <AdminScreen exact path="/admin/cancel/order" component={Cancelorder} />
          <AdminScreen exact path="/admin/order/view/:id" component={Adminorderview} />
          <AdminScreen exact path="/admin/home" component={Adminhome} />
        </Switch>
        { one && <Footer /> }
      </Router>
    </div>
  );
}

export default App;
