import React from "react";
import PropTypes from "prop-types";

function SpanTextWrap({ children, rest }) {
  return (
    <button {...rest} className="mt-header-textWrap">
      {children}
    </button>
  );
}

export default SpanTextWrap;
SpanTextWrap.propTypes = {
  children: PropTypes.any,
};

SpanTextWrap.defaultProps = {
  children: "Trần Quốc Khánh",
};
