import React from "react";

function Container ({ children }) {
  return (
    <main className="container page__section-main">
      {children}
    </main>
  )
};

export default Container;
