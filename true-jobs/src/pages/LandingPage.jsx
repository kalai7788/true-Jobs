import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";

const CATEGORIES = [
  { icon: "💻", label: "Information Technology", count: "2.4K+" },
  { icon: "📊", label: "Finance & Accounting",    count: "1.1K+" },
  { icon: "🏥", label: "Healthcare",               count: "980+" },
  { icon: "📣", label: "Marketing & Sales",        count: "870+" },
  { icon: "⚙️", label: "Engineering",              count: "1.5K+" },
  { icon: "🎨", label: "Design & Creative",        count: "620+" },
  { icon: "📚", label: "Education",                count: "740+" },
  { icon: "🏗️", label: "Construction",             count: "430+" },
];

const FEATURED_JOBS = [
  { id: 1, title: "Senior Frontend Developer", company: "Infosys", location: "Bengaluru", type: "Full Time",  salary: "₹12L–₹20L", logo: "IN", color: "#0066cc" },
  { id: 2, title: "Data Analyst",              company: "Wipro",   location: "Hyderabad", type: "Hybrid",     salary: "₹8L–₹14L",  logo: "WI", color: "#7B1FA2" },
  { id: 3, title: "UI/UX Designer",            company: "Zoho",    location: "Chennai",   type: "Remote",     salary: "₹7L–₹12L",  logo: "ZH", color: "#E65100" },
  { id: 4, title: "Java Backend Engineer",     company: "TCS",     location: "Pune",      type: "Full Time",  salary: "₹10L–₹18L", logo: "TC", color: "#1B5E20" },
  { id: 5, title: "Product Manager",           company: "Flipkart", location: "Bengaluru",type: "Full Time",  salary: "₹18L–₹30L", logo: "FL", color: "#FF6F00" },
  { id: 6, title: "DevOps Engineer",           company: "HCL",     location: "Noida",     type: "Hybrid",     salary: "₹10L–₹16L", logo: "HC", color: "#004D40" },
];

const STEPS = [
  { icon: "📝", title: "Create Account",  desc: "Sign up with your phone number in seconds. No lengthy forms." },
  { icon: "🔍", title: "Search & Filter", desc: "Browse thousands of jobs filtered by role, location, salary and more." },
  { icon: "🚀", title: "Apply & Get Hired",desc: "Apply with one click and track all your applications in one dashboard." },
];

const STATS = [
  { value: "50K+", label: "Active Jobs" },
  { value: "12K+", label: "Companies" },
  { value: "2M+",  label: "Job Seekers" },
  { value: "95%",  label: "Satisfaction Rate" },
];

export default function LandingPage() {
  const navigate = useNavigate();
  const [searchJob, setSearchJob] = useState("");
  const [searchLoc, setSearchLoc] = useState("");

  const handleSearch = () => {
    navigate(`/jobs?q=${searchJob}&loc=${searchLoc}`);
  };

  return (
    <MainLayout>
      {/* ── HERO ── */}
      <section style={{
        background: "linear-gradient(135deg, #4a1060 0%, #772B88 50%, #9B3BAC 100%)",
        padding: "80px 24px 100px", textAlign: "center", position: "relative", overflow: "hidden",
      }}>
        {/* Decorative circles */}
        <div style={{ position: "absolute", top: -60, right: -60, width: 300, height: 300, borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />
        <div style={{ position: "absolute", bottom: -80, left: -80, width: 350, height: 350, borderRadius: "50%", background: "rgba(255,255,255,0.04)" }} />

        <div style={{ maxWidth: 760, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.12)", borderRadius: 999, padding: "6px 16px", marginBottom: 24 }}>
            <span style={{ fontSize: 14, color: "#e8c8f4", fontWeight: 500 }}>🌟 India's Most Trusted Job Platform</span>
          </div>

          <h1 style={{ fontSize: 52, fontWeight: 900, color: "#fff", lineHeight: 1.15, marginBottom: 18, letterSpacing: "-1px" }}>
            Find Your <span style={{ color: "#7dff9b" }}>Dream Job</span><br />With TrueJobs
          </h1>
          <p style={{ fontSize: 18, color: "#dbb9ec", lineHeight: 1.7, marginBottom: 40 }}>
            Browse thousands of jobs from top companies across India.<br />Get hired faster with our smart matching technology.
          </p>

          {/* Search bar */}
          <div style={{
            background: "#fff", borderRadius: 16, padding: 8, display: "flex", gap: 8, maxWidth: 680, margin: "0 auto",
            boxShadow: "0 16px 48px rgba(0,0,0,0.25)", flexWrap: "wrap",
          }}>
            <input
              type="text"
              placeholder="🔍  Job title, skill, or company"
              value={searchJob}
              onChange={(e) => setSearchJob(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              style={{ flex: "1 1 200px", border: "none", outline: "none", padding: "12px 16px", fontSize: 15, borderRadius: 10, color: "#414141" }}
            />
            <div style={{ width: 1, background: "#e8e8e8", margin: "8px 0" }} />
            <input
              type="text"
              placeholder="📍  City or location"
              value={searchLoc}
              onChange={(e) => setSearchLoc(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              style={{ flex: "1 1 140px", border: "none", outline: "none", padding: "12px 16px", fontSize: 15, borderRadius: 10, color: "#414141" }}
            />
            <button
              onClick={handleSearch}
              style={{
                background: "#772B88", color: "#fff", border: "none", borderRadius: 10,
                padding: "12px 28px", fontSize: 15, fontWeight: 700, cursor: "pointer",
                transition: "background 0.2s", whiteSpace: "nowrap",
              }}
              onMouseOver={(e) => e.target.style.background = "#9B3BAC"}
              onMouseOut={(e) => e.target.style.background = "#772B88"}
            >
              Search Jobs →
            </button>
          </div>
          <p style={{ color: "#c9a0de", fontSize: 13, marginTop: 14 }}>
            Popular: Frontend Developer, Data Analyst, Product Manager, UI Designer
          </p>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div style={{ background: "#fff", borderBottom: "1px solid #f0e8f4" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", padding: "28px 24px" }}>
          {STATS.map((s) => (
            <div key={s.label} style={{ textAlign: "center", borderRight: "1px solid #f0e8f4" }}>
              <div style={{ fontSize: 28, fontWeight: 900, color: "#772B88", lineHeight: 1.1 }}>{s.value}</div>
              <div style={{ fontSize: 13, color: "#909090", marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── CATEGORIES ── */}
      <section style={{ padding: "60px 24px", background: "#f9f7fc" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <h2 style={{ fontSize: 34, fontWeight: 800, color: "#414141", marginBottom: 10 }}>Browse by Category</h2>
            <p style={{ color: "#909090", fontSize: 15 }}>Find opportunities in your preferred domain</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 16 }}>
            {CATEGORIES.map((cat) => (
              <div
                key={cat.label}
                onClick={() => navigate(`/jobs?cat=${encodeURIComponent(cat.label)}`)}
                style={{
                  background: "#fff", borderRadius: 14, padding: "22px 20px",
                  border: "1.5px solid #f0e8f4", cursor: "pointer",
                  display: "flex", alignItems: "center", gap: 14,
                  transition: "all 0.2s", boxShadow: "0 2px 8px rgba(119,43,136,0.05)",
                }}
                onMouseOver={(e) => { e.currentTarget.style.borderColor = "#772B88"; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(119,43,136,0.12)"; }}
                onMouseOut={(e) => { e.currentTarget.style.borderColor = "#f0e8f4"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 8px rgba(119,43,136,0.05)"; }}
              >
                <span style={{ fontSize: 28 }}>{cat.icon}</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14, color: "#414141" }}>{cat.label}</div>
                  <div style={{ fontSize: 12, color: "#772B88", marginTop: 2, fontWeight: 600 }}>{cat.count} Jobs</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED JOBS ── */}
      <section style={{ padding: "60px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 32 }}>
            <div>
              <h2 style={{ fontSize: 34, fontWeight: 800, color: "#414141", margin: 0 }}>Featured Jobs</h2>
              <p style={{ color: "#909090", fontSize: 15, marginTop: 6 }}>Hand-picked opportunities from top employers</p>
            </div>
            <button
              onClick={() => navigate("/jobs")}
              style={{ background: "transparent", border: "2px solid #772B88", borderRadius: 8, padding: "9px 22px", fontSize: 14, fontWeight: 700, color: "#772B88", cursor: "pointer", transition: "all 0.2s" }}
              onMouseOver={(e) => { e.currentTarget.style.background = "#772B88"; e.currentTarget.style.color = "#fff"; }}
              onMouseOut={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#772B88"; }}
            >
              View All Jobs →
            </button>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 18 }}>
            {FEATURED_JOBS.map((job) => (
              <div
                key={job.id}
                onClick={() => navigate(`/jobs/${job.id}`)}
                style={{
                  background: "#fff", borderRadius: 14, padding: "22px",
                  border: "1.5px solid #f0e8f4", cursor: "pointer",
                  transition: "all 0.2s", boxShadow: "0 2px 8px rgba(119,43,136,0.05)",
                }}
                onMouseOver={(e) => { e.currentTarget.style.boxShadow = "0 8px 28px rgba(119,43,136,0.13)"; e.currentTarget.style.borderColor = "#e0c4f0"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                onMouseOut={(e) => { e.currentTarget.style.boxShadow = "0 2px 8px rgba(119,43,136,0.05)"; e.currentTarget.style.borderColor = "#f0e8f4"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: job.color, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: 15, flexShrink: 0 }}>
                    {job.logo}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 16, color: "#414141" }}>{job.title}</div>
                    <div style={{ fontSize: 13, color: "#909090", marginTop: 2 }}>{job.company}</div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 14 }}>
                  <span className="tag tag-purple">📍 {job.location}</span>
                  <span className="tag tag-green">{job.type}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid #f9f0fb", paddingTop: 12 }}>
                  <span style={{ fontWeight: 700, fontSize: 15, color: "#414141" }}>{job.salary}</span>
                  <button
                    onClick={(e) => { e.stopPropagation(); navigate(`/jobs/${job.id}`); }}
                    style={{ background: "#772B88", color: "#fff", border: "none", borderRadius: 8, padding: "6px 18px", fontSize: 13, fontWeight: 700, cursor: "pointer" }}
                  >
                    Apply
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ padding: "60px 24px", background: "#f9f7fc" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <h2 style={{ fontSize: 34, fontWeight: 800, color: "#414141", marginBottom: 10 }}>How It Works</h2>
            <p style={{ color: "#909090", fontSize: 15 }}>Get hired in three simple steps</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 28 }}>
            {STEPS.map((step, i) => (
              <div key={step.title} style={{ background: "#fff", borderRadius: 16, padding: "32px 24px", textAlign: "center", border: "1.5px solid #f0e8f4", boxShadow: "0 2px 8px rgba(119,43,136,0.05)" }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: "linear-gradient(135deg, #f5eefa, #e8d0f4)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", fontSize: 26 }}>
                  {step.icon}
                </div>
                <div style={{ width: 26, height: 26, borderRadius: "50%", background: "#772B88", color: "#fff", fontSize: 12, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", margin: "-40px auto 20px", position: "relative", zIndex: 1, border: "2px solid #fff" }}>
                  {i + 1}
                </div>
                <h3 style={{ fontWeight: 800, fontSize: 18, color: "#414141", marginBottom: 10 }}>{step.title}</h3>
                <p style={{ color: "#909090", fontSize: 14, lineHeight: 1.65 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={{ padding: "60px 24px" }}>
        <div style={{
          maxWidth: 1100, margin: "0 auto",
          background: "linear-gradient(135deg, #4a1060, #772B88)",
          borderRadius: 20, padding: "52px 48px",
          display: "flex", alignItems: "center", justifyContent: "space-between", gap: 32, flexWrap: "wrap",
          boxShadow: "0 12px 40px rgba(119,43,136,0.25)",
        }}>
          <div>
            <h2 style={{ fontSize: 32, fontWeight: 900, color: "#fff", marginBottom: 10 }}>
              Ready to Transform Your Career? 🚀
            </h2>
            <p style={{ color: "#dbb9ec", fontSize: 16, lineHeight: 1.6 }}>
              Join 2 million+ job seekers who found their dream job through TrueJobs.
            </p>
          </div>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <button
              onClick={() => navigate("/login")}
              style={{ background: "#fff", color: "#772B88", border: "none", borderRadius: 10, padding: "14px 32px", fontSize: 15, fontWeight: 800, cursor: "pointer", boxShadow: "0 4px 16px rgba(0,0,0,0.15)", transition: "transform 0.1s" }}
              onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.03)"}
              onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
            >
              Get Started Free
            </button>
            <button
              onClick={() => navigate("/jobs")}
              style={{ background: "transparent", color: "#fff", border: "2px solid rgba(255,255,255,0.4)", borderRadius: 10, padding: "13px 28px", fontSize: 15, fontWeight: 700, cursor: "pointer" }}
            >
              Browse Jobs
            </button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
