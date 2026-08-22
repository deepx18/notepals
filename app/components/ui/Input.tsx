"use client";

import type { InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

type InputProps = {
  label?: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function Input({
  label,
  error,
  className = "",
  id,
  ...props
}: InputProps) {
  const wrapperClasses = [styles.wrapper, error && styles.error, className]
    .filter(Boolean)
    .join(" ");

  const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className={wrapperClasses}>
      {label && (
        <label className={styles.label} htmlFor={inputId}>
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={styles.input}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : undefined}
        {...props}
      />
      {error && (
        <span id={`${inputId}-error`} className={styles.errorMessage} role="alert">
          {error}
        </span>
      )}
    </div>
  );
}
