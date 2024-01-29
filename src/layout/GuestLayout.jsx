import { Outlet } from "react-router";
import { ConfigProvider } from "antd";
import Header from "../components/Header";

export function GuestLayout() {
  return (
    <ConfigProvider theme={{ token: { colorPrimary: "#00b96b" } }}>
      <Header />
      <Outlet />
    </ConfigProvider>
  );
}
