import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Body from "./components/Body";

const AppLayOut = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
// root.render(jsxheading);
root.render(<AppLayOut />);
