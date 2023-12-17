import React from "react";
import { useUserContext } from "./usercontext";


function Home() {
  const { name, setName, email, setEmail, phone, setPhone, handleFormSubmit } =
    useUserContext();
  const formId = 10;
  return (
            <div className="col-md-10 mx-auto col-lg-7">
            <h2 className="display-4 fw-bold lh-1 text-white mb-4">
              Enter Your <span className="text-danger">Data</span>
            </h2>
          <form
            className="p-4 p-md-5 mb-5 border rounded bg-light"
            onSubmit={(e) => handleFormSubmit(e, { name, email, phone }, formId)}
          >
            
            <div className="user-name card-title" >
              <input
                type="text"
                className="form-control"
                id="nameInput"
                placeholder="Enter the Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{width:"300px", height:"30px", borderRadius:"3px" , border:"1px solid transparent"}}
              />
            </div><br />
            <div className="user-email card-text">
              <input
                type="email"
                className="form-control"
                id="emailInput"
                placeholder="name@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{width:"300px", height:"30px", borderRadius:"3px" , border:"1px solid transparent"}}
              />
            </div><br/>
            <div className="mb-3">
              <input
                type="number"
                className="form-control"
                id="floatingNumber"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={{width:"300px", height:"30px", borderRadius:"3px" , border:"1px solid transparent"}}
              />
            </div><br/><br/>
            <div className="form-check mb-3">
              <input
                type="checkbox"
                className="form-check-input"
                id="rememberCheck"
              />
              <label className="form-check-label" htmlFor="rememberCheck">
                Remember me
              </label><br /><br />
            </div>
            <button className="btn text-white w-100 " type="submit" style={{backgroundColor:"DodgerBlue",color:"white" , padding:"10px", border:"1px solid transparent", borderRadius:"10px"}}>
              Add To List
            </button>
          </form>
        </div>
  );
}

export default Home;