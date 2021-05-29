import React from "react";
import ImageVoucher from "../atoms/ImageVoucher";
import ContentVoucher from "../molecules/ContentVoucher";
import { listVoucher } from "../../Json/index";
function CardVoucher() {
  return (
    <>
      {listVoucher.map((item) => (
        <div className="w-100" key={item.id}>
          <div className="mt-container-item-deal bg-white my-2 rounder">
            <div className="mt-top-info">
              <ImageVoucher src={item.src}></ImageVoucher>
              <ContentVoucher
                voucher={item.voucher}
                store={item.store}
              ></ContentVoucher>
            </div>
            <div
              className="
          mt-top-date
          jutyfi
          d-flex
          justify-content-center
          align-items-center
        "
            >
              Ngày đặt hàng 25-05-2020
            </div>
            <div className="mt-status-deal">
              {!!item.status ? "Đã dùng" : "Chưa dùng"}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default CardVoucher;
