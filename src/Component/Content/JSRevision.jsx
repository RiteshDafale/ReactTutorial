import React from "react";
import forEach from "../Images/forEachFunction.png";
import Map from "../Images/mapFunction.png";
import filter from "../Images/filterFunction.png";

function JSRevision() {
  return (
    <div>
      <div className="container">
        <div className="container">
          <h4 className="text-start">
            1. difference between var, let and const:
          </h4>
          <p className="text-start">
            var is a function scoped variable and it can be redeclared,
            reassigned and also it is possible to access var before declaration.
            <br />
            <span className="text-decoration-underline">
              let and const are block scoped variables and they cannot be
              redeclared or access before declaration let can reassign but const
              can't
            </span>
          </p>
          <div className="row">
            <div
              className="col-lg-4 border d-flex justify-content-center  align-items-center text-start ps-2"
              style={{ fontSize: "13px", padding: "5px" }}
            >
              var name = "Alice";
              <br /> var name = "Bob"; Redeclaration allowed
              <br /> console.log(name); // Bob
            </div>
            <div
              className="col-lg-4 border  d-flex justify-content-center  align-items-center"
              style={{ fontSize: "12px", padding: "5px" }}
            >
              <p className="text-start ps-2">
                // Using let <br />
                let age = 25;
                <br /> // let age = 30; // ❌ Error: can't redeclare
                <br /> age = 30; // ✅ Reassignment allowed console.log(age); //
                30
              </p>
            </div>
            <div
              className="col-lg-4 border  d-flex justify-content-center  align-items-center"
              style={{ fontSize: "12px", padding: "5px" }}
            >
              <p className="text-start ps-1">
                // Using const
                <br /> const city = "New York"; <br />
                // city = "London"; // ❌ Error: can't reassign <br />
                console.log(city); // New York
              </p>
            </div>
          </div>

          <hr />

          <h5 className="text-start">2. Arrays (map,filter,forEach)</h5>
          <p className="text-start " style={{ fontSize: "14px" }}>
            map, filter and forEach all will iterate through the whole array and
            pass a callback function.
            <br />
            callback function contains two parameters( value and index )<br />
            Difference between forEach and map is{" "}
            <span className="text-decoration-underline">
              forEach cannot return the value{" "}
            </span>{" "}
            and{" "}
            <span className="text-decoration-underline">
              {" "}
              map can return the values
            </span>{" "}
            .<br />
            Difference between map and filter is{" "}
            <span className="text-decoration-underline">
              map will return all values but filter return values where return
              condition is true
            </span>
          </p>
          <div className="row">
            <div
              className="col-lg-4 border d-flex flex-column justify-content-center  align-items-center text-start ps-2"
              style={{ fontSize: "13px", padding: "5px" }}
            >
              {/* <img src={forEach} alt="some issue"  /> */}
                <img
                  src={forEach}
                  class="figure-img img-fluid rounded"
                  alt="..." role='button'
                />
              <p className="m-0">ForEach Loop</p>
            </div>
            <div
              className="col-lg-4 border  d-flex flex-column justify-content-center  align-items-center"
              style={{ fontSize: "12px", padding: "5px" }} >
              <img
                  src={Map}
                  class="figure-img img-fluid rounded"
                  alt="..." role='button'
                />
                  <p className="m-0">Map Loop</p>
            </div>
            <div
              className="col-lg-4 border  d-flex flex-column justify-content-center  align-items-center"
              style={{ fontSize: "12px", padding: "5px" }}
            >
               <img
                  src={filter}
                  class="figure-img img-fluid rounded"
                  alt="..."  role='button'
                />
                  <p className="m-0">Filter Loop</p>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
}

export default JSRevision;
