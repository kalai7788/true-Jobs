import React, { useState } from "react";
import RecruiterLayout from "../../components/layout/RecruiterLayout";

const CANDIDATES = [
  { name: "Rahul Sharma", role: "Sr. Frontend Developer", exp: "5.5 yrs", skills: ["React", "Vue", "AWS"], loc: "Bengaluru", available: "Immediately" },
  { name: "Priya Patel", role: "UI/UX Designer", exp: "3 yrs", skills: ["Figma", "Sketch", "Webflow"], loc: "Mumbai", available: "1 Month" },
  { name: "Suresh Rao", role: "Junior Developer", exp: "Fresher", skills: ["JS", "HTML", "CSS"], loc: "Hyderabad", available: "Immediately" },
  { name: "Ananya Singh", role: "Product Designer", exp: "4 yrs", skills: ["Design Systems", "User Research"], loc: "Remote", available: "2 Weeks" },
  { name: "Amit Kumar", role: "Fullstack Developer", exp: "7 yrs", skills: ["Node.js", "React", "MongoDB"], loc: "Pune", available: "Immediately" },
];

export default function CandidateSearchPage() {
  const [search, setSearch] = useState("");

  return (
    <RecruiterLayout>
      <div style={{ marginBottom: 32 }}>
        <h1 style={{ fontSize: 26, fontWeight: 900, color: "#414141", margin: 0 }}>Search Candidates</h1>
        <p style={{ color: "#909090", fontSize: 15, marginTop: 4 }}>Find the perfect talent for your business with advanced filtering.</p>
      </div>

      {/* Search Bar */}
      <div style={{ background: "#fff", borderRadius: 16, padding: "8px", border: "1.5px solid #f0e8f4", display: "flex", gap: 8, marginBottom: 32, boxShadow: "0 4px 12px rgba(119,43,136,0.05)" }}>
        <input 
          type="text" 
          placeholder="Search candidates by skill, name or role..." 
          style={{ flex: 1, border: "none", outline: "none", padding: "14px 20px", fontSize: 15, color: "#414141" }}
        />
        <div style={{ width: 1, background: "#f0e8f4", margin: "10px 0" }} />
        <input 
          type="text" 
          placeholder="Location (e.g. Remote)" 
          style={{ flex: 1, border: "none", outline: "none", padding: "14px 20px", fontSize: 15, color: "#414141" }}
        />
        <button className="btn-primary" style={{ padding: "0 32px" }}>Search</button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 20 }}>
        {CANDIDATES.map((can, i) => (
          <div key={i} className="card" style={{ padding: "24px", position: "relative" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
              <div style={{ width: 60, height: 60, borderRadius: 16, background: "#772B88", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 900, fontSize: 20 }}>
                {can.name.charAt(0)}
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: 16, color: "#414141" }}>{can.name}</div>
                <div style={{ fontSize: 13, color: "#772B88", fontWeight: 700 }}>{can.role}</div>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 16 }}>
              <div>
                <div style={{ fontSize: 11, color: "#909090", fontWeight: 700, textTransform: "uppercase" }}>Experience</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#414141" }}>{can.exp}</div>
              </div>
              <div>
                <div style={{ fontSize: 11, color: "#909090", fontWeight: 700, textTransform: "uppercase" }}>Availability</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#19893F" }}>{can.available}</div>
              </div>
              <div style={{ gridColumn: "span 2" }}>
                <div style={{ fontSize: 11, color: "#909090", fontWeight: 700, textTransform: "uppercase", marginBottom: 4 }}>Skills</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {can.skills.map(skill => (
                    <span key={skill} style={{ fontSize: 11, padding: "3px 8px", borderRadius: 4, background: "#f5eefa", color: "#772B88", fontWeight: 800 }}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ display: "flex", gap: 8, marginTop: "auto" }}>
              <button className="btn-primary" style={{ flex: 1, padding: "8px", fontSize: 12 }}>View Profile</button>
              <button className="btn-outline" style={{ flex: 1, padding: "8px", fontSize: 12 }}>Message</button>
            </div>
          </div>
        ))}
      </div>
    </RecruiterLayout>
  );
}
