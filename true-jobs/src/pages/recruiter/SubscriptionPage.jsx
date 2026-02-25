import React from "react";
import RecruiterLayout from "../../components/layout/RecruiterLayout";

const PLANS = [
  { 
    name: "Free", 
    price: "0", 
    desc: "For small businesses & startups",
    features: ["1 Active Job Posting", "10 Candidate Views", "Basic Search Filters", "Standard Support"],
    popular: false 
  },
  { 
    name: "Standard", 
    price: "4,999", 
    desc: "Growing companies & agencies",
    features: ["5 Active Job Postings", "50 Candidate Views", "Advanced Search Filters", "Message Candidates", "Priority Support"],
    popular: true 
  },
  { 
    name: "Premium", 
    price: "9,999", 
    desc: "Large enterprises & high volume",
    features: ["Unlimited Job Postings", "Unlimited Views", "Full Analytics Dashboard", "Custom Branding", "Dedicated Manager"],
    popular: false 
  },
];

export default function SubscriptionPage() {
  return (
    <RecruiterLayout>
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <h1 style={{ fontSize: 32, fontWeight: 900, color: "#414141", marginBottom: 12 }}>Pricing Plans</h1>
        <p style={{ color: "#909090", fontSize: 16, maxWidth: 600, margin: "0 auto" }}>
          Choose a plan that fits your hiring needs. Upgrade or downgrade at any time.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 32, maxWidth: 1050, margin: "0 auto" }}>
        {PLANS.map((plan) => (
          <div key={plan.name} className="card" style={{ 
            padding: "40px 32px", 
            textAlign: "center",
            position: "relative",
            borderColor: plan.popular ? "#772B88" : "#f0e8f4",
            transform: plan.popular ? "scale(1.05)" : "scale(1)",
            zIndex: plan.popular ? 2 : 1,
            boxShadow: plan.popular ? "0 12px 32px rgba(119,43,136,0.15)" : "0 4px 12px rgba(119,43,136,0.05)"
          }}>
            {plan.popular && (
              <div style={{ 
                position: "absolute", top: 12, left: "50%", transform: "translateX(-50%)",
                background: "#772B88", color: "#fff", fontSize: 11, fontWeight: 900,
                padding: "4px 12px", borderRadius: 999, textTransform: "uppercase"
              }}>Most Popular</div>
            )}
            
            <h3 style={{ fontSize: 20, fontWeight: 800, color: "#414141", marginBottom: 8 }}>{plan.name}</h3>
            <p style={{ fontSize: 14, color: "#909090", marginBottom: 24 }}>{plan.desc}</p>
            
            <div style={{ marginBottom: 32 }}>
              <span style={{ fontSize: 44, fontWeight: 900, color: "#414141" }}>₹{plan.price}</span>
              <span style={{ fontSize: 16, color: "#909090", fontWeight: 700 }}>/month</span>
            </div>

            <div style={{ textAlign: "left", marginBottom: 40, minHeight: 180 }}>
              {plan.features.map(f => (
                <div key={f} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12, fontSize: 14, color: "#414141", fontWeight: 600 }}>
                  <span style={{ color: "#19893F" }}>✓</span> {f}
                </div>
              ))}
            </div>

            <button 
              className={plan.popular ? "btn-primary" : "btn-outline"} 
              style={{ width: "100%", padding: "14px", fontSize: 15 }}
            >
              Choose {plan.name}
            </button>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: 60, color: "#909090", fontSize: 14 }}>
        Looking for a custom enterprise plan? <button style={{ background: "none", border: "none", color: "#772B88", fontWeight: 700, cursor: "pointer", textDecoration: "underline" }}>Contact our sales team</button>
      </div>
    </RecruiterLayout>
  );
}
