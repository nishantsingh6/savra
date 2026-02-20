const express = require('express');
const connectDB = require('./config/dataBase');
const cors = require('cors');
const anlaytics = require('./routes/analytics');
const importExcelData = require('./utils/excelImport');
const app = express();

require('dotenv').config();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://code-shiksha.vercel.app"
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(express.json());

const PORT = process.env.PORT || 5000;
// importExcelData();
connectDB();
app.use('/api/analytics', anlaytics);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT} number`)
});

app.get('/', (req, res) => {
    res.send('APP is running fine');
})

