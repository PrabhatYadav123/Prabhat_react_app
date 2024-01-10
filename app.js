const heading = React.createElement(
  "h1",
  { id: "htag", class: "hclass" },
  "Hello React!"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
