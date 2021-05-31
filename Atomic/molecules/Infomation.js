import React from "react";
import Avarta from "../atoms/Avarta";

function Infomation(props) {
  return (
    <div className="d-flex">
      <div className="mr-3">
        <Avarta />
      </div>
      <div>
        <p className="d-flex justify-content-flex-start">Tài khoản của</p>
        <p style={{ fontSize: "18px" }}>Trần Quốc khánh</p>
      </div>
    </div>
  );
}

export default Infomation;
