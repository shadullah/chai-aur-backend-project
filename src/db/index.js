import mongooose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongooose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n MongoDb connected, DB_host ${connectionInstance.connection.host}`
    );
  } catch (err) {
    console.log("mongodb error connection ", err);
    process.exit(1);
  }
};

export default connectDB;
