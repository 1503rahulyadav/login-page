
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
 import Home from "../../Pages/Home";
import Accordian from "../../Pages/Accordian/index";
  // import your route components too
  function Navigation(){
      return(
          <>
          <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/accordian" element={<Accordian/>}/>
         </Routes>
        </BrowserRouter>
        </>
      )
  }
  export default Navigation