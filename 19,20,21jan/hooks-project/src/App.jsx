import { useEffect, useState } from "react";
import NavBar from "./Components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import Contact from "./Components/Contact";
import ImageViewer from "./Components/ImageViewer";
import { MyContext } from "./utils/useContext";
import Demo from "./Components/Demo";

function App() {
  const[store, setStore] = useState({
      name:"modi",
      age:"99",
      life:"about to die",
      heading:"heading in context"
  })
  return(
    <>
    <MyContext.Provider value={{store:store, setStore:setStore}}>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/dashboard" element = {<Home/>}/>
        <Route path="/about" element = {<AboutUs/>}/>
        <Route path="/Contact" element = {<Contact/>}/>

        <Route path="/Images" element = {<ImageViewer/>}/>
      </Routes>
      </BrowserRouter>
      </MyContext.Provider>
    </>
  )


}

export default App
