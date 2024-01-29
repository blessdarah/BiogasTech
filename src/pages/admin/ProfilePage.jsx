import { Button, Col, Form, Input, List, Row } from "antd";

export function ProfilePage() {
  return (
    <>
      <h3>User settings</h3>
      <List
        dataSource={[
          {
            key: "username",
            value: "username",
          },
          {
            key: "Email address",
            value: "email addres",
          },
        ]}
        renderItem={(item, index) => (
          <Row key={index} gutter={[16, 16]} style={{ padding: ".4rem 0" }}>
            <Col span={4}>{item.key}:</Col>
            <Col>{item.value}</Col>
          </Row>
        )}
      />
      <Button>Edit profile</Button>

      {/* Change password*/}
      <section style={{ marginTop: "2rem" }}>
        <h3>Password settings</h3>
        <Form
          layout="horizontal"
          colon={false}
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 8,
          }}
        >
          <Form.Item name="password" label="New password">
            <Input type="password" />
          </Form.Item>
          <Form.Item name="passwordConfirm" label="Confirm New password">
            <Input type="password" />
          </Form.Item>
          <Form.Item label=" ">
            <Button type="primary">Change password</Button>
          </Form.Item>
        </Form>
      </section>
    </>
  );
}
