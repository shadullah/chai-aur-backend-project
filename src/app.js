import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
); // app er sthe 'use' beshirvag khetre bebhorito hy middleware er jnno
// app.use(upload.array());
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// routes import
import userRouter from "./routes/user.routes.js";
import videoRouter from "./routes/video.routes.js";

// routes declaration
// app.use("/users", userRouter)
app.use("/api/v1/users", userRouter); // industry use
app.use("/api/v1/videos", videoRouter);

export { app };
