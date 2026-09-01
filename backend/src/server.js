import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

connectDB.then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on localhost:${PORT}`);
  });
});
