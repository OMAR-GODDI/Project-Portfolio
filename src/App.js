import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Home from "./components/Home/Home"
import Navbar from './components/Navbar';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio';
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path= '/portfolio' component={Portfolio}/>
          <Route path= '/contact' component={Contact}/>

 
  </Switch>
  </Router>
    </div>
  );
}

export default App;
