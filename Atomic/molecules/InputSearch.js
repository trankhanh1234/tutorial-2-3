import React from "react";
import Input from "../atoms/Input";

function InputSearch(props) {
  return (
    <div className="input-group d-flex justify-item-center">
      <span className="input-group-text" id="basic-addon1">
        @
      </span>
      <Input></Input>
    </div>
  );
}

export default InputSearch;
