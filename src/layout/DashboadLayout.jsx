import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Avatar, Button, Flex, Layout, Menu, Popover, theme } from "antd";
import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router";
import { useSidebarRoutes } from "./SidebarRoutes";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/auth.slice";
const { Header, Sider, Content } = Layout;

const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { sidebarRoutes } = useSidebarRoutes();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Sider
        style={{ minHeight: "calc(100vh - 1rem)" }}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          onClick={(e) => navigate(e.key)}
          defaultSelectedKeys={["1"]}
          items={sidebarRoutes}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Flex justify="space-between" align="center">
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
            <div style={{ marginRight: "1rem" }}>
              <Popover
                style={{ cursor: "pointer" }}
                content={
                  <Menu
                    mode="vertical"
                    style={{ border: "none", minWidth: "8rem" }}
                    items={[
                      {
                        label: <Link to="profile">Profile</Link>,
                      },
                      {
                        label: "Logout",
                        onClick: () => {
                          dispatch(logout);
                          navigate("/");
                        },
                      },
                    ]}
                  />
                }
                trigger="click"
              >
                <span>Username</span> <Avatar src="https://picsum.photos/20" />
              </Popover>
            </div>
          </Flex>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default DashboardLayout;
