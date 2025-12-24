const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-full bg-green-500 p-4 overflow-y-auto min-h-[calc(100vh-64px)]">
      {children}
    </div>
  );
};

export default Main;
