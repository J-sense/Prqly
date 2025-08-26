import { createBrowserRouter, Navigate } from "react-router-dom";

import MainLayout from "../Layouts/MainLayout";
import { Home } from "../Pages/home/Home";
import { About } from "../Pages/ABout/About";
import Terms from "../Pages/Terms";
import Policy from "../Pages/Policy";
import PreApprovalForm from "../Pages/PreApprovalForm";
import PlaidConnectForm from "../Pages/PlaidConnectForm";

import ApprovedStep from "../Pages/ApprovedStep.jsx";
import BankConnectSuccess from "../Pages/BankConnectSuccess.JSX";
import NotApprovedStep from "../Pages/NotApprovedStep.jsx";
// import { LoanPreApprovalForm } from "../Pages/PreApprovalForm";
// import LoanPreApprovalForm from "../Pages/LoanPreApprovalForm";

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
  { path: "/pre-approval/bank", element: <PlaidConnectForm /> }, // step 2
  { path: "/pre-approval/connected", element: <BankConnectSuccess /> }, // step 3
  { path: "/pre-approval/approved", element: <ApprovedStep /> }, // step 4
  { path: "/pre-approval/not-approved", element: <NotApprovedStep /> }, // optional
  { path: "*", element: <Navigate to="/pre-approval" replace /> },
]);
