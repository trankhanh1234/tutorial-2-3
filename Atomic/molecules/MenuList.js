import Link from "next/link";
import React from "react";
import {
  InfoCircle,
  Cart,
  CardImage,
  CreditCard,
  Gift,
  Key,
} from "react-bootstrap-icons";
import { useRouter } from "next/router";

import MenItem from "../atoms/MenItem";

function MenuList(props) {
  const router = useRouter();
  const listMenu = [
    {
      label: "Thông tin tài khoản",
      icon: <InfoCircle></InfoCircle>,
      href: "/thongtintaikhoan",
    },
    {
      label: "Giỏ Hàng",
      icon: <Cart></Cart>,
      href: "/giohang",
    },
    {
      label: "Bộ sưu Tập",
      icon: <CardImage></CardImage>,
      href: "/bosuutap",
    },
    {
      label: "Ví của tôi",
      icon: <CreditCard></CreditCard>,
      href: "/vicuatoi",
    },
    {
      label: "Đổi quà tặng",
      icon: <Gift></Gift>,
      href: "/doiquatang",
    },
    {
      label: "Đổi Mật Khẩu",
      icon: <Key></Key>,
      href: "/doimatkhau",
    },
  ];

  return (
    <>
      {listMenu.map((item, index) => (
        <Link href={item.href} key={`menu-${item.label}`}>
          <div
            className={
              item.href === router.pathname
                ? "p-2 mt-menu-item mt-menu-item-active"
                : "p-2 mt-menu-item"
            }
          >
            <MenItem icon={item.icon} label={item.label}></MenItem>
          </div>
        </Link>
      ))}
    </>
  );
}

export default MenuList;
