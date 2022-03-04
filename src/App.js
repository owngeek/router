import React from "react";
import {
  Routes,
  Route,
  Link,useNavigate
} from "react-router-dom";
import Home from "./component/home"
import About from "./component/about"
import Service from "./component/service"
export default function App() {

const navigate = useNavigate()


  return (
<Routes>



      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/service" element={<Service/>}></Route>

      </Routes>

  );
}


