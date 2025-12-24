interface ModalFooterProps {
  children: React.ReactNode;
  className?: string;
}

const ModalFooter = ({ children, className = "" }: ModalFooterProps) => {
  return (
    <div
      className={`sticky bottom-0 flex items-center justify-end gap-3 px-6 py-4 border-t border-gray-200 bg-white rounded-b-xl ${className}`}
    >
      {children}
    </div>
  );
};

export default ModalFooter;
