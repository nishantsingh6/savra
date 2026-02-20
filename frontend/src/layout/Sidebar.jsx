const Sidebar = () => {
  return (
    <aside className="w-64 bg-[#F4EFFA] min-h-screen p-6">
      <h1 className="text-2xl font-bold text-purple-600 mb-10">SAVRA</h1>

      <nav className="space-y-4 text-gray-700">
        <div className="p-3 rounded hover:bg-purple-50 cursor-pointer">
          Dashboard
        </div>
        <div className="font-semibold bg-purple-100 p-3 rounded">
          Teachers
        </div>
        <div className="p-3 rounded hover:bg-purple-50 cursor-pointer">
          Classrooms
        </div>
        <div className="p-3 rounded hover:bg-purple-50 cursor-pointer">
          Reports
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
