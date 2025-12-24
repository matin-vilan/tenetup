import Header from "./Header";
import Sidebar from "./Sidebar";
import Main from "./Main";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-row w-full h-full">
      <Sidebar />
      <div className="flex flex-col w-full h-full">
        <Header />
        <Main>{children}</Main>
      </div>
    </div>
  );
};

export default Layout;
