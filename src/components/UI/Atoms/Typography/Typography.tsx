interface TypographyProps {
  children: React.ReactNode;
  variant?: "h1" | "h2" | "h3" | "body" | "caption";
  className?: string;
}

const Typography = ({
  children,
  variant = "body",
  className = "",
}: TypographyProps) => {
  const variants = {
    h1: "text-2xl font-bold text-gray-900",
    h2: "text-xl font-semibold text-gray-900",
    h3: "text-lg font-medium text-gray-900",
    body: "text-base text-gray-600",
    caption: "text-sm text-gray-500",
  };

  const Component = variant.startsWith("h")
    ? (variant as "h1" | "h2" | "h3")
    : "p";

  return (
    <Component className={`${variants[variant]} ${className}`}>
      {children}
    </Component>
  );
};

export default Typography;
