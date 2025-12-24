const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full p-4 overflow-y-auto h-[calc(100vh-64px)]">
      {children}
    </div>
  );
};

export default Main;
