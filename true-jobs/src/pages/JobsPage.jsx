import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";

const FILTERS = [
  {
    title: "Job Type",
    options: ["Full Time", "Part Time", "Remote", "Internship", "Contract"]
  },
  {
    title: "Experience Level",
    options: ["Fresher", "1-3 Years", "3-5 Years", "5-10 Years", "10+ Years"]
  },
  {
    title: "Salary Range",
    options: ["Under ₹3L", "₹3L - ₹6L", "₹6L - ₹10L", "₹10L - ₹18L", "₹18L+"]
  }
];

const JOBS_DATA = [
  { id: 1, title: "Senior Frontend Developer", company: "Infosys", location: "Bengaluru", type: "Full Time", salary: "₹12L–₹20L", posted: "2d ago", desc: "Join our core platform team to build scalable UI components...", tags: ["React", "TypeScript", "Tailwind"] },
  { id: 2, title: "Data Analyst", company: "Wipro", location: "Hyderabad", type: "Hybrid", salary: "₹8L–₹14L", posted: "1d ago", desc: "We are looking for a data enthusiast who can turn numbers into insights...", tags: ["Python", "SQL", "PowerBI"] },
  { id: 3, title: "UI/UX Designer", company: "Zoho", location: "Chennai", type: "Remote", salary: "₹7L–₹12L", posted: "5h ago", desc: "Design intuitive and beautiful user experiences for our global products...", tags: ["Figma", "Adobe XD", "Prototyping"] },
  { id: 4, title: "Java Backend Engineer", company: "TCS", location: "Pune", type: "Full Time", salary: "₹10L–₹18L", posted: "3d ago", desc: "Build robust backend systems and APIs using Spring Boot and Hibernate...", tags: ["Java", "Spring Boot", "MySQL"] },
  { id: 5, title: "Product Manager", company: "Flipkart", location: "Bengaluru", type: "Full Time", salary: "₹18L–₹30L", posted: "15h ago", desc: "Lead product development from concept to launch in a fast-paced environment...", tags: ["Agile", "Roadmapping", "Strategy"] },
  { id: 6, title: "DevOps Engineer", company: "HCL", location: "Noida", type: "Hybrid", salary: "₹10L–₹16L", posted: "6d ago", desc: "Manage our cloud infrastructure and CI/CD pipelines...", tags: ["AWS", "Docker", "Jenkins"] },
];

export default function JobsPage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  return (
    <MainLayout>
      <div style={{ background: "#f5f2f8", padding: "40px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          
          {/* Header & Search */}
          <div style={{ marginBottom: 32 }}>
            <h1 style={{ fontSize: 32, fontWeight: 900, color: "#414141", marginBottom: 8 }}>Find Your Next Opportunity</h1>
            <p style={{ color: "#909090", fontSize: 16, marginBottom: 24 }}>Browse through 2,400+ active job openings</p>
            
            <div style={{ background: "#fff", borderRadius: 16, padding: "8px", border: "1.5px solid #f0e8f4", display: "flex", gap: 8, boxShadow: "0 4px 20px rgba(119,43,136,0.08)" }}>
              <input 
                type="text" 
                placeholder="Job title, skills or keyword..." 
                style={{ flex: 1, border: "none", outline: "none", padding: "14px 20px", fontSize: 15, color: "#414141" }}
              />
              <div style={{ width: 1, background: "#f0e8f4", margin: "10px 0" }} />
              <input 
                type="text" 
                placeholder="Location (e.g. Bengaluru)" 
                style={{ flex: 1, border: "none", outline: "none", padding: "14px 20px", fontSize: 15, color: "#414141" }}
              />
              <button className="btn-primary" style={{ padding: "0 32px" }}>Find Jobs</button>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 32, alignItems: "start" }}>
            
            {/* Sidebar Filters */}
            <aside className="card" style={{ padding: "24px", position: "sticky", top: 88 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
                <h3 style={{ fontWeight: 800, fontSize: 16, margin: 0 }}>Filters</h3>
                <button style={{ background: "none", border: "none", color: "#772B88", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>Clear All</button>
              </div>

              {FILTERS.map((filter) => (
                <div key={filter.title} style={{ marginBottom: 24, paddingBottom: 24, borderBottom: "1.5px solid #f9f7fc" }}>
                  <h4 style={{ fontSize: 14, fontWeight: 700, color: "#414141", marginBottom: 12 }}>{filter.title}</h4>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {filter.options.map((opt) => (
                      <label key={opt} style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}>
                        <input type="checkbox" style={{ accentColor: "#772B88", width: 16, height: 16 }} />
                        <span style={{ fontSize: 14, color: "#666" }}>{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </aside>

            {/* Job Listings */}
            <div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                <span style={{ fontSize: 14, color: "#909090", fontWeight: 600 }}>Showing <span style={{ color: "#414141" }}>{JOBS_DATA.length}</span> results</span>
                <select style={{ background: "none", border: "none", fontSize: 14, fontWeight: 700, color: "#414141", cursor: "pointer", outline: "none" }}>
                  <option>Most Recent</option>
                  <option>Highest Salary</option>
                  <option>Relevant</option>
                </select>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {JOBS_DATA.map((job) => (
                  <div key={job.id} onClick={() => navigate(`/jobs/${job.id}`)} className="card" style={{ padding: "24px", cursor: "pointer", transition: "all 0.2s" }}
                    onMouseOver={(e) => e.currentTarget.style.borderColor = "#772B88"}
                    onMouseOut={(e) => e.currentTarget.style.borderColor = "#f0e8f4"}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
                      <div>
                        <h3 style={{ fontSize: 18, fontWeight: 800, color: "#414141", marginBottom: 4 }}>{job.title}</h3>
                        <div style={{ fontSize: 14, color: "#772B88", fontWeight: 700 }}>{job.company} <span style={{ color: "#909090", fontWeight: 400 }}>• {job.location} • {job.posted}</span></div>
                      </div>
                      <div style={{ fontSize: 18, fontWeight: 800, color: "#19893F" }}>{job.salary}</div>
                    </div>
                    
                    <p style={{ fontSize: 14, color: "#909090", lineHeight: 1.5, marginBottom: 16 }}>{job.desc}</p>
                    
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <div style={{ display: "flex", gap: 8 }}>
                        {job.tags.map(tag => <span key={tag} className="tag tag-purple">{tag}</span>)}
                        <span className="tag tag-green">{job.type}</span>
                      </div>
                      <button className="btn-outline" style={{ padding: "7px 20px" }}>Apply Now</button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination Placeholder */}
              <div style={{ display: "flex", justifyContent: "center", marginTop: 40, gap: 8 }}>
                <button style={{ width: 36, height: 36, borderRadius: 8, border: "1.5px solid #772B88", background: "#772B88", color: "#fff", fontWeight: 700, fontSize: 14 }}>1</button>
                {[2, 3, 4, '...'].map((p, i) => (
                  <button key={i} style={{ width: 36, height: 36, borderRadius: 8, border: "1.5px solid #f0e8f4", background: "#fff", color: "#666", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>{p}</button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
