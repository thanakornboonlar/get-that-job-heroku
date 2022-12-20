import express from "express";
import bodyParser from "body-parser";
import professionalRouter from "./routes/professional.js";
import recruiterRouter from "./routes/recruiter.js";
import cors from "cors";
import { pool } from "./utils/db.js";
import loginRecuiterRouter from "./routes/login_recruiter.js";
import loginProfessionalRouter from "./routes/login_professional.js";
import cloudinary from "cloudinary";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(bodyParser.json());
app.use(cors());

dotenv.config();
const PORT = Number(process.env.PORT) || 4000;

// app.use(express.static(path.join(__dirname, "client/build")));
// app.use(express.static("./client/build")); => for demonstration

//heroku
if (process.env.NODE_ENV === "production") {
  //server static content
  //npm run build
  app.use(express.static(path.join(__dirname, "client/build")));
}

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
  secure: true,
});

//Connect to elephantSQL
const connectDb = async () => {
  try {
    await pool.connect();
    console.log("Connect to Postgres");
  } catch (err) {
    console.log(err);
  }
};

//Routes

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "client/build/index.html"));
// });
// "proxy": "http://localhost:4000",

app.use("/professional", professionalRouter);
app.use("/recruiter", recruiterRouter);

app.use("/login_professional", loginProfessionalRouter);
app.use("/login_recruiter", loginRecuiterRouter);

app.listen(PORT, () => {
  connectDb();
  console.log(`Server start at Port ${PORT}`);
});
