// State is information that the component stores and keeps track of. State changes over time.
// State can be primitive (booleans, numbers, strings) or it can be complex data types (arrays, objects, functions)
// only in the component it's been defined in unless we are passing props

import { useState } from "react";

const State = () => {
  //const [stateVariable, setStateVariable] = useState(<initial state value>)
  //       //variable,     //function (our way of changing our state)
  const [button, setButton] = useState("Hi there!");
  console.log(button);
  console.log(setButton);
  return (
    <div>
      <button onClick={(e) => setButton("Oh, hi Chad!")}>Click Me!</button>
      <span>{button}</span>
      <h1>Hello, Courtney</h1>
    </div>
  );
};

export default State;
