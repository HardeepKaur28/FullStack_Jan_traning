import React, { useState } from 'react'

const AboutUs = () => {
  // const [err, setErr] = useState({});
  const obj = {
    name : "nothing",
    age:"immortal"
  }
  localStorage.setItem("justAKey", JSON.stringify(obj))

  const value = JSON.parse(localStorage.getItem("justAKey"))
  console.log(value,"value<><>>")

  localStorage.removeItem("justAKey")
  // try{
  //   // const result = prompt("Are you a developer?")
  //   if(result === 'Y'){
  //     throw new Error("You are writing a peice of shit")
  //   }
  // }
  // catch(err){
  //   console.log(err,"error<><><>")
  // }
  // finally{
  //   console.log("it will run does not matter what ")
  // }
  console.log("checking if this runs")
  

  // {
  //   "name":"johnwick",
  //   "age":18,
  // }

  return (
    <div>
      <span>{}</span>
    </div>
  )
}

export default AboutUs
