import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";

export default function JobDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div style={{ background: "#f5f2f8", padding: "40px 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          
          {/* Back button */}
          <button 
            onClick={() => navigate(-1)}
            style={{ background: "none", border: "none", color: "#772B88", fontSize: 14, fontWeight: 700, display: "flex", alignItems: "center", gap: 8, cursor: "pointer", marginBottom: 24 }}
          >
            ← Back to Results
          </button>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 32 }}>
            
            {/* Main Content */}
            <div>
              <div className="card" style={{ padding: "32px", marginBottom: 32 }}>
                <div style={{ display: "flex", alignItems: "start", justifyContent: "space-between", marginBottom: 24 }}>
                  <div style={{ display: "flex", gap: 20 }}>
                    <div style={{ width: 72, height: 72, borderRadius: 16, background: "#772B88", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, color: "#fff", fontWeight: 900 }}>
                      IN
                    </div>
                    <div>
                      <h1 style={{ fontSize: 26, fontWeight: 900, color: "#414141", margin: 0 }}>Senior Frontend Developer</h1>
                      <div style={{ fontSize: 16, color: "#772B88", fontWeight: 700, marginTop: 4 }}>Infosys <span style={{ color: "#909090", fontWeight: 400 }}>• Bengaluru, India</span></div>
                      <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
                        <span className="tag tag-purple">Full Time</span>
                        <span className="tag tag-green">Hybrid</span>
                        <span className="tag tag-gray">Posted 2d ago</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: 22, fontWeight: 900, color: "#19893F" }}>₹12L – ₹20L</div>
                    <div style={{ fontSize: 13, color: "#909090", marginTop: 4 }}>Annual CTC</div>
                  </div>
                </div>

                <div style={{ height: 1.5, background: "#f0e8f4", margin: "32px 0" }} />

                <div style={{ marginBottom: 32 }}>
                  <h3 style={{ fontSize: 18, fontWeight: 800, color: "#414141", marginBottom: 16 }}>About the Role</h3>
                  <p style={{ fontSize: 15, color: "#666", lineHeight: 1.8 }}>
                    We're looking for an experienced Frontend Developer with a deep passion for building polished, high-performance web applications. You'll join our core product team and help architect modern user interfaces using React, TypeScript, and Tailwind CSS.
                  </p>
                </div>

                <div style={{ marginBottom: 32 }}>
                  <h3 style={{ fontSize: 18, fontWeight: 800, color: "#414141", marginBottom: 16 }}>Requirements</h3>
                  <ul style={{ paddingLeft: 20, fontSize: 15, color: "#666", lineHeight: 2 }}>
                    <li>5+ years of experience with modern JavaScript frameworks (React preferred).</li>
                    <li>Strong understanding of TypeScript, HTML5, and CSS3.</li>
                    <li>Experience with state management libraries (Redux, Zustand, etc.).</li>
                    <li>Proficiency with responsive design and accessibility standards.</li>
                    <li>Strong communication and collaboration skills.</li>
                  </ul>
                </div>

                <div style={{ marginBottom: 32 }}>
                  <h3 style={{ fontSize: 18, fontWeight: 800, color: "#414141", marginBottom: 16 }}>Key Responsibilities</h3>
                  <ul style={{ paddingLeft: 20, fontSize: 15, color: "#666", lineHeight: 2 }}>
                    <li>Develop and maintain scalable UI components.</li>
                    <li>Optimize applications for maximum speed and scalability.</li>
                    <li>Collaborate with designers to bridge the gap between design and technical implementation.</li>
                    <li>Participate in code reviews and mentor junior developers.</li>
                  </ul>
                </div>
              </div>

              {/* Company Info */}
              <div className="card" style={{ padding: "32px" }}>
                <h3 style={{ fontSize: 18, fontWeight: 800, color: "#414141", marginBottom: 16 }}>About Infosys</h3>
                <p style={{ fontSize: 14, color: "#666", lineHeight: 1.7, marginBottom: 20 }}>
                  Infosys is a global leader in next-generation digital services and consulting. We enable clients in more than 50 countries to navigate their digital transformation.
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <div>
                    <div style={{ fontSize: 12, color: "#909090", fontWeight: 700, textTransform: "uppercase", marginBottom: 4 }}>Industry</div>
                    <div style={{ fontSize: 14, color: "#414141", fontWeight: 600 }}>IT Services & Consulting</div>
                  </div>
                  <div>
                    <div style={{ fontSize: 12, color: "#909090", fontWeight: 700, textTransform: "uppercase", marginBottom: 4 }}>Company Size</div>
                    <div style={{ fontSize: 14, color: "#414141", fontWeight: 600 }}>200,000+ Employees</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Actions */}
            <aside style={{ position: "sticky", top: 88 }}>
              <div className="card" style={{ padding: "24px", marginBottom: 24 }}>
                <button className="btn-primary" style={{ width: "100%", marginBottom: 12, padding: "14px" }}>Apply for this Job</button>
                <button className="btn-outline" style={{ width: "100%", padding: "14px" }}>Save Job</button>
                <p style={{ fontSize: 12, color: "#909090", textAlign: "center", marginTop: 16 }}>
                  Applications close on 15 March, 2026
                </p>
              </div>

              <div className="card" style={{ padding: "24px" }}>
                <h4 style={{ fontWeight: 800, fontSize: 15, color: "#414141", marginBottom: 16 }}>Share this Job</h4>
                <div style={{ display: "flex", gap: 10 }}>
                  {["🔗", "𝕏", "in", "f"].map((ico, i) => (
                    <button key={i} style={{ flex: 1, padding: "10px", borderRadius: 10, background: "#f5eefa", border: "none", cursor: "pointer", fontSize: 16 }}>{ico}</button>
                  ))}
                </div>
              </div>
            </aside>

          </div>
        </div>
      </div>
    </MainLayout>
  );
}
