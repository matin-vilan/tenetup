interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  form?: string;
}

const Button = ({
  children,
  onClick,
  variant = "primary",
  className = "",
  disabled = false,
  type = "button",
  form,
}: ButtonProps) => {
  const baseStyles =
    "px-5 py-2.5 rounded-lg font-medium flex items-center gap-2 transition-colors";

  const variants = {
    primary: disabled
      ? "bg-gray-400 text-white cursor-not-allowed"
      : "bg-gray-900 text-white hover:bg-gray-800 cursor-pointer",
    secondary: disabled
      ? "bg-gray-100 text-gray-400 border border-gray-200 cursor-not-allowed"
      : "bg-white text-gray-900 border border-gray-300 hover:bg-gray-50 cursor-pointer",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      form={form}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
