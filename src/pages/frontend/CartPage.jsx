import { Row, Col, Table, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/cart.slice";
import { useEffect } from "react";

export function CartPage() {
  const cart = useSelector((state) => state.cartState.cart);
  const products = useSelector((state) => state.productState.products);
  const dispatch = useDispatch();

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
    {
      title: "total",
      index: "total",
      render: (_, product) => product.qty * product.price,
    },
    {
      title: "Options",
      index: "options",
      render: (_, product) => (
        <Button
          size="small"
          danger
          onClick={() => dispatch(removeFromCart(product))}
        >
          Remove
        </Button>
      ),
    },
  ];

  useEffect(() => {}, [cart]);
  // add the last line of data for summing the result
  return (
    <Row gutter={[16, 16]} style={{ margin: "0 3rem" }}>
      <Col md={16}>
        <Table
          size="small"
          columns={columns}
          dataSource={cart}
          pagination={false}
          summary={(data) => (
            <Table.Summary fixed>
              <Table.Summary.Row>
                <Table.Summary.Cell index={0}>GRAND TOTAL</Table.Summary.Cell>
                <Table.Summary.Cell index={1}>
                  {data.reduce((item, next) => item + next.qty, 0)}
                </Table.Summary.Cell>
                <Table.Summary.Cell index={2}>
                  {data.reduce((item, next) => item + next.price * next.qty, 0)}
                </Table.Summary.Cell>
              </Table.Summary.Row>
            </Table.Summary>
          )}
        />
      </Col>
      <Col md={8}></Col>
    </Row>
  );
}
