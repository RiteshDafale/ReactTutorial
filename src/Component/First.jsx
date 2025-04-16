import React, { useState } from "react";
import Content from "./Content/Content";

function First() {
  const [active, setactive] = useState("Introduction");
  return (
    <div>
          <h5 className="mt-1 mb-2 text-white text-decoration-underline">Welcome to all for ReactJS Tutorial </h5>
      <div className="container-fluid">
        <div className="container-fluid row border " style={{color:"#5EEAD4"}}>
          <div className="col  ">
            <div className="container">
              <p class="border" role="button"
                onClick={() => {
                  // alert("clicked")
                  setactive(" React content");
                }} >
                React content
              </p>
              <p
                class="border"
                role="button"
                onClick={() => {
                  // alert("clicked")
                  setactive("introduction");
                }}
              >
                React introduction
              </p>
              <p
                class="border"
                role="button"
                onClick={() => {
                  setactive("JavaScript Rivision");
                }}
              >
                JavaScript Rivision
              </p>
              <p
                class="border"
                role="button"
                onClick={() => {
                  setactive("createApp");
                }}
              >
                How to create React App
              </p>
              <p class="border">Lorem, ipsum.</p>
              <p class="border">Lorem, ipsum.</p>
            </div>
          </div>
          <div className="col-9 " style={{color:"#ffffff", backgroundColor:"#2C2C2C"}}>
            <Content active={active} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default First;
