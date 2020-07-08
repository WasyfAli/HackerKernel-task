import React from "react";

const ReusableHeading = ({ title }) => {
  return (
    <div className="container row center">
      <h3 style={{ marginBottom: "5" }}>{title}</h3>
    </div>
  );
};

export default ReusableHeading;
