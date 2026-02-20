import { useEffect, useState } from "react";
import {
  getSummary,
  getWeekly,
  getTeachers,
  getTeacherAnalytics
} from "../services/analyticsApi";

import AdminLayout from "../layout/AdminLayout";
import StatCard from "../components/StatCard";
import WeeklyChart from "../components/WeeklyChart";
import TeacherSelect from "../components/TeacherSelect";

const Dashboard = () => {
  const [summary, setSummary] = useState({});
  const [weekly, setWeekly] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [teacherData, setTeacherData] = useState(null);

  useEffect(() => {
    // Summary
    getSummary().then(res => {
      setSummary(res.data || {});
    });

    // Weekly
    getWeekly().then(res => {
      const rawData = res.data?.data || {};

      const daysOrder = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

      const formattedData = daysOrder.map(day => ({
        day,
        lesson: rawData[day]?.lesson || 0,
        quiz: rawData[day]?.quiz || 0,
        assessment: rawData[day]?.assessment || 0
      }));

      setWeekly(formattedData);
    });

    // Teachers
    getTeachers().then(res => {
      setTeachers(res.data || []);
    });
  }, []);

  const handleTeacherChange = async (id) => {
    if (!id) return setTeacherData(null);

    const res = await getTeacherAnalytics(id);
    setTeacherData(res.data || null);
    console.log(res.data)
  };

  return (
   <AdminLayout>
      <h3 className="text-lg font-semibold mb-4">Teachers Insights</h3>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <StatCard title="Active Teachers" value={summary?.activeTeachers} bg="bg-purple-100" />
        <StatCard title="Lessons Created" value={summary?.data?.lessons} bg="bg-green-100" />
        <StatCard title="Assessments Made" value={summary?.data?.assessments} bg="bg-orange-100" />
        <StatCard title="Quizzes Conducted" value={summary?.data?.quizzes} bg="bg-yellow-100" />
      </div>

      {/* Chart */}
      <WeeklyChart data={weekly} />

      {/* Teacher Analysis */}
      <div className="bg-white p-6 rounded-xl shadow mt-8">
        <h3 className="font-semibold mb-4">Per Teacher Analysis</h3>
        <TeacherSelect teachers={teachers} onChange={handleTeacherChange} />

        {teacherData && (
          <div className="grid grid-cols-3 gap-4 mt-6">
            <StatCard title="Lessons" value={teacherData.lessons} bg="bg-purple-50" />
            <StatCard title="Quizzes" value={teacherData.quizzes} bg="bg-green-50" />
            <StatCard title="Assessments" value={teacherData.assessments} bg="bg-orange-50" />
          </div>
        )}
      </div>
      
    </AdminLayout>
    
  );
};

export default Dashboard;
