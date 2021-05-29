import React from "react";
import Infomation from "../molecules/Infomation";

function AppBar(props) {
  return (
    <div className="row mt-3">
      <div className="col-md-4 col-lg-3">
        <Infomation></Infomation>
      </div>
      <div className="col-md-8 col-lg-9">
        <h2 className="fs-2  d-flex justify-content-flex-start">Giỏ hàng</h2>
      </div>
    </div>
  );
}

export default AppBar;
