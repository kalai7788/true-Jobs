import React from "react";
import RecruiterLayout from "../../components/layout/RecruiterLayout";

const STATS = [
  { label: "Active Jobs", value: "8", icon: "📑", color: "#772B88" },
  { label: "Total Applications", value: "342", icon: "👥", color: "#19893F" },
  { label: "Shortlisted", value: "24", icon: "⭐", color: "#0066cc" },
  { label: "Hired", value: "6", icon: "🎉", color: "#E65100" },
];

const RECENT_JOBS = [
  { id: 1, title: "Senior Frontend Developer", apps: 124, status: "Active", posted: "2d ago" },
  { id: 2, title: "UI/UX Designer", apps: 86, status: "Active", posted: "4d ago" },
  { id: 3, title: "Backend Engineer", apps: 132, status: "Closed", posted: "1w ago" },
];

export default function RecruiterDashboardPage() {
  return (
    <RecruiterLayout>
      <div style={{ marginBottom: 32 }}>
        <h1 style={{ fontSize: 26, fontWeight: 900, color: "#414141", margin: 0 }}>Hiring Overview</h1>
        <p style={{ color: "#909090", fontSize: 15, marginTop: 4 }}>Manage your active job postings and track candidate progress.</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20, marginBottom: 32 }}>
        {STATS.map(s => (
          <div key={s.label} className="card" style={{ padding: "24px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
              <div>
                <div style={{ fontSize: 28, fontWeight: 900, color: "#414141" }}>{s.value}</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#909090", marginTop: 4 }}>{s.label}</div>
              </div>
              <div style={{ fontSize: 24 }}>{s.icon}</div>
            </div>
            <div style={{ height: 4, background: `${s.color}20`, borderRadius: 2, marginTop: 16 }}>
              <div style={{ height: "100%", width: "70%", background: s.color, borderRadius: 2 }}></div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
        
        {/* Active Jobs */}
        <div className="card" style={{ padding: "24px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
            <h3 style={{ fontSize: 18, fontWeight: 800, color: "#414141", margin: 0 }}>Active Job Postings</h3>
            <button style={{ background: "none", border: "none", color: "#772B88", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>View All</button>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {RECENT_JOBS.map(job => (
              <div key={job.id} style={{ padding: "16px", borderRadius: 12, border: "1.5px solid #f9f7fc", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ fontWeight: 800, fontSize: 15, color: "#414141" }}>{job.title}</div>
                  <div style={{ fontSize: 12, color: "#909090", marginTop: 2 }}>{job.apps} Applications • Posted {job.posted}</div>
                </div>
                <span style={{ 
                  background: job.status === "Active" ? "#e8f7ed" : "#f1f1f1", 
                  color: job.status === "Active" ? "#19893F" : "#666", 
                  padding: "4px 12px", borderRadius: 999, fontSize: 11, fontWeight: 800 
                }}>
                  {job.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="card" style={{ padding: "24px" }}>
          <h3 style={{ fontSize: 18, fontWeight: 800, color: "#414141", marginBottom: 20 }}>Recent Applicants</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { name: "Rahul Sharma", role: "Frontend Developer", exp: "4 yrs", date: "2h ago" },
              { name: "Priya Patel", role: "UI Designer", exp: "2.5 yrs", date: "4h ago" },
              { name: "Suresh Rao", role: "Frontend Developer", exp: "Fresher", date: "Yesterday" },
              { name: "Anita Desai", role: "Backend Engineer", exp: "6 yrs", date: "2 days ago" },
            ].map((app, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#f5eefa", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, color: "#772B88", fontSize: 13 }}>
                  {app.name.charAt(0)}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: 14, color: "#414141" }}>{app.name}</div>
                  <div style={{ fontSize: 12, color: "#909090" }}>{app.role} • {app.exp} exp</div>
                </div>
                <div style={{ fontSize: 11, color: "#909090" }}>{app.date}</div>
              </div>
            ))}
          </div>
          <button className="btn-outline" style={{ width: "100%", marginTop: 24, fontSize: 13 }}>Search All Candidates</button>
        </div>

      </div>
    </RecruiterLayout>
  );
}
