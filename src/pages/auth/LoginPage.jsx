import { Button, Form, Input } from "antd";
<<<<<<< HEAD
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../../hooks/auth.hook";
import { login } from "../../redux/auth.slice";
=======
import { Link } from "react-router-dom";
>>>>>>> bd997956d2e4b174dc6489d19f70a17925c0455a

export function LoginPage() {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = {
    email: "user@test.com",
    password: "hellothere",
  };

  const onFinish = async (values) => {
    try {
      const res = await axios.post(
        "http://localhost:8000/account/api/token/",
        values,
      );
      const response = await res.data;
      dispatch(login(response));
      navigate("/admin");
    } catch (err) {
      console.log("err: ", err.message);
    }
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
        name="email"
        label="Enter your email"
        rules={[
          {
            required: true,
            message: "email is required",
          },
        ]}
      >
<<<<<<< HEAD
        <Input type="email" />
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
            min: 5,
            message: "Password must be minimum 8 chars long",
          },
          // {
          //   pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).*$",
          //   message:
          //     "Must have at least a uppercase and lowercase and a special character",
          // },
        ]}
      >
        <Input type="password" autoComplete="password" />
      </Form.Item>

=======
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

>>>>>>> bd997956d2e4b174dc6489d19f70a17925c0455a
      <Button htmlType="submit" block type="primary">
        Login
      </Button>
      <p style={{ textAlign: "center" }}>
        Don't have an account? <Link to={"/auth/register"}>Sign up</Link>
      </p>
    </Form>
  );
}
