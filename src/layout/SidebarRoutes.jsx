import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

export const useSidebarRoutes = () => {
  const sidebarRoutes = [
    {
      icon: <UserOutlined />,
      label: "Dashboard",
      key: "/admin",
    },
    {
      icon: <VideoCameraOutlined />,
      label: "Products",
    },
    {
      icon: <UploadOutlined />,
      label: "Categories",
    },
  ];
  return {
    sidebarRoutes,
  };
};
