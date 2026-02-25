import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../components/auth/AuthLayout";
import OtpInput from "../components/auth/OtpInput";
import useAuth from "../hooks/useAuth";

const RESEND_SECONDS = 30;

function OtpPage() {
  const navigate = useNavigate();
  const { otp, setOtp, verifyOtp, sendOtp, loading, error, setError } = useAuth();
  const [timer, setTimer] = useState(RESEND_SECONDS);
  const [canResend, setCanResend] = useState(false);

  const phone = sessionStorage.getItem("tj_phone") || "your number";

  // Countdown timer
  useEffect(() => {
    if (timer <= 0) return;
    const id = setTimeout(() => {
      setTimer((t) => {
        const next = t - 1;
        if (next <= 0) setCanResend(true);
        return next;
      });
    }, 1000);
    return () => clearTimeout(id);
  }, [timer]);

  const handleVerify = async () => {
    const result = await verifyOtp();
    if (result.success) {
      if (result.isNewUser) {
        navigate("/register");
      } else {
        navigate("/dashboard");
      }
    }
  };

  const handleResend = async () => {
    if (!canResend) return;
    setCanResend(false);
    setTimer(RESEND_SECONDS);
    setOtp(Array(6).fill(""));
    setError("");
    await sendOtp();
  };

  return (
    <AuthLayout>
      {/* Heading */}
      <h2 className="text-2xl font-bold text-white text-center mb-1">
        Verify OTP
      </h2>
      <p className="text-purple-200 text-sm text-center mb-2">
        We sent a 6-digit code to
      </p>
      <p className="text-white font-semibold text-center text-sm mb-7 tracking-wide">
        {phone}
      </p>

      {/* OTP Boxes */}
      <div className="mb-6">
        <OtpInput otp={otp} setOtp={setOtp} />
        {error && (
          <p className="text-red-400 text-xs text-center mt-3">{error}</p>
        )}
      </div>

      {/* Verify Button */}
      <button
        onClick={handleVerify}
        disabled={loading || otp.join("").length < 6}
        className={[
          "w-full py-3 rounded-lg font-semibold text-sm tracking-wide transition duration-200",
          loading || otp.join("").length < 6
            ? "bg-white/30 text-white/60 cursor-not-allowed"
            : "bg-white text-purple-700 hover:bg-purple-50 active:scale-[0.98] shadow-md",
        ].join(" ")}
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
            </svg>
            Verifying…
          </span>
        ) : (
          "Verify & Continue"
        )}
      </button>

      {/* Resend */}
      <div className="mt-6 text-center">
        {canResend ? (
          <button
            onClick={handleResend}
            className="text-white text-sm font-semibold underline hover:text-purple-200 transition"
          >
            Resend OTP
          </button>
        ) : (
          <p className="text-purple-300 text-sm">
            Resend OTP in{" "}
            <span className="text-white font-semibold">{timer}s</span>
          </p>
        )}
      </div>

      {/* Back link */}
      <button
        onClick={() => navigate("/")}
        className="mt-4 w-full text-purple-300 text-xs text-center hover:text-white transition"
      >
        ← Change number
      </button>
    </AuthLayout>
  );
}

export default OtpPage;
