import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

const SIDEBAR_ITEMS = [
  { icon: "📋", label: "Job Postings",       to: "/recruiter/dashboard" },
  { icon: "🔍", label: "Search Candidates",  to: "/recruiter/candidates" },
  { icon: "🔖", label: "Saved Profiles",     to: "/recruiter/saved" },
  { icon: "💬", label: "Chats",              to: "/recruiter/chat" },
  { icon: "💳", label: "Payment History",    to: "/recruiter/payments" },
  { icon: "⭐", label: "Subscription Plans", to: "/recruiter/plans" },
  { icon: "⚙️", label: "Settings",          to: "/recruiter/settings" },
  { icon: "❓", label: "Help & Support",     to: "/recruiter/help" },
];

export default function RecruiterLayout({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const phone = sessionStorage.getItem("tj_phone") || "";
  const initials = phone.replace(/\D/g, "").slice(-2, -1) || "R";

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#f9f7fc" }}>
      {/* Top bar */}
      <div style={{
        background: "#772B88", height: 56, display: "flex", alignItems: "center",
        justifyContent: "space-between", padding: "0 24px", position: "sticky", top: 0, zIndex: 100,
        boxShadow: "0 2px 12px rgba(119,43,136,0.2)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <button
            onClick={() => setCollapsed(!collapsed)}
            style={{ background: "rgba(255,255,255,0.15)", border: "none", borderRadius: 8, width: 32, height: 32, cursor: "pointer", color: "#fff", fontSize: 16 }}
          >☰</button>
          <Link to="/recruiter/dashboard" style={{ textDecoration: "none", display: "flex", gap: 2 }}>
            <span style={{ fontSize: 22, fontWeight: 900, color: "#fff" }}>True</span>
            <span style={{ fontSize: 22, fontWeight: 900, color: "#7dff9b" }}>Jobs</span>
          </Link>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button
            style={{ background: "rgba(255,255,255,0.15)", border: "none", borderRadius: 8, padding: "6px 16px", color: "#fff", fontWeight: 600, fontSize: 13, cursor: "pointer" }}
            onClick={() => navigate("/recruiter/post-job")}
          >+ Post Job</button>
          <div style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, cursor: "pointer" }}
            onClick={() => navigate("/recruiter/settings")}
          >{initials}</div>
          <button
            onClick={() => { sessionStorage.clear(); navigate("/"); }}
            style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.3)", borderRadius: 8, padding: "5px 14px", color: "#fff", fontSize: 12, fontWeight: 600, cursor: "pointer" }}
          >Logout</button>
        </div>
      </div>

      <div style={{ display: "flex", flex: 1 }}>
        {/* Sidebar */}
        <aside style={{
          width: collapsed ? 60 : 230, minHeight: "calc(100vh - 56px)",
          background: "#fff", borderRight: "1px solid #f0e8f4",
          transition: "width 0.2s ease", flexShrink: 0, overflowX: "hidden",
          boxShadow: "2px 0 8px rgba(119,43,136,0.04)",
        }}>
          <nav style={{ padding: "16px 0" }}>
            {SIDEBAR_ITEMS.map((item) => {
              const active = location.pathname === item.to;
              return (
                <Link
                  key={item.label}
                  to={item.to}
                  title={collapsed ? item.label : ""}
                  style={{
                    display: "flex", alignItems: "center", gap: 12,
                    padding: "11px 18px", textDecoration: "none",
                    background: active ? "#f5eefa" : "transparent",
                    borderRight: active ? "3px solid #772B88" : "3px solid transparent",
                    color: active ? "#772B88" : "#414141",
                    fontWeight: active ? 700 : 400,
                    fontSize: 14, transition: "all 0.15s", whiteSpace: "nowrap",
                  }}
                >
                  <span style={{ fontSize: 17, flexShrink: 0 }}>{item.icon}</span>
                  {!collapsed && <span>{item.label}</span>}
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* Main content */}
        <main style={{ flex: 1, padding: "28px 32px", overflowY: "auto" }} className="page-enter">
          {children}
        </main>
      </div>
    </div>
  );
}
