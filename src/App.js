import React from 'react';
import './App.css';
import Menu from './Menu';
import About from './About';
import Contact from './Contact';
import {BrowserRouter,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Searchpage from './Searchpage';
import Login from './Login';
import Register from './Register';
import Detailpage from "./Detailpage";
import ScrollMemory from 'react-router-scroll-memory';



function App() {
  return (
    <BrowserRouter>
    <div className="">
    <ScrollMemory/>
       <Menu/>
       <Route path="/" exact component={Home}/>
       <Route path="/About" component={About}/>
       <Route path="/Contact" component={Contact}/>
       <Route path="/Searchpage" component={Searchpage}/>
       <Route path="/Login" component={Login}/>
       <Route path="/Register" component={Register}/>
       <Route path="/Detailpage" component={Detailpage}/>
       
    </div>
    </BrowserRouter>
  );
}



export default App;
