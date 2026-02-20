const Activity = require('../models/Activity');

// Analytics controller to get activity data for a teacher
exports.getSummary = async (req, res) => {
    try{
        const lessons = await Activity.countDocuments({ activityType: 'lesson'});
        const quizzes = await Activity.countDocuments({activityType:'quiz'});
        const assessments = await Activity.countDocuments({activityType:'assessment'});
        const teachers = await Activity.distinct('teacherId')
        return res.status(200).json({
            success:true,
            data:{
                lessons,
                quizzes,
                assessments
            },
            activeTeachers: teachers.length
        })
    }catch(error){
        return res.status(500).json({
            success:false,
            message:'Error fetching analytics data',
            error: error.message
        })
    }
}

exports.getWeeklyActivity = async (req, res) => {
    try{
    const data = await Activity.aggregate([
         {
        $group: {
          _id: {
            day: { $dayOfWeek: "$createdAt" },
            type: "$activityType"
          },
          count: { $sum: 1 }
        }
      }
    ]);

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const result = {};
    data.forEach(item => {
        const day = days[item._id.day - 1];
        if (!result[day]) {
            result[day] = {};
        }
        result[day][item._id.type] = item.count;
    });
    return res.status(200).json({
        success:true,
        data: result
    })
    }catch(error){
        return res.status(500).json({
            success:false,
            message:'Error fetching weekly activity data',
            error: error.message
        })
    }
}

//  Teacher Dropdown List
exports.getTeachers = async (req, res) => {
  try {
    const teachers = await Activity.aggregate([
      {
        $group: {
          _id: "$teacherId",
          teacherName: { $first: "$teacherName" }
        }
      }
    ]);

    res.json(teachers.map(t => ({
      teacherId: t._id,
      teacherName: t.teacherName
    })));
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get Teacher Analytics on the basis of id
exports.getTeacherAnalytics = async (req, res) => {
  try {
    const { teacherId } = req.params;

  
const activities = await Activity.find({ teacherId });



    const response = {
      lessons: activities.filter(a => a.activityType === "lesson").length,
      quizzes: activities.filter(a => a.activityType === "quiz").length,
      assessments: activities.filter(a => a.activityType === "assessment").length
    };

    res.json(response);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
