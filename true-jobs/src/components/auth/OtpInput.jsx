import React, { useRef } from "react";

/**
 * OtpInput
 * Renders 6 single-character boxes.
 * Auto-focuses the next box on entry, goes back on Backspace.
 *
 * Props:
 *  otp      – string[6] array of digit characters
 *  setOtp   – setter for the otp array
 */
function OtpInput({ otp, setOtp }) {
  const inputsRef = useRef([]);

  const handleChange = (e, index) => {
    const val = e.target.value.replace(/\D/g, ""); // digits only
    if (!val) return;

    const newOtp = [...otp];
    newOtp[index] = val.slice(-1); // take last char if pasted more
    setOtp(newOtp);

    // Move focus forward
    if (index < 5) inputsRef.current[index + 1]?.focus();
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];
      if (newOtp[index]) {
        // Clear current box
        newOtp[index] = "";
        setOtp(newOtp);
      } else if (index > 0) {
        // Move to previous box and clear it
        newOtp[index - 1] = "";
        setOtp(newOtp);
        inputsRef.current[index - 1]?.focus();
      }
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6);
    const newOtp = [...otp];
    pasted.split("").forEach((char, i) => {
      newOtp[i] = char;
    });
    setOtp(newOtp);
    // Focus the box after last pasted digit
    const nextIndex = Math.min(pasted.length, 5);
    inputsRef.current[nextIndex]?.focus();
  };

  return (
    <div className="flex gap-3 justify-center" onPaste={handlePaste}>
      {otp.map((digit, index) => (
        <input
          key={index}
          ref={(el) => (inputsRef.current[index] = el)}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={digit}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          className={[
            "w-11 h-12 text-center text-xl font-bold rounded-lg",
            "bg-white/15 border text-white",
            "focus:outline-none focus:ring-2 focus:ring-white/60 focus:border-transparent",
            "transition duration-200 caret-white",
            digit ? "border-white/70 bg-white/25" : "border-white/30",
          ].join(" ")}
        />
      ))}
    </div>
  );
}

export default OtpInput;
