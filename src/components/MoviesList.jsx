import React from "react";

const MoviesList = ({ children }) => {
  return <div className="flex flex-col gap-6 mt-8">{children}</div>;
};

export default MoviesList;
