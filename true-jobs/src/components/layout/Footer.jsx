import React from "react";
import { Link } from "react-router-dom";

const COLUMNS = [
  {
    title: "For Job Seekers",
    links: ["Browse Jobs", "Job Alerts", "Career Resources", "Resume Tips", "Interview Prep"],
  },
  {
    title: "For Employers",
    links: ["Post a Job", "Search Candidates", "Pricing Plans", "Recruitment Tools", "HR Solutions"],
  },
  {
    title: "Company",
    links: ["About Us", "Blog", "Press", "Careers at TrueJobs", "Contact Us"],
  },
  {
    title: "Support",
    links: ["Help Center", "Privacy Policy", "Terms of Service", "Cookie Policy", "Accessibility"],
  },
];

export default function Footer() {
  return (
    <footer style={{ background: "#1a0d2b", color: "#cbb8d8", fontFamily: "'Lato', sans-serif" }}>
      {/* Main footer content */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "52px 24px 32px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 36 }}>

        {/* Brand column */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 2, marginBottom: 14 }}>
            <span style={{ fontSize: 24, fontWeight: 900, color: "#c47fe0" }}>True</span>
            <span style={{ fontSize: 24, fontWeight: 900, color: "#19893F" }}>Jobs</span>
          </div>
          <p style={{ fontSize: 13.5, lineHeight: 1.7, color: "#a78bb8", marginBottom: 20 }}>
            Connecting talent with opportunity across India and beyond. Your dream job is one click away.
          </p>
          <div style={{ display: "flex", gap: 10 }}>
            {["𝕏", "in", "f", "▶"].map((icon, i) => (
              <a
                key={i}
                href="#"
                style={{
                  width: 34, height: 34, borderRadius: "50%",
                  background: "rgba(199,143,224,0.12)",
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  color: "#c47fe0", fontSize: 13, textDecoration: "none",
                  transition: "background 0.2s",
                }}
                onMouseOver={(e) => e.currentTarget.style.background = "rgba(199,143,224,0.25)"}
                onMouseOut={(e) => e.currentTarget.style.background = "rgba(199,143,224,0.12)"}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {COLUMNS.map((col) => (
          <div key={col.title}>
            <h4 style={{ fontSize: 13, fontWeight: 700, color: "#e0c8f0", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 14 }}>
              {col.title}
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 9 }}>
              {col.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    style={{ fontSize: 13.5, color: "#a78bb8", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseOver={(e) => e.target.style.color = "#c47fe0"}
                    onMouseOut={(e) => e.target.style.color = "#a78bb8"}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(199,143,224,0.12)", padding: "18px 24px", maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
        <p style={{ fontSize: 12.5, color: "#7a5e8a", margin: 0 }}>
          © {new Date().getFullYear()} TrueJobs. All rights reserved. Built by Smart Global Solutions.
        </p>
        <div style={{ display: "flex", gap: 20 }}>
          {["Privacy", "Terms", "Cookies"].map((item) => (
            <a key={item} href="#" style={{ fontSize: 12.5, color: "#7a5e8a", textDecoration: "none" }}>{item}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}
