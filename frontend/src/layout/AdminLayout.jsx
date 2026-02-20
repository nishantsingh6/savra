import Sidebar from "./Sidebar";
import Header from "./Header";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 bg-gray-50 p-8">
        <Header />
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
