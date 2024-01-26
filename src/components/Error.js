import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div style={{ color: "red" }}>
      <h2>Oops!!!</h2>
      <h3>Something went Wrong!!!!</h3>
      <h4>{err.data}</h4>
      <h4>
        {err.status} : {err.statusText}
      </h4>
    </div>
  );
};

export default Error;
