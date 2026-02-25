import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../components/auth/AuthLayout";
import InputField from "../components/auth/InputField";
import useAuth from "../hooks/useAuth";

// Country codes list
const COUNTRY_CODES = [
  { code: "+91", flag: "🇮🇳", name: "India" },
  { code: "+1",  flag: "🇺🇸", name: "USA" },
  { code: "+44", flag: "🇬🇧", name: "UK" },
  { code: "+61", flag: "🇦🇺", name: "Australia" },
  { code: "+971", flag: "🇦🇪", name: "UAE" },
  { code: "+65", flag: "🇸🇬", name: "Singapore" },
];

function LoginPage() {
  const navigate = useNavigate();
  const { phone, setPhone, sendOtp, loading, error, setError } = useAuth();
  const [countryCode, setCountryCode] = useState("+91");
  const [localError, setLocalError] = useState("");

  const handleContinue = async () => {
    // Basic validation
    const digits = phone.replace(/\D/g, "");
    if (digits.length < 7 || digits.length > 15) {
      setLocalError("Please enter a valid phone number.");
      return;
    }
    setLocalError("");

    const ok = await sendOtp();
    if (ok) {
      // Pass phone via sessionStorage so OtpPage can read it
      sessionStorage.setItem("tj_phone", countryCode + phone);
      navigate("/verify-otp");
    }
  };

  const handleInput = (e) => {
    setPhone(e.target.value);
    if (localError) setLocalError("");
    if (error) setError("");
  };

  return (
    <AuthLayout>
      {/* Heading */}
      <h2 className="text-2xl font-bold text-white text-center mb-1">
        Welcome Back!
      </h2>
      <p className="text-purple-200 text-sm text-center mb-7">
        OTP will be sent to your mobile number
      </p>

      {/* Phone field */}
      <div className="mb-5">
        <label className="text-sm font-medium text-purple-100 block mb-1.5">
          Mobile Number
        </label>

        <div className="flex gap-2">
          {/* Country selector */}
          <select
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            className="bg-white/15 border border-white/30 rounded-lg px-2 py-2.5 text-white text-sm focus:outline-none focus:ring-2 focus:ring-white/50 cursor-pointer"
          >
            {COUNTRY_CODES.map((c) => (
              <option
                key={c.code}
                value={c.code}
                className="bg-purple-800 text-white"
              >
                {c.flag} {c.code}
              </option>
            ))}
          </select>

          {/* Phone input */}
          <input
            id="phone"
            type="tel"
            placeholder="Enter your mobile number"
            value={phone}
            onChange={handleInput}
            onKeyDown={(e) => e.key === "Enter" && handleContinue()}
            maxLength={15}
            className={[
              "flex-1 rounded-lg px-4 py-2.5 text-sm",
              "bg-white/15 border placeholder-purple-300 text-white",
              "focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent",
              "transition duration-200",
              localError || error ? "border-red-400" : "border-white/30",
            ].join(" ")}
          />
        </div>

        {/* Errors */}
        {(localError || error) && (
          <p className="text-red-400 text-xs mt-1.5">{localError || error}</p>
        )}
      </div>

      {/* CTA Button */}
      <button
        onClick={handleContinue}
        disabled={loading}
        className={[
          "w-full py-3 rounded-lg font-semibold text-sm tracking-wide transition duration-200",
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
            Sending OTP…
          </span>
        ) : (
          "Get OTP"
        )}
      </button>

      {/* Divider */}
      <div className="flex items-center my-6 gap-3">
        <hr className="flex-1 border-white/20" />
        <span className="text-purple-300 text-xs">OR</span>
        <hr className="flex-1 border-white/20" />
      </div>

      {/* Social login hint */}
      <p className="text-center text-purple-200 text-xs">
        New here?{" "}
        <span
          className="text-white font-semibold underline cursor-pointer hover:text-purple-100 transition"
          onClick={handleContinue}
        >
          Register with your number
        </span>
      </p>
    </AuthLayout>
  );
}

export default LoginPage;