import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

const NAV_LINKS = [
  { label: "Home",      to: "/home" },
  { label: "Jobs",      to: "/jobs" },
  { label: "Companies", to: "/companies" },
  { label: "Services",  to: "/services" },
  { label: "My Jobs",   to: "/applications" },
];

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const isLoggedIn = !!sessionStorage.getItem("tj_phone");
  const phone = sessionStorage.getItem("tj_phone") || "";
  const initials = phone.replace(/\D/g, "").slice(-2, -1) || "U";

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/");
  };

  const isActive = (to) => location.pathname === to;

  return (
    <nav style={{ background: "#fff", borderBottom: "1px solid #f0e8f4", position: "sticky", top: 0, zIndex: 100, boxShadow: "0 2px 12px rgba(119,43,136,0.07)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        {/* Logo */}
        <Link to={isLoggedIn ? "/dashboard" : "/"} style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 2 }}>
          <span style={{ fontSize: 26, fontWeight: 900, color: "#772B88", letterSpacing: "-0.5px" }}>True</span>
          <span style={{ fontSize: 26, fontWeight: 900, color: "#19893F", letterSpacing: "-0.5px" }}>Jobs</span>
        </Link>

        {/* Desktop Nav Links */}
        <div style={{ display: "flex", alignItems: "center", gap: 32 }} className="hidden md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              style={{
                textDecoration: "none",
                fontSize: 15,
                fontWeight: isActive(link.to) ? 700 : 500,
                color: isActive(link.to) ? "#772B88" : "#414141",
                borderBottom: isActive(link.to) ? "2px solid #772B88" : "2px solid transparent",
                paddingBottom: 2,
                transition: "color 0.2s",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right actions */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {isLoggedIn ? (
            <>
              {/* Profile avatar */}
              <div
                onClick={() => navigate("/profile")}
                style={{
                  width: 38, height: 38, borderRadius: "50%",
                  background: "linear-gradient(135deg, #772B88, #9B3BAC)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#fff", fontWeight: 700, fontSize: 15, cursor: "pointer",
                  boxShadow: "0 2px 8px rgba(119,43,136,0.3)",
                }}
              >
                {initials}
              </div>
              <button
                onClick={handleLogout}
                style={{
                  background: "transparent", border: "1.5px solid #e0cce8",
                  borderRadius: 8, padding: "6px 16px", fontSize: 13,
                  fontWeight: 600, color: "#772B88", cursor: "pointer",
                  transition: "all 0.2s",
                }}
                onMouseOver={(e) => { e.target.style.background = "#772B88"; e.target.style.color = "#fff"; }}
                onMouseOut={(e) => { e.target.style.background = "transparent"; e.target.style.color = "#772B88"; }}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button onClick={() => navigate("/login")} className="btn-outline" style={{ padding: "7px 20px", fontSize: 14 }}>
                Login
              </button>
              <button onClick={() => navigate("/login")} className="btn-primary" style={{ padding: "8px 20px", fontSize: 14 }}>
                Register
              </button>
            </>
          )}

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: 6 }}
            className="md-menu-btn"
          >
            <span style={{ fontSize: 22, color: "#772B88" }}>{menuOpen ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div style={{ background: "#fff", borderTop: "1px solid #f0e8f4", padding: "12px 24px 16px" }}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              style={{ display: "block", padding: "10px 0", color: "#414141", textDecoration: "none", fontWeight: 500, fontSize: 15 }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
