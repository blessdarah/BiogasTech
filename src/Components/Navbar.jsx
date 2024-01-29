import React from "react";
import { Badge, Dropdown, Space } from "antd";

import "../assets/index.css";
import { DownOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const cart = useSelector((state) => state.cartState.cart);
  return (
    <Space size="middle">
      <Link to="/">Home</Link>
      <Link to="/">About</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/">Support</Link>
      <Link to="/checkout">
        <Badge count={cart.length ?? 0}>
          Cart <ShoppingCartOutlined />
        </Badge>
      </Link>
    </Space>
  );
};

