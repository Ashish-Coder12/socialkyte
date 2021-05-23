import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from "./Pages/Home";
import Platform from "./Pages/Platform";
import Network from "./Pages/Network";
import Notification from "./Pages/Notification";
import Discovery from "./Pages/Discovery";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import { FaRegMoon, FaRegSun } from 'react-icons/fa';
import Search from './Pages/Search';

function App() {
  const [mode,setMode]=useState(true)
  console.log(mode);
  return (
   <div className={mode?"app" : "app night"}>
     <BrowserRouter>
         <Navbar/>
         <Switch>
           <Route path="/platform" component={Platform}/>
           <Route path="/network" component={Network}/>
           <Route path="/notification" component={Notification}/>
           <Route path="/discovery" component={Discovery}/>
           <Route path="/search" component={Search}/>
           <Route path="/" component={Home}/>
         </Switch>
         <button className="nightMode" onClick={()=>{setMode(!mode)}}>{mode?<FaRegMoon/>:<FaRegSun/>} </button>
     </BrowserRouter>
   </div>
  );
}

export default App;
