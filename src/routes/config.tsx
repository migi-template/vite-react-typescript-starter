import { lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";
import AuthLayout from "@/layouts/AuthLayout";
import { withLoading } from "./utils";

const Auth = lazy(() => import("@/pages/Auth"));
const Home = lazy(() => import("@/pages/Home"));
const HomeDetail = lazy(() => import("@/pages/HomeDetail"));
const NotFound = lazy(() => import("@/pages/404"));

export const routes: RouteObject[] = [
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "",
        element: <Navigate to="/home" />,
      },
      {
        path: "",
        children: [
          {
            path: "home",
            element: <Home />,
          },
          {
            path: "home/:id",
            element: <HomeDetail />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default withLoading(routes);
