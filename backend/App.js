import express from "express";
import connectDB from "./models/DatabaseConnection.js";
import mongoose from "mongoose";
import { config } from "dotenv";
import ExpenseRouter from "./routes/ExpenseRouter.js";
import cors from 'cors'
const app = express();
config();
app.use(express.json());
app.use(cors())
connectDB();
const port = process.env.port;
app.use("/", ExpenseRouter);
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB Successfully");
  app.listen(port, () => {
    console.log("App is listening on " + port);
  });
});
