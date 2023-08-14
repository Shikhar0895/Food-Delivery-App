import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div className="pages">
      <h1>Ooops!!</h1>
      <h2>Something Went Wrong!!</h2>
      <h2>{err.status}</h2>
    </div>
  );
};

export default Error;
