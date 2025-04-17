import React from "react";

function Intro() {
  return (
    <div>
      <div className="container-fluid border border-primary">
        <h4 className="text-start">1. why do you want to learn react?</h4>
        <p className="text-start">
          React is a powerful JavaScript library made by Facebook in 2013, now
          widely used to build modern web apps. It’s super popular because it’s
          fast, easy to use, and fits perfectly with today’s "vibe coding"
          style—clean, reusable components and smooth user experiences. The tech
          industry is full of React job openings, making it a smart skill to
          pick up. If you're aiming for future-ready development, React is the
          move.
        </p>
        <h5 className="text-start">2. what is React?</h5>
        <p className="text-start ">
          React is a JavaScript library used to build single-page applications
          (SPAs) and smooth, interactive user interfaces. It was originally
          created by Meta (Facebook) in 2010 for internal use, and then
          open-sourced in 2013, so everyone could use it. The magic of React
          lies in its use of components—these are like little building blocks of
          UI. Each component is a piece of reusable code, like a custom LEGO
          brick, that you can mix and match to build complex apps. This makes
          development faster, cleaner, and more fun.
        </p>
        <h5 className="text-start">3. is react and react native are same?</h5>
        <p className="text-start">
          React and React Native are related but not the same .{" "}
          <span className="text-decoration-underline">
            React is used for building web applications
          </span>{" "}
          , while{" "}
          <span style={{ fontSize: "18px" }}>
            {" "}
            React Native is for creating mobile apps for iOS and Android using
            native components.
          </span>{" "}
          They share the same coding style, but run on different platforms.
        </p>
        <h5 className="text-start">4. which is better react or angular</h5>
        <p className="text-start">
          React is developed and maintained by meta. Angular is developed and
          maintained by Google
          <br /> React follows simple component architecture Angular follows
          MVC(model view controller) architecture . React is a library and
          Angular is a framework
        </p>
        <h5 className="text-start">5. Advantages of React:</h5>
        <ol className="list-group list-group-flush list-group-numbered">
          <li className="list-group-item text-start" style={{ fontSize: "14px" }}>
            {" "}
            Efficient : React uses virtual DOM to make code more efficient
          </li>
          <li className="list-group-item text-start" style={{ fontSize: "14px" }}>
            {" "}
            components : React follows component based architecture so we can
            create simple components and reuse them multiple times
          </li>
          <li className="list-group-item text-start" style={{ fontSize: "14px" }}>
            JSX: react uses simple format called JSX(javascript extensible) to
            make code easy to write
          </li>
          <li className="list-group-item text-start" style={{ fontSize: "14px" }}>
            Easyness: React is relatively easy when compared with angular or
            vue.
          </li>
          <li className="list-group-item text-start" style={{ fontSize: "14px" }}>
            large community: There are lot of developers who uses React so it
            easy to catch up the queries using the communities
          </li>
        </ol>
        <h5 className="text-start">6. Basic Setup to start react Coding</h5>
        <a className="list-group-item list-group-item-action  list-group-item-dark text-start" role="button" 
          onClick={()=>{
            window.document.location="https://code.visualstudio.com/download"
          }}
          >download install VS code</a>
          <a className="list-group-item list-group-item-action  list-group-item-dark text-start my-2" role="button" 
          onClick={()=>{
            window.document.location="https://git-scm.com/downloads"
          }}
          >download & install  git</a>
          <a className="list-group-item list-group-item-action  list-group-item-dark text-start my-2" role="button" 
          onClick={()=>{
            window.document.location="https://github.com/"
          }}
          >create an account in github</a>
          <a className="list-group-item list-group-item-action  list-group-item-dark text-start my-2" role="button" 
          onClick={()=>{
            window.document.location="https://nodejs.org/en/download"
          }}
          >download & install nodejs</a>
      </div>
    </div>
  );
}

export default Intro;
