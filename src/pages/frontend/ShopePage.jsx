import { Checkbox, Col, Row, Space, Typography } from "antd";
import Input from "antd/es/input/Input";
import { ProductCard } from "../../Components/ProductCard";
import { useSelector } from "react-redux";

export function ShopPage() {
  const products = useSelector((state) => state.productState.products);
  const categories = useSelector((state) => state.categoryState.categories);
  return (
    <>
      <div>
        <Typography.Title style={{ textAlign: "center" }}>
          Our Marketplace
        </Typography.Title>
        <Row gutter={[16, 16]} style={{ padding: "0 1rem" }}>
          <Col lg={4}>
            <h3>Filter</h3>
            <Input />
            <Space direction="vertical">
              {categories.map((category) => (
                <Checkbox key={category.id} name={category.id}>
                  {category.name}
                </Checkbox>
              ))}
            </Space>
          </Col>

          <Col lg={20}>
            <Row gutter={[8, 8]}>
              {products.map((product) => (
                <Col md={3} lg={8} key={product.id}>
                  <ProductCard product={product} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
}
