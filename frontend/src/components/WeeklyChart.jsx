import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const WeeklyChart = ({ data }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="font-semibold mb-4">Weekly Activity</h3>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Area dataKey="lesson" fill="#C7D2FE" stroke="#6366F1" />
          <Area dataKey="quiz" fill="#BBF7D0" stroke="#22C55E" />
          <Area dataKey="assessment" fill="#FED7AA" stroke="#F97316" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeeklyChart;
