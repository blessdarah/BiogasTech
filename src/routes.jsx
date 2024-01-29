import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "./layout/DashboadLayout";
import { GuestLayout } from "./layout/GuestLayout";
import { DashboardPage } from "./pages/admin/DashobardPage";
import { WelcomePage } from "./pages/frontend/WelcomePage";
import { LoginPage } from "./pages/auth/LoginPage";
import { RegisterPage } from "./pages/auth/RegisterPage";
import { ProfilePage } from "./pages/admin/ProfilePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        index: true,
        element: <WelcomePage />,
      },
    ],
  },
  {
    path: "/admin",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
    ],
  },
  {
    path: "/auth/login",
    element: <LoginPage />,
  },
  {
    path: "/auth/register",
    element: <RegisterPage />,
  },
]);
