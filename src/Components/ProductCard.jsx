import {
  PlusOutlined,
  ShoppingCartOutlined,
  MinusOutlined,
} from "@ant-design/icons";
import { Card, Image, Button, Tag } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  updateCartProduct,
} from "../redux/cart.slice";

export function ProductCard({ product }) {
  const cart = useSelector((state) => state.cartState.cart);
  const [qty, setQty] = useState(
    () => cart.find((item) => item.productId === product.id)?.qty || 0,
  );

  const dispatch = useDispatch();
  const handlePlus = () => {
    console.log("qty: ", qty);
    // if (qty === 0) {
    //   setQty(qty + 1);
    //   return dispatch(addToCart(product));
    // }
    setQty(qty + 1);
    if (cart.find((item) => item.productId == product.id)) {
      dispatch(
        updateCartProduct({ productId: product.id, qty, price: product.price }),
      );
    } else {
      dispatch(addToCart({ productId: product.id, qty, price: product.price }));
    }
  };

  const handleReduce = () => {
    console.log("qty: ", qty);
    if (qty === 1) {
      setQty(0);
      dispatch(removeFromCart(product));
      return;
    }
    setQty(qty - 1);
    if (cart.find((item) => item.productId == product.id)) {
      dispatch(
        updateCartProduct({ productId: product.id, qty, price: product.price }),
      );
    } else {
      dispatch(addToCart({ productId: product.id, qty, price: product.price }));
    }
  };

  return (
    <Card bodyStyle={{ padding: 0 }}>
      <Image
        src={`http://localhost:8000${product.image}`}
        style={{ borderRadius: "6px 6px 0 0" }}
      />
      <div style={{ padding: ".4rem 1rem" }}>
        <div style={{ marginBottom: "1rem" }}>
          <h3 style={{ margin: 0 }}>{product.title}</h3>
          <p>{product.description}</p>
          <Tag>{product.price} XAF</Tag>
        </div>
        <div>
          <Button icon={<MinusOutlined />} onClick={handleReduce}></Button>
          <span style={{ padding: "4px 1rem" }}>{qty}</span>
          <Button icon={<PlusOutlined />} onClick={handlePlus}></Button>
        </div>
        <Button
          type="primary"
          icon={<ShoppingCartOutlined />}
          title="Add to cart"
        ></Button>
      </div>
    </Card>
  );
}
