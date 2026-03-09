'use client';

import { useState, useRef } from "react";
import { FloatingInputProps } from "@/interfaces/form.interface";

export function FloatingInput({
  label,
  type = "text",
  value,
  error,
  icon,
  disabled = false,
  required = false,
  id,
  ...rest
}: FloatingInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

  const isPassword = type === "password";
  const resolvedType = isPassword && showPassword ? "text" : type;

  const inputClass = `form-control${error ? " has-error" : ""}`;
  const labelClass = `form-label`;

  return (
    <>
      <div className="form-floating">
        <input
          ref={inputRef}
          id={inputId}
          type={resolvedType}
          placeholder={label}
          disabled={disabled}
          required={required}
          className={inputClass}
          {...rest}
        />

        <label htmlFor={inputId} className={labelClass}>
          {label}
          <span>{required && "*"}</span>
        </label>
        {isPassword && (
          <button
            type="button"
            className="toggle-btn"
            tabIndex={-1}
            onClick={() => setShowPassword((v) => !v)}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        )}
      </div>

      {error && <p className="error-message visible">{error}</p>}
    </>
  );
}