import React from "react";

/**
 * InputField
 * A reusable, styled form input for all auth pages.
 *
 * Props:
 *  label       – visible label text
 *  id          – input id (links label)
 *  type        – html input type (default "text")
 *  placeholder – placeholder text
 *  value       – controlled value
 *  onChange    – change handler
 *  error       – error message string (optional)
 *  icon        – optional leading icon JSX
 *  rightElement – optional trailing element (e.g. toggle button)
 *  ...rest     – any other native input props
 */
function InputField({
  label,
  id,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  icon,
  rightElement,
  ...rest
}) {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-purple-100">
          {label}
        </label>
      )}

      <div className="relative flex items-center">
        {icon && (
          <span className="absolute left-3 text-purple-300 pointer-events-none">
            {icon}
          </span>
        )}

        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={[
            "w-full rounded-lg px-4 py-2.5 text-sm",
            "bg-white/15 border placeholder-purple-300 text-white",
            "focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent",
            "transition duration-200",
            icon ? "pl-10" : "",
            rightElement ? "pr-10" : "",
            error ? "border-red-400" : "border-white/30",
          ]
            .filter(Boolean)
            .join(" ")}
          {...rest}
        />

        {rightElement && (
          <span className="absolute right-3">{rightElement}</span>
        )}
      </div>

      {error && <p className="text-red-400 text-xs mt-0.5">{error}</p>}
    </div>
  );
}

export default InputField;
