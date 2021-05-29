import React from "react";

import Store from "../atoms/Store";
import Voucher from "../atoms/Voucher";

function ContentVoucher({ voucher, store }) {
  return (
    <div className="mt-content-deal">
      <Voucher voucher={voucher}></Voucher>
      <Store store={store}></Store>
    </div>
  );
}

export default ContentVoucher;
