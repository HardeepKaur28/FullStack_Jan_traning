import React, { useState } from 'react'
import { json } from 'react-router-dom'

const About = () => {
    // const [error,setError] = useState();
    // try{
    //     const result = prompt("Are you developer")
    //     if(result === 'Y'){
    //         throw new Error("ypu are writung piece or code")
    //     }
    //     // console.log(a);
    // }
    // catch(err){
    //     console.log(err,"Variable a is not defined");
    // }
    // finally{
    //     console.log('This is Finally block');
    // }

    // console.log("checking its run");

    const obj = {
        firstName: "John",
        age :"13"
    }
    // localStorage.setItem("justAKey","JustAValue")
    // localStorage.setItem("justAKey",obj)
    localStorage.setItem("justAKey",JSON.stringify(obj))

    // const Value = localStorage.getItem("justAKey")
    const Value = JSON.parse(localStorage.getItem("justAKey"))

    // console.log(toString.obj,"Value");
    console.log(Value);
    // console.log( localStorage.clear());
    // localStorage.clear();
    localStorage.removeItem("justAKey")
    
  return (
    <div>About
        <span>{}</span>
    </div>
  )
}

export default About