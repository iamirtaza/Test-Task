import React from "react";
import { Spinner } from "reactstrap";
const LoaderComponent = () => {
  return (
    <div
      className="container d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <Spinner size="md" color="primary" />
    </div>
  );
};
export default LoaderComponent;
