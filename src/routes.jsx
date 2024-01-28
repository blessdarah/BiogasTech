import { createBrowserRouter } from "react-router-dom";
import AppShell from "./layout/DashboadLayout";
import DashboardLayout from "./layout/DashboadLayout";
import { GuestLayout } from "./layout/GuestLayout";
import { DashboardPage } from "./pages/admin/DashobardPage";
import { WelcomePage } from "./pages/frontend/WelcomePage";
import { LoginPage } from "./pages/auth/LoginPage";
import { RegisterPage } from "./pages/auth/RegisterPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/welcome",
        element: <WelcomePage />,
      },
    ],
  },
  {
    path: "/admin",
    element: <DashboardLayout />,
    children: [
      {
        path: "/admin/dashboard",
        element: <DashboardPage />,
      },
    ],
  },
  {
    path: "/auth/login",
    element: <LoginPage />,
  },{
    path: "/auth/register",
    element: <RegisterPage />,
  },
]);
