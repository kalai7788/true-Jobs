import React, { useState } from "react";
import MainLayout from "../components/layout/MainLayout";

const CHATS = [
  { id: 1, name: "Infosys Recruitment", lastMsg: "We'd like to schedule an interview...", time: "10:30 AM", unread: 2, avatar: "IN" },
  { id: 2, name: "Zoho Careers", lastMsg: "Your application has been shortlisted", time: "Yesterday", unread: 0, avatar: "ZH" },
  { id: 3, name: "HCL Tech", lastMsg: "Salary expectations for this role?", time: "2 days ago", unread: 0, avatar: "HC" },
];

export default function ChatPage() {
  const [selectedChat, setSelectedChat] = useState(CHATS[0]);
  const [msg, setMsg] = useState("");

  return (
    <MainLayout>
      <div style={{ background: "#f5f2f8", height: "calc(100vh - 64px)", display: "flex", justifyContent: "center", padding: "20px" }}>
        <div className="card" style={{ width: "100%", maxWidth: 1100, display: "grid", gridTemplateColumns: "340px 1fr", overflow: "hidden", border: "none" }}>
          
          {/* Sidebar */}
          <aside style={{ borderRight: "1.5px solid #f0e8f4", display: "flex", flexDirection: "column" }}>
            <div style={{ padding: "24px", borderBottom: "1.5px solid #f0e8f4" }}>
              <h2 style={{ fontSize: 20, fontWeight: 900, color: "#414141", margin: 0 }}>Messages</h2>
            </div>
            <div style={{ flex: 1, overflowY: "auto" }}>
              {CHATS.map((chat) => (
                <div 
                  key={chat.id} 
                  onClick={() => setSelectedChat(chat)}
                  style={{ 
                    padding: "16px 24px", 
                    cursor: "pointer", 
                    background: selectedChat?.id === chat.id ? "#f5eefa" : "transparent",
                    transition: "all 0.2s",
                    display: "flex",
                    gap: 16,
                    alignItems: "center",
                    borderBottom: "1px solid #f9f7fc"
                  }}
                >
                  <div style={{ width: 48, height: 48, borderRadius: "50%", background: "#772B88", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: 14, flexShrink: 0 }}>
                    {chat.avatar}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                      <div style={{ fontWeight: 800, fontSize: 15, color: "#414141", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{chat.name}</div>
                      <div style={{ fontSize: 11, color: "#909090" }}>{chat.time}</div>
                    </div>
                    <div style={{ fontSize: 13, color: chat.unread > 0 ? "#414141" : "#909090", fontWeight: chat.unread > 0 ? 700 : 400, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                      {chat.lastMsg}
                    </div>
                  </div>
                  {chat.unread > 0 && (
                    <div style={{ background: "#772B88", color: "#fff", width: 20, height: 20, borderRadius: "50%", fontSize: 11, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {chat.unread}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </aside>

          {/* Chat Window */}
          <main style={{ display: "flex", flexDirection: "column", background: "#fff" }}>
            {/* Header */}
            <div style={{ padding: "16px 24px", borderBottom: "1.5px solid #f0e8f4", display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#772B88", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: 12 }}>
                {selectedChat?.avatar}
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: 16, color: "#414141" }}>{selectedChat?.name}</div>
                <div style={{ fontSize: 12, color: "#19893F", fontWeight: 700 }}>Online</div>
              </div>
            </div>

            {/* Messages Area */}
            <div style={{ flex: 1, padding: "24px", overflowY: "auto", display: "flex", flexDirection: "column", gap: 16, background: "#faf9fc" }}>
              <div style={{ alignSelf: "flex-start", maxWidth: "70%", background: "#fff", padding: "12px 16px", borderRadius: "16px 16px 16px 4px", fontSize: 14, color: "#414141", boxShadow: "0 2px 8px rgba(0,0,0,0.03)" }}>
                Hi Kalai, we reviewed your profile and really liked your work on the portfolio projects.
              </div>
              <div style={{ alignSelf: "flex-end", maxWidth: "70%", background: "#772B88", padding: "12px 16px", borderRadius: "16px 16px 4px 16px", fontSize: 14, color: "#fff", boxShadow: "0 4px 12px rgba(119,43,136,0.2)" }}>
                Thank you so much! I'm really excited about the opportunity at Infosys.
              </div>
              <div style={{ alignSelf: "flex-start", maxWidth: "70%", background: "#fff", padding: "12px 16px", borderRadius: "16px 16px 16px 4px", fontSize: 14, color: "#414141", boxShadow: "0 2px 8px rgba(0,0,0,0.03)" }}>
                We'd like to schedule a technical round this Friday at 11 AM. Does that work?
              </div>
            </div>

            {/* Input Area */}
            <div style={{ padding: "20px 24px", borderTop: "1.5px solid #f0e8f4" }}>
              <div style={{ display: "flex", gap: 12 }}>
                <input 
                  type="text" 
                  placeholder="Type a message..." 
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  style={{ flex: 1, padding: "12px 20px", borderRadius: 12, border: "1.5px solid #f0e8f4", outline: "none", fontSize: 14 }}
                />
                <button className="btn-primary" style={{ padding: "0 24px", borderRadius: 12 }}>Send</button>
              </div>
            </div>
          </main>

        </div>
      </div>
    </MainLayout>
  );
}
