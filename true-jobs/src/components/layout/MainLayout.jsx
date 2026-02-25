import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function MainLayout({ children, noFooter = false }) {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#f9f7fc" }}>
      <Navbar />
      <main style={{ flex: 1 }} className="page-enter">
        {children}
      </main>
      {!noFooter && <Footer />}
    </div>
  );
}
