interface ModalHeaderProps {
  children: React.ReactNode;
  onClose?: () => void;
  className?: string;
}

const ModalHeader = ({
  children,
  onClose,
  className = "",
}: ModalHeaderProps) => {
  return (
    <div
      className={`flex items-center justify-between px-6 py-4 bg-gray-900 rounded-t-xl ${className}`}
    >
      <h2 className="text-white font-semibold text-lg">{children}</h2>
      {onClose && (
        <button
          onClick={onClose}
          className="text-white hover:text-gray-300 transition-colors cursor-pointer"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default ModalHeader;
