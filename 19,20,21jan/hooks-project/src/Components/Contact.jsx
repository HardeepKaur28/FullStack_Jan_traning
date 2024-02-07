import React, { useContext, useState } from 'react'
import CompanyInfo from './CompanyInfo'
import { MyContext } from '../utils/useContext'

const Contact = () => {
  const[name, setNames] = useState({
    info:true,
    about:false,
    timepass:false
  })
  const[heading, setHeading] = useState("intial value")
  const value = useContext(MyContext)
  const{store, setStore} = value


function handleHeadingChange(e){
  console.log(value,"value<><><><><>")
  // value.setStore((prev)=>{
  //   const store = JSON.parse(JSON.stringify(prev))
  //   store.heading = e.target.value
  //   console.log(store,e.target.value,"store<><><><")
  //   return store
  // })
    setStore({...store, heading: e.target.value})
  // setHeading(e.target.value)
}
  return (
    <div>
      <h3>Contact Us</h3>
      <span>Type heading</span>
      <input type='text' value={value.store.heading} onChange={handleHeadingChange}></input>
      <CompanyInfo heading={heading}/>
    </div>
  )
}

export default Contact
