import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement("h1", { id: "heading" }, "Namste React");
//React Element
const jsxheading = (
  <h1 id="heading" className="head">
    "Namste React By Sachin Yadav"
  </h1>
);
//Functional React Component
const Heading = () => {
  return <h1>Namste React</h1>;
};

const Heading1 = () => (
  <div id="heading">
    {jsxheading}
    <Heading />
    {/* <Heading>gi</Heading> */}
    {/* {Heading()} */}
    <h1 className="head">Namste React Course</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
// root.render(jsxheading);
root.render(<Heading1 />);
