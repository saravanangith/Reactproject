import React, { useState } from "react";
import { useContext } from "react";
import { Button } from "./Button";
import "./css/button.css";
import { NameContext } from "./SignUp";
import { NameContext1 } from "./SuccessPage";
export function SuccessPage3() {
  const [isSuccess2, setIsSucces2] = useState(false);
  const name = useContext(NameContext);
  const sname = useContext(NameContext1);

  console.log(name);
  const handleSubmit = (e) => {
    e.preventDefault();

    handleReset();
    // validate();
    setIsSucces2(true);
  };
  const handleReset = () => {};

  return (
    <div id="container">
      <div id="inside">
        <h1>Eden</h1>
        <h2>Stepbar</h2>

        <p>Tickbar</p>
        <h1>Congratulation,Eren!</h1>
        <p>You have completed the onboarding,You can start using the Eden</p>
        <div id="butt">
          <Button
            name="Launch Eden"
            bgColor="dodgerblue"
            btnFn={handleSubmit}
          />
        </div>
      </div>
      <h1>Component C - {name}</h1>
      <h1>Component d - {sname}</h1>
    </div>
  );
}
