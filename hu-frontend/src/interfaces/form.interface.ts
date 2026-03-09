import React, { InputHTMLAttributes } from "react";

export interface FloatingInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type?: string;
  value?: string;
  error?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  required?: boolean;
  id?: string;
}