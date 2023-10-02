import React from "react";
import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";

const Error: React.FC = () => {
  const error = useRouteError();
  console.log(error);

  if (isRouteErrorResponse(error)) {
    if (error && error.status === 404) {
      return (
        <div>
          <h3>Ohh!</h3>
          <p>We can't seem to find the page you are looking for</p>
          <Link to="/">back home</Link>
        </div>
      );
    }
  }
  return (
    <div>
      <h3>something went wrong </h3>
    </div>
  );
};
export default Error;
