import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import morgan from 'morgan'

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
  }
  
app.use(express.json());

app.listen(
    PORT,
    console.log(
      `Server running in ${process.env.NODE_ENV} mode on Port:${PORT}`
    )
);