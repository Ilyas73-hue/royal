import './App.css';
import Home from './Component/Home/Home';
import Navbar from './Layout/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route  } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
