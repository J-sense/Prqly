import { createBrowserRouter, Navigate } from "react-router-dom";

import MainLayout from "../Layouts/MainLayout";
import { About } from "../Pages/ABout/About";
import { Home } from "../Pages/home/Home";
import PlaidConnectForm from "../Pages/PlaidConnectForm";
import Policy from "../Pages/Policy";
import PreApprovalForm from "../Pages/PreApprovalForm";
import Terms from "../Pages/Terms";

import ApprovedStep from "../Pages/ApprovedStep.jsx";
import BankConnectSuccess from "../Pages/BankConnectSuccess.JSX";
import NotApprovedStep from "../Pages/NotApprovedStep.jsx";
import PlaidLinkPage from "../Pages/Plaid-link-page";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <h1>404</h1>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "terms",
        element: <Terms />,
      },
      {
        path: "policy",
        element: <Policy />,
      },
    ],
  },
  { path: "/pre-approval", element: <PreApprovalForm /> }, // step 1
  { path: "/plaid-link-page", element: <PlaidLinkPage /> }, // step 1
  { path: "/pre-approval/bank", element: <PlaidConnectForm /> }, // step 2
  { path: "/pre-approval/connected", element: <BankConnectSuccess /> }, // step 3
  { path: "/pre-approval/approved", element: <ApprovedStep /> }, // step 4
  { path: "/pre-approval/not-approved", element: <NotApprovedStep /> }, // optional
  { path: "*", element: <Navigate to="/pre-approval" replace /> },
]);
