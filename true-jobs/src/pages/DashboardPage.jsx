import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";

const QUICK_STATS = [
  { label: "Jobs Applied", value: "12", icon: "📋", count: "+2 this week" },
  { label: "Profile Views", value: "48", icon: "👁️", count: "8 today" },
  { label: "Saved Jobs", value: "7",  icon: "🔖", count: "3 nearing deadline" },
  { label: "Interviews", value: "3",  icon: "📅", count: "1 upcoming" },
];

const RECOMMENDED_JOBS = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Infosys",
    location: "Bengaluru",
    type: "Full Time",
    salary: "₹8L – ₹14L",
    posted: "2 days ago",
    logo: "IN",
    color: "#0066cc"
  },
  {
    id: 2,
    title: "UI/UX Designer",
    company: "Wipro",
    location: "Hyderabad",
    type: "Full Time",
    salary: "₹6L – ₹10L",
    posted: "1 day ago",
    logo: "WI",
    color: "#7B1FA2"
  },
  {
    id: 3,
    title: "React Native Developer",
    company: "TCS",
    location: "Chennai",
    type: "Remote",
    salary: "₹10L – ₹18L",
    posted: "5 hours ago",
    logo: "TC",
    color: "#1B5E20"
  },
];

export default function DashboardPage() {
  const navigate = useNavigate();
  const phone = sessionStorage.getItem("tj_phone") || "User";
  const [searchJob, setSearchJob] = useState("");

  return (
    <MainLayout>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 24px" }}>
        
        {/* Welcome Section */}
        <div style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, color: "#414141" }}>
            Welcome back, <span style={{ color: "#772B88" }}>{phone.slice(-10)}</span>! 👋
          </h2>
          <p style={{ color: "#909090", fontSize: 15, marginTop: 4 }}>
            Here's what's happening with your job search today.
          </p>
        </div>

        {/* Quick Stats Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20, marginBottom: 40 }}>
          {QUICK_STATS.map((s) => (
            <div key={s.label} className="card" style={{ padding: "24px", display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ width: 52, height: 52, borderRadius: 12, background: "#f5eefa", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>
                {s.icon}
              </div>
              <div>
                <div style={{ fontSize: 24, fontWeight: 900, color: "#414141", lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#909090", marginTop: 4 }}>{s.label}</div>
                <div style={{ fontSize: 11, color: "#19893F", fontWeight: 700, marginTop: 2 }}>{s.count}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 32 }}>
          
          {/* Main Content Area */}
          <div>
            {/* Search Bar */}
            <div style={{ background: "#fff", borderRadius: 14, padding: "8px", border: "1.5px solid #f0e8f4", display: "flex", gap: 8, marginBottom: 32, boxShadow: "0 4px 12px rgba(119,43,136,0.05)" }}>
              <input 
                type="text" 
                placeholder="Search jobs by title, company or location..." 
                value={searchJob}
                onChange={(e) => setSearchJob(e.target.value)}
                style={{ flex: 1, border: "none", outline: "none", padding: "12px 16px", fontSize: 14, color: "#414141" }}
              />
              <button 
                onClick={() => navigate(`/jobs?q=${searchJob}`)}
                className="btn-primary" 
                style={{ padding: "10px 24px" }}
              >
                Search
              </button>
            </div>

            {/* Recommended Jobs */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
              <h3 style={{ fontSize: 20, fontWeight: 800, color: "#414141" }}>Recommended Jobs</h3>
              <button 
                onClick={() => navigate("/jobs")}
                style={{ background: "none", border: "none", color: "#772B88", fontWeight: 700, fontSize: 14, cursor: "pointer" }}
              >
                View all →
              </button>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {RECOMMENDED_JOBS.map((job) => (
                <div key={job.id} onClick={() => navigate(`/jobs/${job.id}`)} className="card" style={{ padding: "20px", cursor: "pointer", transition: "all 0.2s" }}
                  onMouseOver={(e) => e.currentTarget.style.borderColor = "#e0c4f0"}
                  onMouseOut={(e) => e.currentTarget.style.borderColor = "#f0e8f4"}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                      <div style={{ width: 44, height: 44, borderRadius: 10, background: job.color, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 900, fontSize: 14 }}>
                        {job.logo}
                      </div>
                      <div>
                        <div style={{ fontWeight: 800, fontSize: 15, color: "#414141" }}>{job.title}</div>
                        <div style={{ fontSize: 13, color: "#909090" }}>{job.company} • {job.location}</div>
                      </div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontWeight: 700, fontSize: 15, color: "#19893F" }}>{job.salary}</div>
                      <div style={{ fontSize: 12, color: "#909090", marginTop: 2 }}>{job.posted}</div>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 8, marginTop: 14 }}>
                    <span className="tag tag-purple">{job.type}</span>
                    <span className="tag tag-gray">IT Services</span>
                    <span className="tag tag-green">Full Time</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar Area */}
          <div>
            {/* Profile Completion */}
            <div className="card" style={{ padding: "24px", background: "linear-gradient(135deg, #772B88, #9B3BAC)", border: "none", marginBottom: 24 }}>
              <div style={{ color: "#fff", fontWeight: 800, fontSize: 18, marginBottom: 8 }}>Complete Profile</div>
              <p style={{ color: "#dbb9ec", fontSize: 13, lineHeight: 1.5, marginBottom: 20 }}>
                Profiles with 100% completion get 3x more recruiters attention.
              </p>
              <div style={{ background: "rgba(255,255,255,0.2)", height: 8, borderRadius: 4, marginBottom: 12, position: "relative" }}>
                <div style={{ background: "#7dff9b", height: "100%", width: "65%", borderRadius: 4 }}></div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", color: "#fff", fontSize: 12, fontWeight: 700, marginBottom: 20 }}>
                <span>65% Complete</span>
                <span>Next: Add Skills</span>
              </div>
              <button 
                onClick={() => navigate("/profile")}
                style={{ width: "100%", background: "#fff", color: "#772B88", border: "none", borderRadius: 10, padding: "10px", fontWeight: 800, fontSize: 13, cursor: "pointer" }}
              >
                Complete Now →
              </button>
            </div>

            {/* Quick Links */}
            <div className="card" style={{ padding: "20px" }}>
              <h4 style={{ fontWeight: 800, fontSize: 15, color: "#414141", marginBottom: 16 }}>Quick Links</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                {[
                  { label: "My Applications", to: "/applications", icon: "📄" },
                  { label: "Saved Jobs", to: "/jobs?saved=true", icon: "🔖" },
                  { label: "Messages", to: "/chat", icon: "💬" },
                  { label: "Account Settings", to: "/settings", icon: "⚙️" },
                ].map((item) => (
                  <button 
                    key={item.label}
                    onClick={() => navigate(item.to)}
                    style={{ background: "none", border: "none", textAlign: "left", padding: "10px 12px", borderRadius: 8, display: "flex", alignItems: "center", gap: 12, cursor: "pointer", transition: "background 0.2s" }}
                    onMouseOver={(e) => e.currentTarget.style.background = "#f5eefa"}
                    onMouseOut={(e) => e.currentTarget.style.background = "transparent"}
                  >
                    <span style={{ fontSize: 16 }}>{item.icon}</span>
                    <span style={{ fontSize: 14, fontWeight: 600, color: "#414141" }}>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
