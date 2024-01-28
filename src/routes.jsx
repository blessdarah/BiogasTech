import { createBrowserRouter } from "react-router-dom";
import AppShell from "./layout/DashboadLayout";
import DashboardLayout from "./layout/DashboadLayout";
import { GuestLayout } from "./layout/GuestLayout";
import { DashboardPage } from "./pages/DashobardPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <GuestLayout />,
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
]);
