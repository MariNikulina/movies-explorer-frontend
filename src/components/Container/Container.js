import React from "react";

function Container ({ children }) {
  return (
    <main className="container content__section-main">
      {children}
    </main>
  )
};

export default Container;
