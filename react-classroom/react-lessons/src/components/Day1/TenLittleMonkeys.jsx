import { React, useState } from "react";
//rafce "React Arrow Functional Component Export"

const TenLittleMonkeys = () => {
  const [monkeyCount, setMonkeyCount] = useState(10);

  const totalMonkeys =
    monkeyCount > 0
      ? `${monkeyCount} Little monkeys jumping on the bed, one fell off and hit his head. Mamma called the doctor and the doctor said, No more monkeys jumping on the bed!`
      : `All the monkeys fell off the bed.`;
  return (
    <div>
      <p>{totalMonkeys}</p>
      <button onClick={() => setMonkeyCount(monkeyCount - 1)}>
        Lose a Monkey!
      </button>
      {monkeyCount <= 0 ? (
        <button onClick={() => setMonkeyCount(10)}>Reset</button>
      ) : null}
    </div>
  );
};

export default TenLittleMonkeys;
