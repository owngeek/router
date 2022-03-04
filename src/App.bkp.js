import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,useHistory
} from "react-router-dom";
import Home from "./component/home"
import About from "./component/about"
import Service from "./component/service"
export default function App() {

const history = useHistory()


  return (
    <Router>


      <Link to="/">Home</Link>

      <Link to="/about">About</Link>

      <Link to="/service">Service</Link>
<button onClick={()=>{history.push("/service")}}>SERVICE</button>

      <Route path="/"> <Home /> </Route>
      <Route path="/about"> <About />  </Route>
      <Route path="/service"> <Service />  </Route>





    </Router>
  );
}

