import React from "react";
import Navbar from "./components/navbar/navbar";
import Tour from "./Tour/tour-list";
import "./App.scss";
function App(){
  return(
  <div>
  <Navbar/>
  <Tour/>
  </div>
);
}
export default App;
