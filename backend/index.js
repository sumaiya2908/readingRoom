import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import morgan from 'morgan'
import adminRoute from './routes/adminRoute';
import memberRoute from './routes/memberRoute';
import bookRoute from './routes/bookRoute';
import { errorHandler } from "./middleware/errorMiddleware.js";
dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.json());
app.use("/api/books", bookRoute);
app.use("/api/members", memberRoute);
app.use('/api/admin',adminRoute)
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
  }
  

app.use(errorHandler)
app.listen(
    PORT,
    console.log(
      `Server running in ${process.env.NODE_ENV} mode on Port:${PORT}`
    )
);