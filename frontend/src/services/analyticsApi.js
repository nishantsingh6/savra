import axios from "axios";

const API = axios.create({
  baseURL: "https://savra.onrender.com/api/analytics"
});

export const getSummary = () => API.get("/summary");
export const getWeekly = () => API.get("/weekly");
export const getTeachers = () => API.get("/teachers");
export const getTeacherAnalytics = (id) => API.get(`/teacher/${id}`);
