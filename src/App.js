import './App.css';
import Home from './Component/Home/Home';
import Footer from './Layout/Footer/Footer';
import Navbar from './Layout/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route  } from "react-router-dom";



function App() {
  return (
    <div className="App">
    
      <Router>
      <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
