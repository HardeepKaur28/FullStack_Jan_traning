
import React,{useState,useRef,useEffect}from 'react'
import "./Home.css"

const Home = () => {
    const [counter, setCounter] = useState(0);
    let a=0; //usefReff L hold reference
    const refVar = useRef(10)

    // useEffect(()=>{
    //     console.log(a,"a.....");
    // },[counter])
    
    function updateRef(){
        refVar.current = refVar+current+0;
        a = a+10;
    }

    function updateCounter(){
        setCounter(counter+1);
        updateRef();
    }

    console.log(refVar.current,"ref.current");

    return (
    <div>
        <span>counter state : {counter}</span>
        <button onClick={()=> updateCounter()}>+</button>
        {/* <span>normal : {a}</span> */}
        <span>check how many time button is clicked : {refVar.current}</span>
        <button onClick={updateRef}>update  Var</button>
    </div>
  )
}

export default Home