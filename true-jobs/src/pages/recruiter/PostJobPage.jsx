import React, { useState } from "react";
import RecruiterLayout from "../../components/layout/RecruiterLayout";

export default function PostJobPage() {
  const [form, setForm] = useState({
    title: "",
    company: "",
    location: "",
    type: "Full Time",
    salary: "",
    desc: "",
    requirements: ""
  });

  return (
    <RecruiterLayout>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ marginBottom: 32 }}>
          <h1 style={{ fontSize: 26, fontWeight: 900, color: "#414141", margin: 0 }}>Post a New Job</h1>
          <p style={{ color: "#909090", fontSize: 15, marginTop: 4 }}>Reach thousands of qualified candidates across India.</p>
        </div>

        <div className="card" style={{ padding: "32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            <div style={{ gridColumn: "span 2" }}>
              <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#414141", marginBottom: 8 }}>Job Title</label>
              <input type="text" placeholder="e.g. Senior Frontend Developer" style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: "1.5px solid #f0e8f4", outline: "none", fontSize: 14 }} />
            </div>
            
            <div>
              <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#414141", marginBottom: 8 }}>Job Category</label>
              <select style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: "1.5px solid #f0e8f4", outline: "none", fontSize: 14, background: "#fff", cursor: "pointer" }}>
                <option>Information Technology</option>
                <option>Healthcare</option>
                <option>Finance</option>
                <option>Marketing</option>
                <option>Management</option>
              </select>
            </div>

            <div>
              <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#414141", marginBottom: 8 }}>Experience Level</label>
              <select style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: "1.5px solid #f0e8f4", outline: "none", fontSize: 14, background: "#fff", cursor: "pointer" }}>
                <option>Fresher</option>
                <option>1-3 Years</option>
                <option>3-5 Years</option>
                <option>5-10 Years</option>
                <option>10+ Years</option>
              </select>
            </div>

            <div>
              <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#414141", marginBottom: 8 }}>Job Type</label>
              <select style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: "1.5px solid #f0e8f4", outline: "none", fontSize: 14, background: "#fff", cursor: "pointer" }}>
                <option>Full Time</option>
                <option>Part Time</option>
                <option>Hybrid</option>
                <option>Remote</option>
              </select>
            </div>

            <div>
              <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#414141", marginBottom: 8 }}>Salary Range (Annual)</label>
              <input type="text" placeholder="e.g. ₹10L - ₹15L" style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: "1.5px solid #f0e8f4", outline: "none", fontSize: 14 }} />
            </div>

            <div style={{ gridColumn: "span 2" }}>
              <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#414141", marginBottom: 8 }}>Job Description</label>
              <textarea placeholder="Tell candidates about the role and your expectations..." rows={5} style={{ width: "100%", padding: "14px 16px", borderRadius: 8, border: "1.5px solid #f0e8f4", outline: "none", fontSize: 14, fontFamily: "inherit", resize: "vertical" }}></textarea>
            </div>

            <div style={{ gridColumn: "span 2" }}>
              <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#414141", marginBottom: 8 }}>Requirements & Skills</label>
              <textarea placeholder="What skills and qualifications are you looking for?" rows={4} style={{ width: "100%", padding: "14px 16px", borderRadius: 8, border: "1.5px solid #f0e8f4", outline: "none", fontSize: 14, fontFamily: "inherit", resize: "vertical" }}></textarea>
            </div>

            <div style={{ gridColumn: "span 2", display: "flex", gap: 16, marginTop: 12 }}>
              <button className="btn-primary" style={{ padding: "14px 40px", fontSize: 15 }}>Post Job Now</button>
              <button className="btn-outline" style={{ padding: "14px 32px", fontSize: 15 }}>Save as Draft</button>
            </div>
          </div>
        </div>
      </div>
    </RecruiterLayout>
  );
}
