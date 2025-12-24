interface AlertProps {
  children: React.ReactNode;
  variant?: "info" | "success" | "warning" | "error";
  className?: string;
}

const Alert = ({ children, variant = "info", className = "" }: AlertProps) => {
  const variants = {
    info: "bg-blue-50 border-blue-200 text-blue-600",
    success: "bg-green-50 border-green-200 text-green-600",
    warning: "bg-yellow-50 border-yellow-200 text-yellow-600",
    error: "bg-red-50 border-red-200 text-red-600",
  };

  const icons = {
    info: "ⓘ",
    success: "✓",
    warning: "⚠",
    error: "✕",
  };

  return (
    <div
      className={`flex items-center gap-3 p-4 border rounded-lg ${variants[variant]} ${className}`}
    >
      <span className="text-xl">{icons[variant]}</span>
      <span>{children}</span>
    </div>
  );
};

export default Alert;
