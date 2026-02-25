import { Link } from "react-router-dom";

const Logo = ({ width = "", height = "px", alt = "Logo" }) => {
  return (
    <Link to="/">
      <img
        src={"/Preqly Logo 1.png"} // Replace with the actual path to your logo image
        alt={alt}
        style={{ width: width, height: height }}
        className="object-contain h-28 w-28"
        // Dynamically set width and height
      />
    </Link>
  );
};

export default Logo;
