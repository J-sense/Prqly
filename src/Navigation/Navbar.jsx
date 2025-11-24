import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../ui/Logo";
import Button from "../ui/Button";

export default function PreqlyNavbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const nav = [
    { label: "Home", href: "#/" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "#contact" },
  ];

  // Smooth scroll for hash links
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      const el = document.getElementById(id);
      if (el) {
        requestAnimationFrame(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      }
    }
  }, [location]);

  // Handle navigation click
  const handleNavClick = (href) => {
    if (href.startsWith("#")) {
      if (location.pathname !== "/") {
        navigate("/" + href); // redirect to home with hash
      } else {
        const id = href.slice(1);
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(href);
    }
    setOpen(false); // close mobile menu
  };

  return (
    <header className="sticky top-0 z-50 font-semibold bg-white/80 backdrop-blur-md border-b font-popins border-gray-100 font-poppins">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 mt-4">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Logo height="22" width="167" alt="Preqly" />

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8">
            {nav.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className={`text-sm transition-colors ${
                  (location.pathname === item.href && !location.hash) ||
                  location.hash === item.href
                    ? "font-semibold text-gray-900"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <Link to="/pre-approval">
              <Button
                label="Get Pre-Approved"
                className="bg-secondary text-white"
              />
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 bg-white text-gray-700"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white shadow-sm font-semibold">
          <nav className="flex flex-col gap-3 p-4">
            {nav.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-left text-gray-700 hover:text-gray-900 text-sm"
              >
                {item.label}
              </button>
            ))}
            <Link to="/pre-approval" onClick={() => setOpen(false)}>
              <Button
                label="Get Pre-Approved"
                className="bg-secondary text-white  w-full"
              />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
