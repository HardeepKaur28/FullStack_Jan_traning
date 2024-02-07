import React, { useState } from 'react';

const Homee = () => {
 
  const [p,setPname] = useState();
  const [msg, setMsg] = useState();
  const AddParty = async() =>{
    let result = await fetch("http://localhost:5000/party",{
        method:'post',
        body:JSON.stringify({p}),
        headers:{
            'Content-Type':'application/json'
        }
    });
    result = await result.json()
    console.log(result);
    setMsg(result.msg)
  }

  const Removeparty=async()=>
    {
        let result=await fetch("http://localhost:5000/removeParty",{
            method:'post',
            body:JSON.stringify({p}),
            headers:{
                'Content-Type':'application/json '
        }
    });
    result=await result.json()
        console.log(result);
        setMsg(result.msg)
  }

  return (
    <div className="container-fluid">
       <center>
        <h1
          className="border border-dark border-4 ms-6"
          style={{ background: "lightgreen", color: "black" }}
        >
          Welcome to Voting Component
        </h1>
      </center>
      <br />
      <br />
      <center>
            <h3>{msg}</h3>
            </center>
      <div className="row p-5 p-lg-0 mt-5">
        <div className="col-12 col-lg-4 offset-lg-1 rounded-3 party border border-dark mt-5 pt-3">
          <div className="row">
            <form>
              <h3 className="text-center p-lg-3 fw-bolder">Add & Remove Party</h3>
              <hr />
              <div className="col fw-bold">
                <label htmlFor="name" className="p-2">
                  Enter Party name
                </label>
                <input name="p" type="text" placeholder="Party name" className="form-control" onInput={(e)=>setPname(e.target.value)} />
              </div>
              <br />
              <div className="col text-center p-2">
                {/* <input type="submit" className="btn btn-primary" name="submit" value="Add" />
                &emsp;
                <input type="submit" value="Remove" className="btn btn-danger" name="delparty" /> */}
                <button className="btn btn-success" onClick={()=>AddParty()}>Add</button>&emsp;&emsp;&emsp;
                <button className="btn btn-danger" onClick={()=>Removeparty()}>Remove</button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-12 col-lg-4 mt-4 mt-lg-0 offset-lg-1 rounded-3 voter border border-dark mt-5 pt-3">
          <div className="row p-lg-2">
            <form>
              <h3 className="text-center p-lg-3 fw-bolder">Add & Remove Voter</h3>
              <hr />
              <div className="col fw-bolder">
                <label htmlFor="name">Enter name</label>
                <input type="text" name="vn" className="form-control" />
              </div>
              <br />
              <div className="col fw-bolder">
                Enter Email
                <input type="text" name="em" className="form-control" />
              </div>
              <br />
              <div className="col text-center p-2">
                <input type="submit" name="Add" value="Add" className="btn btn-primary" />
                &emsp;
                <input type="submit" name="Remove" value="Remove" className="btn btn-danger" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homee;

