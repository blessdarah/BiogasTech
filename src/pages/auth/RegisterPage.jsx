import { Button, Form, Input, Typography } from "antd";
import { useState } from "react";
import "../../assets/index.css";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export function RegisterPage() {
  const [form] = Form.useForm();
  const [match, setMatch] = useState(false);
  const navigate = useNavigate();

  const handleMatch = (value) => {
    setMatch(value);
  };

  const onFinish = async (values) => {
    // e.preventDefault();
    const { password, passwordConfirm } = await form.validateFields();

    if (password !== passwordConfirm) {
      // Show error message and prevent form submission
      console.log("!error");
      handleMatch(true);
    } else {
      // Submit form data
      handleMatch(false);

      console.log(values);
    }

    console.log(match);
  };

  return (
    <Form
      name="register-page"
      form={form}
      layout="vertical"
      onFinish={onFinish}
      style={{
        maxWidth: "30rem",
        margin: "2rem auto",
      }}
    >
      <header style={{ textAlign: "center" }}>
        <Link to={"/"}>
          <img src="/logo.png" width="200px" alt="logo" />
        </Link>

        <Typography.Title
          level={3}
          style={{ textAlign: "center", marginTop: 0 }}
        >
          Create Account
        </Typography.Title>
      </header>

      <Form.Item
        name="username"
        label="Enter your username"
        rules={[
          {
            required: true,
            message: "Username is required",
          },
          {
            max: 15,
            message: "Username must be less than 15 characters",
          },
          {
            min: 6,
            message: "Username must be greater than 6 characters",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="email"
        label="Enter your email"
        rules={[
          {
            required: true,
            message: "email is required",
          },
        ]}
      >
        <Input type="email" />
      </Form.Item>

      <Form.Item
        name="password"
        label="Enter your password"
        rules={[
          {
            required: true,
            message: "Password is required",
          },
          {
            max: 50,
            message: "Password must be less than 50 characters",
          },
          {
            min: 6,
            message: "Password must be greater than 8 characters",
          },
        ]}
      >
        <Input type="password" />
      </Form.Item>

      <Form.Item
        name="passwordConfirm"
        label="Enter your password Confirm"
        rules={[
          {
            required: true,
            message: "Password Confirm is required",
          },
          {
            max: 50,
            message: "Password Confirm must be less than 50 characters",
          },
          {
            min: 6,
            message: "Password Confirm must be greater than 8 characters",
          },
        ]}
      >
        <Input type="password" />
      </Form.Item>

      <div className="text-red mb-4">{match && "Password must match"}</div>

      <div>
        <Button htmlType="submit" type="primary" block>
          Sign Up
        </Button>
      </div>

      <p style={{ textAlign: "center" }}>
        {" "}
        Already have account? <Link to={"/auth/login"}>Login</Link>
      </p>
    </Form>
  );
}

