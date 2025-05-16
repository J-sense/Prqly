import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layouts/Dashboard";
import AnimatedModal from "../components/AnimatedModal/AnimatedModal";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <h1>404</h1>,
    children: [
      {
        path: "/reset-password",
        element: <AnimatedModal />,
      },
      {
        path: "/about",
        element: <h1>Home</h1>,
      },
    ],
  },
  {
    path: "/login",
    element: <h1>Login</h1>,
  },
  {
    path: "/register",
    element: <h1>Register</h1>,
  },
]);
