import React from "react";
import { useNavigate } from "react-router-dom";
function ReactContent() {
  const navigate = useNavigate();
  return (
    <div>
       <div className="container-fluid">
        <h5>React topics</h5>
        <div className="list-group">
        <a  className="list-group-item list-group-item-action" role="button"
        onClick={()=>{
          // navigate("/intro")
        }}
        >i. Introduction</a>
        <a href="#" className="list-group-item list-group-item-action">ii.JS Concepts</a>
        <a href="#" className="list-group-item list-group-item-action">iii. Installation, first react app</a>
        <a href="#" className="list-group-item list-group-item-action">iv. Folder Structure</a>
        <a href="#" className="list-group-item list-group-item-action">v. Components</a>
        <a href="#" className="list-group-item list-group-item-action">vi. Props</a>
        <a href="#" className="list-group-item list-group-item-action">vii. Context API</a>
        <a href="#" className="list-group-item list-group-item-action">viii. State, Effect</a>
        <a href="#" className="list-group-item list-group-item-action">ix. Hooks</a>
        <a href="#" className="list-group-item list-group-item-action">x. Routing</a>
        <a href="#" className="list-group-item list-group-item-action">xi. Forms</a>
        <a href="#" className="list-group-item list-group-item-action">xii. Libraries</a>
        <a href="#" className="list-group-item list-group-item-action">xiii. Redux & Redux toolkit</a>
      </div>
       </div>
    </div>
  );
}

export default ReactContent;
