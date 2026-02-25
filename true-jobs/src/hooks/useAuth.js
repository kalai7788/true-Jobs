import { useState } from "react";

/**
 * useAuth
 * Centralises authentication state so pages don't need to
 * pass phone/OTP through props or context.
 *
 * In a real app, replace the fake async helpers with actual API calls.
 */
function useAuth() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [isNewUser, setIsNewUser] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  /** Simulate sending an OTP to the phone number */
  const sendOtp = async () => {
    setLoading(true);
    setError("");
    try {
      // TODO: replace with real API call
      await new Promise((r) => setTimeout(r, 800));
      return true;
    } catch {
      setError("Failed to send OTP. Please try again.");
      return false;
    } finally {
      setLoading(false);
    }
  };

  /** Simulate verifying the OTP */
  const verifyOtp = async () => {
    setLoading(true);
    setError("");
    try {
      const code = otp.join("");
      if (code.length < 6) {
        setError("Please enter a 6-digit OTP.");
        return { success: false };
      }
      // TODO: replace with real API call
      await new Promise((r) => setTimeout(r, 800));
      // Simulate: new user if otp === "123456", existing otherwise
      const newUser = code !== "123456";
      setIsNewUser(newUser);
      return { success: true, isNewUser: newUser };
    } catch {
      setError("Invalid OTP. Please try again.");
      return { success: false };
    } finally {
      setLoading(false);
    }
  };

  /** Simulate creating a new account */
  const register = async (formData) => {
    setLoading(true);
    setError("");
    try {
      // TODO: replace with real API call
      await new Promise((r) => setTimeout(r, 1000));
      console.log("Registered:", { phone, ...formData });
      return true;
    } catch {
      setError("Registration failed. Please try again.");
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    phone, setPhone,
    otp, setOtp,
    isNewUser,
    loading, error, setError,
    sendOtp,
    verifyOtp,
    register,
  };
}

export default useAuth;
