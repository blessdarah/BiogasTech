import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router";

export const useSidebarRoutes = () => {
  const navigate = useNavigate();
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
