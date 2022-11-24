import React, { useState } from "react";
import { Button } from "./Button";
import "./css/button.css";
import { SuccessPage2 } from "./SuccessPage2";
export const NameContext1 = React.createContext();
export function SuccessPage() {
  const [isSuccess2, setIsSucces2] = useState(false);
  const [sname, ssetName] = useState("");
  const [sname1, ssetName1] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    handleReset();
    // validate();
    setIsSucces2(true);
  };
  const handleReset = () => {};

  return isSuccess2 ? (
    <NameContext1.Provider value={[sname, sname1]}>
      <SuccessPage2 />
    </NameContext1.Provider>
  ) : (
    <div id="container">
      <h1>Eden</h1>
      <h2>Stepbar</h2>

      <p>Let's setup a home for all your work</p>
      <p>You can always create a another workspace later</p>
      <div id="fcontainer">
        <form>
          <div id="insidecon">
            <label htmlFor="wname">Workspace Name: </label>
            <input
              id="wname"
              type="text"
              placeholder="Eden"
              value={sname}
              onChange={(e) => ssetName(e.target.value)}
            />
            {/* <h1>{sname}</h1> */}
            <label htmlFor="url">
              Workspace Url <span>(optional)</span>
            </label>
            <input
              id="url"
              type="text"
              placeholder="www.eden.com/ Example"
              value={sname1}
              onChange={(e) => ssetName1(e.target.value)}
            />
            {/* <h1>{sname1}</h1> */}
          </div>
          <Button name="submit" bgColor="dodgerblue" btnFn={handleSubmit} />
        </form>
      </div>
    </div>
  );
}
