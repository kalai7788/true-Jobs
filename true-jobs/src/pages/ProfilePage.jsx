import React, { useState } from "react";
import MainLayout from "../components/layout/MainLayout";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("Basic Details");
  const [isEditing, setIsEditing] = useState(false);

  const TABS = ["Basic Details", "Education", "Work Experience", "Skills", "Resume"];

  return (
    <MainLayout>
      <div style={{ background: "#f5f2f8", padding: "40px 24px", minHeight: "calc(100vh - 64px)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
            <h1 style={{ fontSize: 28, fontWeight: 900, color: "#414141", margin: 0 }}>My Profile</h1>
            <button 
              onClick={() => setIsEditing(!isEditing)}
              className={isEditing ? "btn-outline" : "btn-primary"} 
              style={{ padding: "10px 24px" }}
            >
              {isEditing ? "Save Changes" : "Edit Profile"}
            </button>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: 32 }}>
            
            {/* Sidebar Tabs */}
            <aside className="card" style={{ padding: "12px", height: "fit-content" }}>
              {TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    display: "block", width: "100%", textAlign: "left", padding: "12px 16px",
                    borderRadius: 8, border: "none", background: activeTab === tab ? "#f5eefa" : "transparent",
                    color: activeTab === tab ? "#772B88" : "#666", fontWeight: activeTab === tab ? 800 : 600,
                    fontSize: 14, cursor: "pointer", transition: "all 0.2s"
                  }}
                >
                  {tab}
                </button>
              ))}
            </aside>

            {/* Main Content Area */}
            <section className="card" style={{ padding: "32px" }}>
              <h2 style={{ fontSize: 20, fontWeight: 800, color: "#414141", marginBottom: 24 }}>{activeTab}</h2>
              
              {activeTab === "Basic Details" && (
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
                  <div style={{ gridColumn: "span 2", display: "flex", alignItems: "center", gap: 24, marginBottom: 12 }}>
                    <div style={{ width: 100, height: 100, borderRadius: "50%", background: "#772B88", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 32, fontWeight: 900 }}>K</div>
                    <div>
                      <button className="btn-outline" style={{ fontSize: 13, padding: "8px 16px" }}>Upload New Photo</button>
                      <p style={{ fontSize: 12, color: "#909090", marginTop: 8 }}>JPG, PNG or GIF. Max size 2MB.</p>
                    </div>
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#414141", marginBottom: 8 }}>Full Name</label>
                    <input type="text" defaultValue="Kalai Selvan" disabled={!isEditing} style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: "1.5px solid #f0e8f4", outline: "none", fontSize: 14 }} />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#414141", marginBottom: 8 }}>Email Address</label>
                    <input type="email" defaultValue="kalai@example.com" disabled={!isEditing} style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: "1.5px solid #f0e8f4", outline: "none", fontSize: 14 }} />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#414141", marginBottom: 8 }}>Phone Number</label>
                    <input type="text" defaultValue="+91 9876543210" disabled={!isEditing} style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: "1.5px solid #f0e8f4", outline: "none", fontSize: 14 }} />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#414141", marginBottom: 8 }}>Location</label>
                    <input type="text" defaultValue="Bengaluru, India" disabled={!isEditing} style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: "1.5px solid #f0e8f4", outline: "none", fontSize: 14 }} />
                  </div>
                </div>
              )}

              {activeTab === "Skills" && (
                <div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 24 }}>
                    {["React", "JavaScript", "Tailwind CSS", "Node.js", "TypeScript", "Figma", "Redux"].map(skill => (
                      <span key={skill} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#f5eefa", color: "#772B88", padding: "8px 16px", borderRadius: 999, fontSize: 14, fontWeight: 700 }}>
                        {skill} {isEditing && <span style={{ cursor: "pointer", fontSize: 16 }}>×</span>}
                      </span>
                    ))}
                    {isEditing && (
                      <button style={{ border: "1.5px dashed #772B88", color: "#772B88", background: "none", padding: "8px 16px", borderRadius: 999, fontSize: 14, fontWeight: 700, cursor: "pointer" }}>+ Add Skill</button>
                    )}
                  </div>
                </div>
              )}

              {(activeTab === "Education" || activeTab === "Work Experience") && (
                <div style={{ textAlign: "center", padding: "40px 0" }}>
                  <div style={{ fontSize: 48, marginBottom: 16 }}>💼</div>
                  <p style={{ color: "#909090", fontSize: 15 }}>No entries added yet. Click edit to add your history.</p>
                  {isEditing && (
                    <button className="btn-primary" style={{ marginTop: 20 }}>+ Add Entry</button>
                  )}
                </div>
              )}

              {activeTab === "Resume" && (
                <div style={{ border: "2px dashed #f0e8f4", borderRadius: 16, padding: "48px", textAlign: "center" }}>
                  <div style={{ fontSize: 40, marginBottom: 16 }}>📄</div>
                  <h4 style={{ fontWeight: 800, fontSize: 16, color: "#414141", marginBottom: 8 }}>Upload Your Resume</h4>
                  <p style={{ fontSize: 14, color: "#909090", marginBottom: 24 }}>PDF, DOC or DOCX. Max size 5MB.</p>
                  <button className="btn-primary">Browse Files</button>
                </div>
              )}

            </section>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
