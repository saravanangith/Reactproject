import React, { useState } from "react";
import { Button } from "./Button";
import "./css/common.css";
import { SuccessPage } from "./SuccessPage";
// import { FormError } from "./FormError";

// import { validateName } from "../utils/validations";
export const NameContext = React.createContext();
export function SignUp() {
  const [name, setName] = useState("");
  const [name1, setName1] = useState("");
  // const [nameErr, setNameErr] = useState(false);

  const [isSuccess, setIsSuccess] = useState(false);

  //   functionalities
  const handleSubmit = (e) => {
    e.preventDefault();

    // setNameErr(false);

    handleReset();
    // validate();
    setIsSuccess(true);
  };

  const handleReset = () => {
    setName(name);
    setName1(name1);
  };

  // const validate = () => {
  //   // retrun name na string na name solura string  matum than return panum ha?
  //   if (!validateName(name)) return "name";
  // };

  // UI
  return isSuccess ? (
    <NameContext.Provider value={[name, name1]}>
      <SuccessPage />
    </NameContext.Provider>
  ) : (
    <div id="container">
      <h1>Eden</h1>
      <h2>Stepbar</h2>

      <p>Welcome!First thing first...</p>
      <p>You can always change them later</p>
      <form>
        <div>
          <label htmlFor="name">Full Name: </label>
          <input
            id="name"
            type="text"
            placeholder="Steve Jobs"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {/* ui la pakurathu this line */}
          {/* <h1>{name}</h1> */}

          {/* isvisible -true or false solum atha vachu than error katuratha 
          venam ha nu decide */}
          {/* <FormError property="name" isVisible={validate()} /> */}
        </div>
        <div>
          <label htmlFor="age">Display Name: </label>
          <input
            id="name1"
            type="text"
            placeholder="Steve"
            value={name1}
            // onChange={(e) => console.log(e.target.value)}
            onChange={(e) => setName1(e.target.value)}
          />
          {/* ui la pakurathu this line */}
          {/* <h1>{name1}</h1> */}
        </div>

        <Button name="submit" bgColor="dodgerblue" btnFn={handleSubmit} />
      </form>
    </div>
  );
}
