import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../components/auth/AuthLayout";
import InputField from "../components/auth/InputField";
import useAuth from "../hooks/useAuth";

const ROLES = [
  { value: "jobseeker", label: "🔍 Job Seeker", desc: "I'm looking for a job" },
  { value: "recruiter", label: "🏢 Recruiter",  desc: "I'm hiring talent" },
];

// Defined at module scope to avoid re-creating on every render
function EyeIcon({ show, toggle }) {
  return (
    <button
      type="button"
      onClick={toggle}
      className="text-purple-300 hover:text-white transition text-xs"
    >
      {show ? "🙈" : "👁️"}
    </button>
  );
}

function RegisterPage() {
  const navigate = useNavigate();
  const { register, loading, error, setError } = useAuth();
  const phone = sessionStorage.getItem("tj_phone") || "";

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "jobseeker",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});

  const set = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (fieldErrors[field]) setFieldErrors((prev) => ({ ...prev, [field]: "" }));
    if (error) setError("");
  };

  const validate = () => {
    const errs = {};
    if (!form.fullName.trim()) errs.fullName = "Full name is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Enter a valid email address.";
    if (form.password.length < 6)
      errs.password = "Password must be at least 6 characters.";
    if (form.password !== form.confirmPassword)
      errs.confirmPassword = "Passwords do not match.";
    return errs;
  };

  const handleSubmit = async () => {
    const errs = validate();
    if (Object.keys(errs).length) {
      setFieldErrors(errs);
      return;
    }
    const ok = await register({ ...form, phone });
    if (ok) {
      sessionStorage.removeItem("tj_phone");
      navigate("/dashboard");
    }
  };


  return (
    <AuthLayout>
      {/* Heading */}
      <h2 className="text-2xl font-bold text-white text-center mb-1">
        Create Account
      </h2>
      <p className="text-purple-200 text-sm text-center mb-6">
        You're almost there! Fill in your details.
      </p>

      <div className="flex flex-col gap-4">
        {/* Full Name */}
        <InputField
          id="fullName"
          label="Full Name"
          placeholder="John Doe"
          value={form.fullName}
          onChange={set("fullName")}
          error={fieldErrors.fullName}
          icon={<span className="text-sm">👤</span>}
        />

        {/* Email */}
        <InputField
          id="email"
          label="Email Address"
          type="email"
          placeholder="john@example.com"
          value={form.email}
          onChange={set("email")}
          error={fieldErrors.email}
          icon={<span className="text-sm">✉️</span>}
        />

        {/* Password */}
        <InputField
          id="password"
          label="Password"
          type={showPassword ? "text" : "password"}
          placeholder="Min. 6 characters"
          value={form.password}
          onChange={set("password")}
          error={fieldErrors.password}
          icon={<span className="text-sm">🔒</span>}
          rightElement={
            <EyeIcon show={showPassword} toggle={() => setShowPassword((v) => !v)} />
          }
        />

        {/* Confirm Password */}
        <InputField
          id="confirmPassword"
          label="Confirm Password"
          type={showConfirm ? "text" : "password"}
          placeholder="Re-enter password"
          value={form.confirmPassword}
          onChange={set("confirmPassword")}
          error={fieldErrors.confirmPassword}
          icon={<span className="text-sm">🔒</span>}
          rightElement={
            <EyeIcon show={showConfirm} toggle={() => setShowConfirm((v) => !v)} />
          }
        />

        {/* Role selector */}
        <div>
          <p className="text-sm font-medium text-purple-100 mb-2">I am a…</p>
          <div className="grid grid-cols-2 gap-3">
            {ROLES.map((r) => (
              <button
                key={r.value}
                type="button"
                onClick={() => setForm((p) => ({ ...p, role: r.value }))}
                className={[
                  "flex flex-col items-center justify-center py-3 px-2 rounded-xl border text-sm transition duration-200",
                  form.role === r.value
                    ? "border-white bg-white/25 text-white"
                    : "border-white/30 bg-white/10 text-purple-200 hover:border-white/60",
                ].join(" ")}
              >
                <span className="text-xl mb-1">{r.label.split(" ")[0]}</span>
                <span className="font-semibold">{r.label.split(" ").slice(1).join(" ")}</span>
                <span className="text-xs opacity-70 mt-0.5">{r.desc}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Server error */}
        {error && (
          <p className="text-red-400 text-xs text-center">{error}</p>
        )}

        {/* Submit */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className={[
            "w-full py-3 rounded-lg font-semibold text-sm tracking-wide transition duration-200 mt-1",
            loading
              ? "bg-white/40 text-white cursor-not-allowed"
              : "bg-white text-purple-700 hover:bg-purple-50 active:scale-[0.98] shadow-md",
          ].join(" ")}
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
              </svg>
              Creating Account…
            </span>
          ) : (
            "Create Account 🚀"
          )}
        </button>

        {/* Back */}
        <button
          onClick={() => navigate("/verify-otp")}
          className="text-purple-300 text-xs text-center hover:text-white transition"
        >
          ← Back to OTP verification
        </button>
      </div>
    </AuthLayout>
  );
}

export default RegisterPage;
