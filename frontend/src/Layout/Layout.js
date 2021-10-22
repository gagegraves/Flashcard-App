import React from "react";
import Header from "./Header";
import Routes from "./Routes";

export default function Layout() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <Header />
        </div>
      </div>
      <div className="row">
        <div classNmae="col-12">
          <Routes />
        </div>
      </div>
    </div>
  );
}
