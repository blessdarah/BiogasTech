import { Outlet } from "react-router";
import { ConfigProvider } from "antd";
<<<<<<< HEAD
import Header from "../components/Header";

export function GuestLayout() {
  return (
    <ConfigProvider theme={{ token: { colorPrimary: "#00b96b" } }}>
      <Header />
=======
import {Header} from '../Components/Header'
export function GuestLayout() {
  return (
    <ConfigProvider theme={{ token: { colorPrimary: "#00b96b" } }}>

      <Header />

>>>>>>> dev
      <Outlet />
    </ConfigProvider>
  );
}
