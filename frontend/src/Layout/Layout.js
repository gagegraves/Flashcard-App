import React from "react";
import Header from "./Header";
import Routes from "./Routes";

export default function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        <Routes />
      </div>
    </>
  );
}
