# Teacher Insights Dashboard (MERN Stack)

##  Overview
This project is a **Teacher Insights Dashboard** built using the **MERN stack**.  
It allows a school principal (admin) to view teacher activity analytics such as lessons, quizzes, and assessments created over time.

The dashboard provides:
- Teacher-wise performance overview
- Weekly / Monthly / Yearly analytics
- Activity trends using charts


---

##  Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Chart.js / Recharts
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

---

##  Features Implemented

### 1 Teacher Activity Analytics
- Total lessons, quizzes, and assessments per teacher
- Data derived from `createdAt` timestamps



### 2 Teacher Selector
- View analytics for:
  - All teachers
  - Individual teacher
- Dynamic data fetching

### 3 Weekly Activity Trends
- Visualized using charts
- Shows activity distribution over time


### 4 Duplicate Handling (Minimal & Correct)
- Prevents duplicate activity entries during Excel data import
- Uses composite checks (teacherId + activityType + createdAt)

---

##  Project Structure

teacher-insights-dashboard/
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── utils/
│ ├── excelImport.js
│ └── server.js
├── frontend/
│ ├── src/
│ ├── components/
│ ├── pages/
│ └── App.jsx
├── .gitignore
└── README.md


---

##  Setup Instructions

### Backend Setup
```bash
cd backend
npm install
npm run dev

### Frontend Setup
```bash
cd frontend
npm install
npm start


 Dummy Data Source

Teacher activity data imported from an Excel (.xlsx) file

Columns used:

Teacher_id

Teacher_name

Grade

Subject

Activity_type

Created_at
