const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema(
  {
    teacherId: {
      type: String,
      required: true,
      unique: true
    },
    teacherName: {
      type: String,
      required: true
    },
    grade: {
      type: String,
      required: true
    },
    subject: {
      type: String,
      required: true
    },
    activityType: {
      type: String,
      enum: ["lesson", "quiz", "assessment"],
      required: true
    },
    createdAt: {
      type: Date,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Activity", activitySchema);
