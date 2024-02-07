// import React from 'react'

// const Home = () => {
//   return (
//     <div>Home</div>
//   )
// }

// export default Home

import React, { useEffect, useState } from 'react'
import "./Style2.css"

function Section({heading,description,showDescription,setShowDescription=()=>{}}){
  
  function handleDesciption(){
    setShowDescription()
  }

  return(
    <div className="section">
      <h3>{heading}</h3>

      <button onClick={handleDesciption}>{showDescription ? "Hide" : "Show"}</button>
      {showDescription && <p>{description}</p>}
    </div>
  )
}

const Home = () => {
  const[isVisible,setisVisible]=useState({
    info:false,
    about:false
  })
  // isVisible={isVisible}   //will it update? rerendering or not----will update but no rerendering

  useEffect(()=>{
    console.log(isVisible,"isVisible");
  },[isVisible])

  function handleDesciption(key){
    setisVisible((prev)=>{
      return {...prev,[key]:!prev[key]}
    }
    )
  }
  return (
    <div>
      <Section heading={"Heading 1"} description={"This is my heading 1"} showDescription={isVisible.about} setShowDescription={()=>handleDesciption("about")}/>
      <Section heading={"Heading 2"} description={"This is my heading 2"} showDescription={isVisible.info} setShowDescription={()=>handleDesciption("info")}/>
    </div>
  )
}

export default Home
