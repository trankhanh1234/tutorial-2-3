import React from "react";
import PropTypes from "prop-types";

function ImageVoucher({ src }) {
  return (
    <img
      src={src}
      className="mt-img-deal mr-3 my-2"
      loading="lazy"
      alt="meete"
    />
  );
}

export default ImageVoucher;
ImageVoucher.propTypes = {
  src: PropTypes.string,
};

ImageVoucher.defaultProps = {
  src: "https://media.meete.co/cache/400x0/2021/05/21/5dcdb58f-9d96-407b-999b-276ea2ec454f.png",
};
