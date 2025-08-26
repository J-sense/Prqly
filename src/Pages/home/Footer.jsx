// app/components/Footer.jsx
"use client";

import React, { useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Footer({ homePath = "/" }) {
  const navigate = useNavigate();
  const location = useLocation();

  const columns = [
    {
      heading: "Product",
      links: [
        { label: "Pre-Approval", to: "/pre-approval" },
        { label: "How It Works", anchor: "how-it-works" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "About", to: "/about" },
        { label: "Contact", anchor: "contact" },
      ],
    },
    {
      heading: "Legal",
      links: [
        { label: "Privacy Policy", to: "/policy" },
        { label: "Terms of service", to: "/terms" },
      ],
    },
  ];

  const year = new Date().getFullYear();

  const scrollToId = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const handleAnchor = (id) => {
    if (location.pathname !== homePath) {
      // navigate home first, then scroll
      navigate(`${homePath}#${id}`);
      setTimeout(() => scrollToId(id), 0);
    } else {
      scrollToId(id);
      // keep URL hash in sync (optional)
      if (window?.history?.replaceState) {
        window.history.replaceState(null, "", `#${id}`);
      } else {
        window.location.hash = id;
      }
    }
  };

  const linkCls =
    "text-white/80 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded";

  return (
    <footer className="bg-[#2B4A67] text-white/90 font-popins">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Top grid */}
        <div className="py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="flex flex-col items-center lg:items-start gap-3">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-blue-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-indigo-400" />
              </span>
              <Link to="/" className="text-2xl font-semibold tracking-wide">
                Preqly<span className="align-super text-[10px] ml-0.5">™</span>
              </Link>
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <h4 className="text-lg font-semibold mb-3">{col.heading}</h4>
              <ul className="space-y-2">
                {col.links.map((l, i) => (
                  <li key={`${col.heading}-${i}`}>
                    {"to" in l ? (
                      <Link to={l.to} className={linkCls}>
                        {l.label}
                      </Link>
                    ) : (
                      <button
                        type="button"
                        onClick={() => handleAnchor(l.anchor)}
                        className={linkCls}
                      >
                        {l.label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10" />

        {/* Bottom note */}
        <div className="py-4 text-center text-xs text-white/70">
          Powered by {year}{" "}
          <Link to="/" className="underline-offset-2 hover:underline">
            Preqly™
          </Link>{" "}
          · All rights reserved
        </div>
      </div>
    </footer>
  );
}
