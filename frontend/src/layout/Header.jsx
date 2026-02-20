const Header = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <h2 className="text-xl font-bold">Admin Companion</h2>
        <p className="text-gray-500 text-sm">
          See what's happening across your school
        </p>
      </div>

      <div className="flex gap-3">
        <input
          placeholder="Ask Savra AI"
          className="border rounded px-4 py-2"
        />
        <select className="border rounded px-3 py-2">
          <option>Grade 7</option>
        </select>
        <select className="border rounded px-3 py-2">
          <option>All Subjects</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
