import React from "react";
import MainLayout from "../components/layout/MainLayout";

export default function SettingsPage() {
  return (
    <MainLayout>
      <div style={{ background: "#f5f2f8", padding: "40px 24px", minHeight: "calc(100vh - 64px)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h1 style={{ fontSize: 28, fontWeight: 900, color: "#414141", marginBottom: 32 }}>Settings</h1>

          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            
            {/* Account Settings */}
            <div className="card" style={{ padding: "32px" }}>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: "#414141", marginBottom: 20 }}>Account Notification</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  { label: "Email Notifications", desc: "Receive alerts for new jobs and applications" },
                  { label: "Desktop Push", desc: "Show messages and notifications on your browser" },
                  { label: "Promotional Mails", desc: "Get updates on new features and career tips" },
                ].map(item => (
                  <div key={item.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <div style={{ fontSize: 15, fontWeight: 700, color: "#414141" }}>{item.label}</div>
                      <div style={{ fontSize: 13, color: "#909090", marginTop: 2 }}>{item.desc}</div>
                    </div>
                    <div style={{ width: 44, height: 24, borderRadius: 12, background: "#772B88", position: "relative", cursor: "pointer" }}>
                      <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#fff", position: "absolute", top: 2, right: 2 }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Change Login Info */}
            <div className="card" style={{ padding: "32px" }}>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: "#414141", marginBottom: 20 }}>Security</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                <div>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#414141", marginBottom: 8 }}>Registered Phone</label>
                  <div style={{ padding: "12px 16px", borderRadius: 8, background: "#f9f7fc", color: "#666", fontSize: 14 }}>+91 9876543210</div>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#414141", marginBottom: 8 }}>Email Address</label>
                  <div style={{ padding: "12px 16px", borderRadius: 8, background: "#f9f7fc", color: "#666", fontSize: 14 }}>kalai@example.com</div>
                </div>
                <div style={{ gridColumn: "span 2", marginTop: 8 }}>
                  <button className="btn-outline" style={{ fontSize: 14 }}>Change Login Credentials</button>
                </div>
              </div>
            </div>

            {/* Privacy & Safety */}
            <div className="card" style={{ padding: "32px" }}>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: "#414141", marginBottom: 12 }}>Privacy</h3>
              <p style={{ fontSize: 14, color: "#909090", marginBottom: 24 }}>Control who can see your profile and activity.</p>
              
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <input type="checkbox" defaultChecked style={{ accentColor: "#772B88", width: 18, height: 18 }} />
                <span style={{ fontSize: 14, fontWeight: 600, color: "#414141" }}>Make my profile visible to verified recruiters</span>
              </div>
            </div>

            {/* Delete Account */}
            <div className="card" style={{ padding: "32px", borderColor: "#fecaca" }}>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: "#e63946", marginBottom: 8 }}>Danger Zone</h3>
              <p style={{ fontSize: 14, color: "#909090", marginBottom: 20 }}>Once you delete your account, all your data will be permanently removed. This action cannot be undone.</p>
              <button style={{ background: "#fff", border: "1.5px solid #e63946", color: "#e63946", borderRadius: 8, padding: "10px 20px", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>Delete My Account</button>
            </div>

          </div>
        </div>
      </div>
    </MainLayout>
  );
}
