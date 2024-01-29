import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";

export function LoginPage() {
  const [form] = Form.useForm();

  const user = {
    username: "Test user",
    password: "testuser",
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
      <header style={{ textAlign: "center" }}>
        <Link to={"/"}>
          <img src="/logo.png" width="200px" alt="logo" />
        </Link>
        <h3>Login</h3>
      </header>

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

      <Form.Item
        name="password"
        label="Enter your password"
        rules={[
          {
            required: true,
            message: "Password must be provided",
          },
          {
            min: 8,
            message: "Password must be minimum 8 chars long",
          },
          {
            pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).*$",
            message:
              "Must have at least a uppercase and lowercase and a special character",
          },
        ]}
      >
        <Input type="password" autoComplete="password" />
      </Form.Item>

      <Button htmlType="submit" block type="primary">
        Login
      </Button>
      <p style={{ textAlign: "center" }}>
        Don't have an account? <Link to={"/auth/register"}>Sign up</Link>
      </p>
    </Form>
  );
}
