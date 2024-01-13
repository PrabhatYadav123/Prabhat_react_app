import React from "react";
import ReactDOM from "react-dom";
const heading = React.createElement("div", { id: "htag", class: "hclass" }, [
  React.createElement("h1", { id: "h1tag" }, "Prabhat Yadav"),
  React.createElement("h2", { id: "h2tag" }, "I love My India"),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
