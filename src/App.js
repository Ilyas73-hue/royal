import './App.css';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Gallery from './Component/Gallery/Gallery';
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
          <Route exact path="/about" component={About} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
