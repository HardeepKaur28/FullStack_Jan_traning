
import React, { useState } from 'react'

const Contact = () => {
  const [Name, setName] = useState({
    info: true,
    about: false,
    timepass: false,
  });
  const[testing,setTesting]=useState(false)
  console.log(name,"name before updation");

  function trigerredRerendering() {
  
    // console.log(name,"name after update");
  }
  console.log(name,"name after updation");

  
  return (
    <div>
       <button onClick={trigerredRerendering}> Trigger</button>
    </div>
  )
}

export default Contact

//