
//import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
//import Alerts from './components/Alerts';
import Navbar from './components/Navbar';
import Game from './components/Game';
import Port from './components/Port';
 // import Textform from './components/Textform';
import Home from './components/Home';
import Achievements from './components/Achievements';
import Project from './components/Project';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // useRouteMatch,
  // useParams
} from "react-router-dom";

import Skills from './components/Skills';
import About from './components/About';

function App() {
//   const [alert,setAlert]=useState(null);
// let showAlert=(message,type)=>
// {
//   setAlert({
//     msg:message,
//     type:type
//   });
// }
  return (
   
    //below is jsx code and we can return only one elemnt ,to retrun multiple elements we use jsx fragment tag.Jsx is similiar to html but we use classname instead of class.
    <Router>
    {/* <div className="name">
      <h4>PURNA CHANDRA</h4>
    </div> */}

{/* <Alerts alert={alert} /> */}



<div  style={{backgroundColor:'black',backgroundSize:'cover',minHeight:'100vh',display:'flex',flexDirection:'column'}}>
  <div style={{ flex:'1'}}>
<Navbar name="PURNA"/> 

<Switch>
          <Route exact path="/Skills">
            <Skills style={{}}/>
          </Route>
          <Route exact path="/Project">
            <Project />
          </Route>
          <Route exact path="/Home">
          <Home></Home>
          </Route>
          <Route exact path="/About">
          <About/>
          </Route>
          <Route exact path="/Achievements">
          <Achievements/>
          </Route>
          <Route exact path="/Game">
          <Game/>
          </Route>
          <Route exact path="/Port">
          <Port/>
          </Route>
        </Switch>

        </div>
        <div>
<Footer/>
</div>
</div>
</Router>


   
  );
}
export default App;
