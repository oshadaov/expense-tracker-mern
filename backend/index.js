const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const UserRoutes = require("./routes/userRoutes")
const cors =require('cors')
dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors())
app.use('/auth', UserRoutes);
app.use('/users',UserRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
