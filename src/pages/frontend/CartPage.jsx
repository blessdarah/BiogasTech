import { Row, Col, Table } from "antd";
import { useSelector } from "react-redux";

export function CartPage() {
  const cart = useSelector((state) => state.cartState.cart);
  const products = useSelector((state) => state.productState.products);

  const columns = [
    {
      title: "Product",
      dataIndex: "productId",
      render: (_, row) =>
        products.find((product) => product.id == row.productId)?.title,
    },
    {
      title: "Quantity",
      dataIndex: "qty",
    },
    {
      title: "Price",
      dataIndex: "price",
    },
  ];

  console.log("data: ", cart);
  return (
    <Row gutter={[16, 16]} style={{ margin: "0 3rem" }}>
      <Col md={16}>
        <Table size="small" columns={columns} dataSource={cart} />
      </Col>
      <Col md={8}></Col>
    </Row>
  );
}
