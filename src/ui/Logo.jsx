import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";

const Logo = ({ width = "100px", height = "100px", alt = "Logo" }) => {
  return (
    <Link to="/">
      <img
        src={logo} // Replace with the actual path to your logo image
        alt={alt}
        style={{ width: width, height: height }} // Dynamically set width and height
      />
    </Link>
  );
};

export default Logo;
