import React from "react";
import MainLayout from "../components/layout/MainLayout";

const APPLICATIONS = [
  { id: 1, role: "Senior Frontend Developer", company: "Infosys", date: "24 Feb, 2026", status: "In-Review", color: "#772B88" },
  { id: 2, role: "UI/UX Designer", company: "Zoho", date: "20 Feb, 2026", status: "Shortlisted", color: "#19893F" },
  { id: 3, role: "React Developer", company: "Wipro", date: "15 Feb, 2026", status: "Interviewing", color: "#0066cc" },
  { id: 4, role: "Fullstack Engineer", company: "TCS", date: "10 Feb, 2026", status: "Not Selected", color: "#e63946" },
];

export default function ApplicationsPage() {
  return (
    <MainLayout>
      <div style={{ background: "#f5f2f8", padding: "40px 24px", minHeight: "calc(100vh - 64px)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          
          <div style={{ marginBottom: 32 }}>
            <h1 style={{ fontSize: 28, fontWeight: 900, color: "#414141", margin: 0 }}>My Applications</h1>
            <p style={{ color: "#909090", fontSize: 15, marginTop: 4 }}>Track the status of all your job applications.</p>
          </div>

          <div className="card" style={{ padding: 0, overflow: "hidden" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
              <thead style={{ background: "#f9f7fc", borderBottom: "1.5px solid #f0e8f4" }}>
                <tr>
                  <th style={{ padding: "16px 24px", fontSize: 13, fontWeight: 800, color: "#909090", textTransform: "uppercase" }}>Job Role</th>
                  <th style={{ padding: "16px 24px", fontSize: 13, fontWeight: 800, color: "#909090", textTransform: "uppercase" }}>Company</th>
                  <th style={{ padding: "16px 24px", fontSize: 13, fontWeight: 800, color: "#909090", textTransform: "uppercase" }}>Applied On</th>
                  <th style={{ padding: "16px 24px", fontSize: 13, fontWeight: 800, color: "#909090", textTransform: "uppercase" }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {APPLICATIONS.map((app) => (
                  <tr key={app.id} style={{ borderBottom: "1.5px solid #f9f7fc" }} onMouseOver={(e) => e.currentTarget.style.background = "#fffafb"} onMouseOut={(e) => e.currentTarget.style.background = "transparent"}>
                    <td style={{ padding: "20px 24px", fontWeight: 700, color: "#414141", fontSize: 15 }}>{app.role}</td>
                    <td style={{ padding: "20px 24px", color: "#666", fontSize: 14 }}>{app.company}</td>
                    <td style={{ padding: "20px 24px", color: "#909090", fontSize: 14 }}>{app.date}</td>
                    <td style={{ padding: "20px 24px" }}>
                      <span style={{ 
                        background: `${app.color}15`, 
                        color: app.color, 
                        padding: "6px 14px", 
                        borderRadius: 999, 
                        fontSize: 12, 
                        fontWeight: 800 
                      }}>
                        {app.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {APPLICATIONS.length === 0 && (
            <div style={{ textAlign: "center", padding: "80px 0" }}>
              <div style={{ fontSize: 64, marginBottom: 20 }}>📁</div>
              <h3 style={{ fontWeight: 800, fontSize: 20, color: "#414141" }}>No applications yet</h3>
              <p style={{ color: "#909090", marginTop: 8 }}>Apply for a job to see it listed here.</p>
              <button onClick={() => navigate("/jobs")} className="btn-primary" style={{ marginTop: 24 }}>Browse Jobs</button>
            </div>
          )}

        </div>
      </div>
    </MainLayout>
  );
}
