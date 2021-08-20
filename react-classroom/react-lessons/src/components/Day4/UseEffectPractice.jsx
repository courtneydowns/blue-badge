import { React, useState, useEffect } from "react";

const UseEffectPractice = () => {
  const [animal, setAnimal] = useState("alligator");
  return (
    <div>
      <p>The current animal is {animal}</p>
      <p></p>
    </div>
  );
};

export default UseEffectPractice;
