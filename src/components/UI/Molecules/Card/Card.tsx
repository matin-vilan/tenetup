interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className = "" }: CardProps) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-sm border border-gray-100 p-5 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
