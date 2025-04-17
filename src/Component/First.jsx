import React, { useState } from "react";
import Content from "./Content/Content";
import '../Component/first.css';
function First() {
  const [active, setactive] = useState("Introduction");
  return (
    <div className="bg-primary">
    <h5 className="mt-1 mb-2 text-white text-decoration-underline">Welcome to all for ReactJS Tutorial </h5>
      <div className="container-fluid mainCont w-100">
        <div className="container-fluid row border subCont w-100 px-0  " style={{color:"#ffffff"}}>
          <div className="container-fluid col firstcol  ">
            <div className="container-fluid ">
              <p className="border activeList " role="button" id=""
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
            </div>
          </div>
          <div className="col-9 secondcol " style={{color:"black", backgroundColor:"#E0FFFF"}}>
            <Content active={active} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default First;
