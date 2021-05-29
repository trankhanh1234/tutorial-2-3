import React from "react";
import PropTypes from "prop-types";

function Avarta({ src }) {
  return <img className="mt-avatar" src={src} alt="..." />;
}

export default Avarta;
Avarta.propTypes = {
  src: PropTypes.string,
};

Avarta.defaultProps = {
  src: "https://www.meete.co/img/meete_logo.svg",
};
