import Index from './components/navbar'
import Home from './components/navbar/Home'
import Pixa from './components/pixa'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { About } from './components/navbar/About';
import Contact from './components/navbar/Contact';
function App() {
  
  return (
    <>
    {/* <Pixa/> */}
    {/* <Home/> */}
   
    
    <BrowserRouter>
    <Index/>
    <Routes>
      <Route path="/dashboard"  element = {<Home/>} />
      <Route path="/About" element = {<About/>}/>
      <Route path="/Contact" element={<Contact/>}></Route>
    </Routes>

    <Home />
    </BrowserRouter>
    
    
    </>
  )
}

export default App
