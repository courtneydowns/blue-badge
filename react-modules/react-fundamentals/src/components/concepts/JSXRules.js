import React from "react";

const JSXRules = () => {
  return (
    <div className="main">
      <div className="mainDiv">
        <h1 className="section-title">JSX</h1>
        <dl>
          <dt>Resembles HTML</dt>
          <dd>It's not. It's actually closer to JavaScript.</dd>
          <dt>React Elements</dt>
          <dd>
            These are used to construct and update the DOM, or what you see on
            the screen.
          </dd>
          <dt>Not Required</dt>
          <dd>You can write in Vanilla JS, but most sane people use JSX.</dd>
        </dl>
        <hr />
      </div>
      <NormalComponent />
      <CreateElementComponent />
    </div>
  );
};

export default JSXRules;

const NormalComponent = () => {
  return (
    <div style={{ border: "2px solid black" }}>
      <h2>Normal Functional Component</h2>
      <p>This was constructed with JSX in the return.</p>
      <img src="https://miro.medium.com/max/760/1*-ty7aZqH2of-rXpWYaoKPQ.png" />
    </div>
  );
};

const CreateElementComponent = () => {
  return React.createElement(
    "div",
    { style: { border: "2px solid black" } },
    React.createElement("h1", null, "CreateElement Component"),
    React.createElement(
      "p",
      null,
      "This was constructed with CreateElement calls in the return."
    ),
    React.createElement(
      "img",
      {
        src: "https://miro.medium.com/max/786/1*jJZHFQmhkq_7ohn18KrMhA.png",
      },
      null
    )
  );
};
