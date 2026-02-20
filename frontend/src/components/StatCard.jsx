const StatCard = ({ title, value, bg }) => {
  return (
    <div className={`p-6 rounded-xl ${bg}`}>
      <p className="text-gray-500 text-sm">{title}</p>
      <h2 className="text-3xl font-bold mt-2">{value}</h2>
      <p className="text-xs text-gray-400 mt-1">This week</p>
    </div>
  );
};

export default StatCard;
