import { Outlet } from "react-router-dom";
import PreqlyNavbar from "../Navigation/Navbar";
import Footer from "../Pages/home/Footer";

export default function MainLayout() {
  return (
    <div>
      <PreqlyNavbar />
      <Outlet />
      <Footer />
    </div>
  );
}
