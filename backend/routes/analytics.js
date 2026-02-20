const express = require("express");
const router = express.Router();
const {getSummary,getWeeklyActivity,getTeacherAnalytics,getTeachers} = require('../controllers/analytics');

router.get("/summary", getSummary);
router.get("/weekly", getWeeklyActivity);
router.get("/teachers", getTeachers);
router.get("/teacher/:teacherId", getTeacherAnalytics);


module.exports = router;
