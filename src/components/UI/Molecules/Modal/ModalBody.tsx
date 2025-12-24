interface ModalBodyProps {
  children: React.ReactNode;
  className?: string;
}

const ModalBody = ({ children, className = "" }: ModalBodyProps) => {
  return (
    <div className={`flex-1 overflow-y-auto p-6 ${className}`}>{children}</div>
  );
};

export default ModalBody;
