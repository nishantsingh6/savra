const TeacherSelect = ({ teachers, onChange }) => {
  return (
    <select
      className="border rounded px-4 py-2"
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">Select Teacher</option>
      {teachers.map(t => (
        <option key={t.teacherId} value={t.teacherId}>
          {t.teacherName}
        </option>
      ))}
    </select>
  );
};

export default TeacherSelect;
