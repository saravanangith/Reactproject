import React, { useState } from "react";
import { Button } from "./Button";
import { SuccessPage3 } from "./Successpage3";
import "./css/button.css";
export function SuccessPage2() {
  const [isSuccess2, setIsSucces2] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    handleReset();
    // validate();
    setIsSucces2(true);
  };
  function handleMouseEnter(e) {
    e.preventDefault();
    this.style.border = "2px solid purple";
    console.log(this);

    // e.target.style.outline = "2px solid green";
  }
  const handleMouseout = (e) => {
    e.preventDefault();
    e.target.style.outline = "";
  };
  const handleReset = () => {};

  return isSuccess2 ? (
    <SuccessPage3 />
  ) : (
    <div id="container">
      <div id="inside">
        <h1>Eden</h1>
        <h2>Stepbar</h2>

        <h1>How are you planning to use Eden?</h1>
        <p>we'll streamline your setup accordingly.</p>
        <div id="boxes">
          <div
            onClick={(e) => handleMouseEnter(e)}
            onMouseLeave={handleMouseout}
          >
            <button id="box1">
              <h6>For myself</h6>
              <p>Write better. Think more clearly Stay organized</p>
            </button>
          </div>
          <button
            id="box2"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseout}
          >
            <h6>With my team</h6>
            <p style={{ wordWrap: "break-word" }}>
              Wikis,docs,tasks&projects,all in one place
            </p>
          </button>
        </div>

        <Button
          name="Create workspace"
          bgColor="dodgerblue"
          btnFn={handleSubmit}
        />
      </div>
    </div>
  );
}
