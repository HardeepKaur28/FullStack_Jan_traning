import React, { useState } from "react";

function Home() {
  const [p, setPname] = useState();
  const [e, setEmail] = useState();
  const [n, setName] = useState();
  const [msg, setMsg] = useState();
  var [data, setData] = useState();
  const [pn, setParty] = useState();
  const [vt, setVote] = useState();

  const AddParty = async () => {
    let result = await fetch("http://localhost:5000/party", {
      method: "post",
      body: JSON.stringify({ p }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    result = await result.json();
    console.log(result);
    setMsg(result.msg);
  };

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
    <div>
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
      <div className="row">
        <div className="col"></div>
        <div className="col-md-3">
          <br />
          <div
            className="border border-5"
            style={{ background: " black", color: "white" }}
          >
            <h2>Leading Party</h2>
            <hr />
            {/* <marquee>Leading party is {pn} with vote {vt}</marquee> */}
          </div>
        </div>
        <div className="col"></div>
        <div
          className="col-md-3 border border-dark p-2 ms-6"
          style={{ background: "black", color: "white" }}
        >
          <h2>Add/Remove Party</h2> <br />
          Enter Party Name
          <input
            type="text"
            name="p"
            className="form-control"
            onInput={(e) => setPname(e.target.value)}
          />
          <br />
          <button className="btn btn-success" onClick={() => AddParty()}>
            Add
          </button>
          &emsp;&emsp;&emsp;
          <button className="btn btn-danger" onClick={() => Removeparty()}>
            Remove
          </button>
        </div>
        <div
          className="col-md-4 border border-dark p-2 ms-2"
          style={{ background: "black", color: "white" }}
        >
          <h2 className="text-center mb-2">Add/Remove Voter</h2>
          Email
          <input
            type="text"
            className="form-control"
            name="e"
            onInput={(e) => setEmail(e.target.value)}
          />
          Name
          <input
            type="text"
            className="form-control"
            name="n"
            onInput={(e) => setName(e.target.value)}
          />
          <div className="row mt-3">
            <div className="col-md-6">
              <button className="btn btn-success" onClick={() => Addvoter()}>
                Add
              </button>
            </div>
            <div className="col-md-6">
              <button className="btn btn-danger" onClick={() => removeVoter()}>
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          {/*<table className="table table-bordered table-striped table-hover table-dark">
                        <tbody>
                            <tr>
                            <td>Party</td>
                            <td>Vote</td>
                            </tr>
                            {
                                 data &&   data.map(row=>  
                                <tr>
                                    <td>{row.party}</td>
                                    
                                        <td>{row.totalvote}</td>
                                </tr>    
                                )
                            }
                        </tbody>

                        </table>*/}
        </div>
      </div>
    </div>
  );
}

export default Home;
