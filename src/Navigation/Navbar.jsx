"use client";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../ui/Logo";

export default function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // পেজ লোকেশন ট্র্যাক করার জন্য

  const nav = [
    { label: "Home", href: "#home" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href) => {
    if (href.startsWith("/")) {
      navigate(href);
      setOpen(false);
      return;
    }
    if (href.startsWith("#")) {
      const id = href.replace("#", "");
      if (location.pathname !== "/") {
        navigate("/", { state: { targetId: id } });
      } else {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }
    setOpen(false);
  };
  useEffect(() => {
    if (location.pathname === "/" && location.state?.targetId) {
      const id = location.state.targetId;
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        window.history.replaceState({}, document.title);
      }, 100);
    }
  }, [location]);

  return (
    <header className="sticky top-0 z-50 font-sans ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <div className="pt-20">
            <Logo />
          </div>
          <nav className="hidden md:flex gap-8 pt-20">
            {nav.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-[16px] transition-colors text-[#FFDD28] hover:text-gray-900 font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="hidden md:flex mt-20">
            <button
              onClick={() => handleNavClick("/pre-approval")}
              className="inline-flex items-center justify-center px-6 py-2 rounded-lg bg-yellow-400 text-slate-900 font-semibold text-sm hover:bg-yellow-300 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Get Pre-Approved
            </button>
          </div>
          <button
            className="md:hidden mt-20 inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 bg-white text-gray-700"
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
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white shadow-sm">
          <nav className="flex flex-col gap-3 p-4">
            {nav.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-left text-gray-700 hover:text-gray-900 text-sm font-medium"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("/pre-approval")}
              className="w-full inline-flex items-center justify-center px-6 py-2 rounded-lg bg-yellow-400 text-slate-900 font-semibold text-sm hover:bg-yellow-300 transition-all duration-200"
            >
              Get Pre-Approved
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
