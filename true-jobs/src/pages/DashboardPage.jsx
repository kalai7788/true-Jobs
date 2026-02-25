import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NAV_LINKS = ["Home", "Browse Jobs", "Companies", "Pricing Plans"];

const QUICK_STATS = [
  { label: "Jobs Applied", value: "12", icon: "📋", color: "from-purple-500 to-purple-700" },
  { label: "Profile Views", value: "48", icon: "👁️", color: "from-indigo-500 to-indigo-700" },
  { label: "Saved Jobs", value: "7",  icon: "🔖", color: "from-violet-500 to-violet-700" },
  { label: "Interviews", value: "3",  icon: "📅", color: "from-fuchsia-500 to-fuchsia-700" },
];

const RECOMMENDED_JOBS = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Infosys",
    location: "Bengaluru",
    type: "Full Time",
    salary: "₹8L – ₹14L",
    posted: "2 days ago",
    verified: true,
    logo: "🖥️",
  },
  {
    id: 2,
    title: "UI/UX Designer",
    company: "Wipro",
    location: "Hyderabad",
    type: "Full Time",
    salary: "₹6L – ₹10L",
    posted: "1 day ago",
    verified: true,
    logo: "🎨",
  },
  {
    id: 3,
    title: "React Native Developer",
    company: "TCS",
    location: "Chennai",
    type: "Remote",
    salary: "₹10L – ₹18L",
    posted: "5 hours ago",
    verified: false,
    logo: "📱",
  },
  {
    id: 4,
    title: "Java Backend Engineer",
    company: "HCL Technologies",
    location: "Pune",
    type: "Hybrid",
    salary: "₹9L – ₹15L",
    posted: "3 days ago",
    verified: true,
    logo: "☕",
  },
];

function DashboardPage() {
  const navigate = useNavigate();
  const phone = sessionStorage.getItem("tj_phone") || "User";
  const [searchJob, setSearchJob] = useState("");
  const [searchLoc, setSearchLoc] = useState("");
  const [savedJobs, setSavedJobs] = useState([]);

  const toggleSave = (id) =>
    setSavedJobs((prev) =>
      prev.includes(id) ? prev.filter((j) => j !== id) : [...prev, id]
    );

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">

      {/* ── NAVBAR ── */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <h1 className="text-2xl font-extrabold tracking-tight">
            <span className="text-purple-700">True</span>
            <span className="text-green-600"> Jobs</span>
          </h1>

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((l) => (
              <a
                key={l}
                href="#"
                className="text-sm text-gray-600 hover:text-purple-700 font-medium transition"
              >
                {l}
              </a>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-500 to-purple-800 flex items-center justify-center text-white text-sm font-bold shadow">
              {phone.replace(/\D/g, "").slice(-2, -1) || "U"}
            </div>
            <button
              onClick={handleLogout}
              className="text-sm text-red-500 hover:text-red-700 font-medium transition border border-red-200 rounded-lg px-3 py-1.5 hover:bg-red-50"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* ── HERO SEARCH BANNER ── */}
      <div className="bg-gradient-to-br from-purple-700 via-purple-800 to-purple-950 py-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
            Your Next Chapter <span className="text-green-400">Starts Here.</span>
          </h2>
          <p className="text-purple-200 mb-7 text-sm">
            Discover thousands of jobs and find the one that's right for you.
          </p>

          {/* Search bar */}
          <div className="bg-white rounded-2xl p-2 flex flex-col sm:flex-row gap-2 shadow-xl max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="🔍  Job title or keyword"
              value={searchJob}
              onChange={(e) => setSearchJob(e.target.value)}
              className="flex-1 px-4 py-2.5 text-sm text-gray-700 focus:outline-none rounded-xl placeholder-gray-400"
            />
            <div className="w-px bg-gray-200 hidden sm:block" />
            <input
              type="text"
              placeholder="📍  City or location"
              value={searchLoc}
              onChange={(e) => setSearchLoc(e.target.value)}
              className="flex-1 px-4 py-2.5 text-sm text-gray-700 focus:outline-none rounded-xl placeholder-gray-400"
            />
            <button className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition active:scale-95">
              Find Jobs
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">

        {/* ── QUICK STATS ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {QUICK_STATS.map((s) => (
            <div
              key={s.label}
              className={`bg-linear-to-br ${s.color} rounded-2xl p-5 flex items-center gap-4 shadow-md text-white`}
            >
              <span className="text-3xl">{s.icon}</span>
              <div>
                <p className="text-2xl font-extrabold">{s.value}</p>
                <p className="text-xs opacity-80 font-medium">{s.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── RECOMMENDED JOBS ── */}
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-xl font-bold text-gray-800">Recommended Jobs</h3>
          <a href="#" className="text-purple-600 text-sm font-semibold hover:underline">
            View all →
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
          {RECOMMENDED_JOBS.map((job) => (
            <div
              key={job.id}
              className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition duration-200 flex flex-col gap-3"
            >
              {/* Header row */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-2xl">
                    {job.logo}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm">{job.title}</h4>
                    <p className="text-gray-500 text-xs mt-0.5">{job.company}</p>
                  </div>
                </div>
                <button
                  onClick={() => toggleSave(job.id)}
                  className={`text-xl transition ${savedJobs.includes(job.id) ? "text-purple-600" : "text-gray-300 hover:text-purple-400"}`}
                  title={savedJobs.includes(job.id) ? "Unsave" : "Save"}
                >
                  {savedJobs.includes(job.id) ? "🔖" : "🏷️"}
                </button>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-medium border border-purple-100">
                  📍 {job.location}
                </span>
                <span className="px-2.5 py-1 rounded-full bg-green-50 text-green-700 text-xs font-medium border border-green-100">
                  {job.type}
                </span>
                {job.verified && (
                  <span className="px-2.5 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-medium border border-blue-100">
                    ✅ Verified
                  </span>
                )}
              </div>

              {/* Footer row */}
              <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                <span className="text-gray-700 text-sm font-semibold">{job.salary}</span>
                <div className="flex items-center gap-3">
                  <span className="text-gray-400 text-xs">{job.posted}</span>
                  <button className="bg-purple-700 hover:bg-purple-800 text-white text-xs font-semibold px-4 py-1.5 rounded-lg transition active:scale-95">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── COMPLETE PROFILE BANNER ── */}
        <div className="mt-10 bg-linear-to-r from-purple-700 to-purple-900 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg">
          <div className="text-white">
            <h4 className="text-lg font-bold mb-1">Complete your profile to get noticed! 🚀</h4>
            <p className="text-purple-200 text-sm">
              Profiles with complete info get <span className="text-green-300 font-semibold">3× more</span> interview calls.
            </p>
          </div>
          <button className="bg-white text-purple-700 font-bold text-sm px-6 py-3 rounded-xl hover:bg-purple-50 transition active:scale-95 whitespace-nowrap shadow-md">
            Complete Profile →
          </button>
        </div>

      </div>

      {/* ── FOOTER ── */}
      <footer className="mt-12 border-t border-gray-200 bg-white py-6 px-6 text-center text-gray-400 text-xs">
        © {new Date().getFullYear()} True Jobs. All rights reserved. &nbsp;|&nbsp; Built by Smart Global Solutions
      </footer>
    </div>
  );
}

export default DashboardPage;
