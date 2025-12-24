import { forwardRef } from "react";

interface InputProps {
  label?: string;
  placeholder?: string;
  hint?: string;
  error?: string;
  className?: string;
  required?: boolean;
  type?: "text" | "number" | "email" | "password";
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  name?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      placeholder,
      hint,
      error,
      className = "",
      required,
      type = "text",
      ...props
    },
    ref
  ) => {
    return (
      <div className={`flex flex-col gap-2 ${className}`}>
        {label && (
          <label className="font-medium text-gray-900">
            {label}
            {required && <span className="text-red-500 ml-0.5">*</span>}
          </label>
        )}
        <input
          ref={ref}
          type={type}
          placeholder={placeholder}
          className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent ${
            error ? "border-red-500" : "border-gray-300"
          }`}
          {...props}
        />
        {hint && !error && (
          <span className="text-sm text-gray-500">{hint}</span>
        )}
        {error && <span className="text-sm text-red-500">{error}</span>}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
