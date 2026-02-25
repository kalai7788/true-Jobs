import React from "react";

/**
 * AuthLayout
 * Reusable two-panel layout used by all auth pages.
 *  - Left  : Branding / hero panel (white/light bg)
 *  - Right : Purple gradient card that renders children
 */
function AuthLayout({ children }) {
  return (
    <div className="min-h-screen flex font-sans">

      {/* ── LEFT PANEL – Branding ── */}
      <div className="hidden md:flex w-1/2 bg-gray-50 flex-col justify-center px-16 xl:px-24 relative overflow-hidden">

        {/* Decorative circles */}
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-purple-100 opacity-60" />
        <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-green-100 opacity-50" />

        {/* Logo */}
        <div className="relative mb-10">
          <h1 className="text-6xl font-extrabold tracking-tight">
            <span className="text-purple-700">True</span>
            <span className="text-green-600"> Jobs</span>
          </h1>
          <div className="mt-2 h-1 w-24 rounded bg-linear-to-r from-purple-500 to-green-400" />
        </div>

        {/* Taglines */}
        <p className="text-gray-600 text-lg leading-relaxed mb-3">
          Explore Opportunities with a Trusted Network.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          Find Jobs Across Industries – All In One Place.
        </p>

        {/* Bordered quote */}
        <div className="border-l-4 border-purple-500 pl-4">
          <p className="text-purple-700 font-semibold text-lg">
            True Jobs. True Growth.
          </p>
          <p className="text-gray-500 text-sm mt-1">Every Dream, Within Reach.</p>
        </div>

        {/* Feature pills */}
        <div className="mt-10 flex flex-wrap gap-3">
          {["10K+ Jobs", "500+ Companies", "Free to Join"].map((tag) => (
            <span
              key={tag}
              className="px-4 py-1.5 rounded-full text-sm font-medium bg-purple-100 text-purple-700 border border-purple-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* ── RIGHT PANEL – Form area ── */}
      <div className="w-full md:w-1/2 bg-linear-to-br from-purple-700 via-purple-800 to-purple-950 flex flex-col justify-center items-center px-8 py-16 relative overflow-hidden">

        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-white opacity-5 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-white opacity-5 translate-y-1/2 -translate-x-1/2" />

        {/* Mobile-only logo */}
        <div className="md:hidden mb-8 text-center">
          <h1 className="text-4xl font-extrabold">
            <span className="text-white">True</span>
            <span className="text-green-400"> Jobs</span>
          </h1>
        </div>

        {/* Card */}
        <div className="relative w-full max-w-sm bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-2xl">
          {children}
        </div>

        {/* Footer */}
        <p className="mt-8 text-purple-300 text-xs text-center max-w-xs">
          By continuing, you agree to True Jobs'&nbsp;
          <span className="underline cursor-pointer hover:text-white transition">Terms & Conditions</span>
          &nbsp;and&nbsp;
          <span className="underline cursor-pointer hover:text-white transition">Privacy Policy</span>.
        </p>
      </div>

    </div>
  );
}

export default AuthLayout;
