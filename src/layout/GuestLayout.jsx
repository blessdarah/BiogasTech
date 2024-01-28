import { Outlet } from "react-router";
import { ConfigProvider } from "antd";
import { Header } from "../Components/Header";

export function GuestLayout() {
  return (
    <ConfigProvider theme={{ token: { colorPrimary: "#00b96b" } }}>
      <h3>This is the guest layout</h3>
      <Outlet />
      <Header />

    </ConfigProvider>
  );
}
