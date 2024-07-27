// require('dotenv').config({path:'./env'})
import dotenv from "dotenv";

import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB();

/*
import express from "express";

const app = express()(
  // function connectDB() {}

  // connectDB()

  async () => {
    try {
      await mongooose.connect(`${process.env.MONGODB_URI}/${dbName}`);
      app.on("error", (err) => {
        console.log("error", err);
        throw err;
      });

      app.listen(process.env.PORT, () => {
        console.log(`app is listening to ${process.env.PORT}`);
      });
    } catch (err) {
      console.log("error", err);
      throw err;
    }
  }
)();

*/
