import { Button, Form, Input } from "antd";

export function LoginPage() {
  const [form] = Form.useForm();

  const user = {
    username: "Test user",
    email: "user@test.com",
  };

  const onFinish = (values) => {
    console.log("values: ", values);
  };

  return (
    <Form
      name="login-form"
      form={form}
      layout="vertical"
      onFinish={onFinish}
      initialValues={user}
      style={{
        maxWidth: "30rem",
        margin: "2rem auto",
      }}
    >
      <h3>Login</h3>
      <Form.Item
        name="username"
        label="Enter your username"
        rules={[
          {
            required: true,
            message: "Username is required",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="email" label="Enter your email">
        <Input type="email" />
      </Form.Item>

      <Button htmlType="submit" type="primary">
        Login
      </Button>
    </Form>
  );
}
