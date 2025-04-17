import React, { useState } from "react";
import Content from "./Content/Content";
import '../Component/first.css';
function First() {
  const [active, setactive] = useState("Introduction");
  return (
    <div>
    <h5 className="mt-1 mb-2 text-white text-decoration-underline">Welcome to all for ReactJS Tutorial </h5>
      <div className="container-fluid">
        <div className="container-fluid row border  " style={{color:"#ffffff"}}>
          <div className="col  ">
            <div className="container">
              <p className="border activeList" role="button" id=""
                onClick={() => {
                  // document.getElementById("para").id="para";
                  setactive(" React content");
                }} >
                React content
              </p>
              <p
                className="border activeList"
                role="button"
                onClick={() => {
                  // alert("clicked")
                    // document.getElementById("para").id="para";
                  setactive("introduction");
                }}
              >
                React introduction
              </p>
              <p
                className="border activeList"
                role="button"
                onClick={() => {
                  setactive("JavaScript Rivision");
                }}
              >
                JavaScript Rivision
              </p>
              <p
                className="border activeList"
                role="button"
                onClick={() => {
                  setactive("createApp");
                }}
              >
                How to create React App
              </p>
              <p className="border">Lorem, ipsum.</p>
              <p className="border">Lorem, ipsum.</p>
            </div>
          </div>
          <div className="col-9 " style={{color:"black", backgroundColor:"#E0FFFF"}}>
            <Content active={active} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default First;
