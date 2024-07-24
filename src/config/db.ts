import mongoose, { mongo } from "mongoose";
import { config } from "./config";
import { DB_NAME } from "../../constant";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("Database connected");
    });
    mongoose.connection.on("error", (err) => {
      console.log("Unable to connect with database: ", err);
    });
    await mongoose.connect(`${config.DB_URL}/${DB_NAME}`);
  } catch (error: any) {
    console.log("Error when connecting with dabase: ", error.message);
    setTimeout(connectDB, 5000);  
    process.exit(1);
  }
};
export default connectDB;
