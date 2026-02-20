const xlsx = require("xlsx");
const Activity = require("../models/Activity");

const importExcelData = async () => {
  const workbook = xlsx.readFile("data.xlsx");
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const rows = xlsx.utils.sheet_to_json(sheet);

  const activities = rows.map(row => ({
    teacherId: row.Teacher_id,
    teacherName: row.Teacher_name,
    grade: row.Grade,
    subject: row.Subject,
    activityType: row.Activity_type.toLowerCase(),
    createdAt: new Date(row.Created_at)
  }));

  await Activity.insertMany(activities);
  console.log("Excel data imported successfully"); 
};

module.exports = importExcelData;
