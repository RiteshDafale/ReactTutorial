import { TextDecoration } from "@cloudinary/url-gen/qualifiers";
import React from "react";
import vitaTemplate from "../Images/npmCreate.png";
import Folder from "../Images/FolderStructure.png";
import './common.css';

function CreatApp() {
  return (
    <div>
      <div className="container">
        <div className="contnet">
          <h5 className="mt-2">Installation and Fireact react APP</h5>
          <ul className="list-group">
            <p className="m-0 text-start" style={{ fontSize: "17px" }}>
              To install Any library of JS, we use{" "}
              <span className="text-primary">package managers</span>. These package
              managers are used to install/uninstall/update the packages.
            </p>
            <p
              className="text-start"
              style={{ fontSize: "17px", marginTop: "12px" }}
            >
              <span className="text-primary">
                npm is the popular package manager
              </span>
              . To have npm, you need to download and install{" "}
              <span className="text-primary">node js</span>
            </p>
            <li
              className="list-group-item text-start"
              title="https://nodejs.org/en/download"
              role="button"
              onClick={() => {
                window.location.href = "https://nodejs.org/en/download";
              }}
            >
              goto website "https://nodejs.org/en/download"
            </li>
            <li className="list-group-item text-start">
              download according to your OS (windows){" "}
            </li>
            <li className="list-group-item text-start">
              Install by double tap and select "npm package manager" and "yes".
            </li>
            <li className="list-group-item text-start">
              verify by goind to cmd, and type "node -v". it prints version of
              node if it is installed else error.
            </li>
          </ul>

          <p className="mt-3 text-start">
            our need to have a code editor,
            <span className=" text-primary">
              {" "}
              we prefer in this course vscode{" "}
            </span>
            for nice folder,
            <span className="text-primary">
              {" "}
              install "material icon theme" by pkief in vscode{" "}
            </span>
          </p>

          <p className="mt-3 text-start ">
            for shortcuts,
            <span className=" text-primary">
              {" "}
              install "Es7 react/redux...." by rodrigovallades
            </span>
          </p>

          <p className="text-start">
            basic settings: goto file and click{" "}
            <span className=" text-primary"> autosave </span>option
          </p>

          <p className="text-start">
            To create a React app using Vite, run the command{" "}
            <spam className="text-primary hovercmd ">npm create vite@latest</spam>{" "}
            in VScode Terminal
          </p>

          <p className="text-start">
            <spam className="text-primary">vite is a template generator which
            will create template code for different JS frameworks/libraries</spam>
          </p>

          <div className="image">
            <img
              style={{ height: "50%", width: "50%" }}
              src={vitaTemplate}
              className="img-fluid"
              alt="issue while uploading"
            ></img>
          </div>

          <p className="text-start m-0">
            After the command, give project name, package name and select react
          </p>
          <p className="text-start m-0 text-primary">
             cd folderName <br />
            npm install <br />
             npm run dev{" "}
          </p>

          <p className="text-start my-3">Folder Structure </p>

          <div className="image">
            <img
              style={{ height: "50%", width: "50%" }}
              src={Folder}
              className="img-fluid"
              alt="issue while uploading"
            ></img>
          </div>

          <p className="text-start mt-2">it will run react app in <span className="text-primary">localhost:5173</span>,<br/> To change the default code, go to src then App.jsx and write HTML code between return . </p>
        </div>
      </div>
    </div>
  );
}

export default CreatApp;
