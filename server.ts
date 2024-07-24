import { app } from "./src/app";
import { config } from "./src/config/config";
import connectDB from "./src/config/db";

const startServer = async () => {
  try {
    await connectDB();
    const PORT = config.PORT;
    app.listen(PORT, () => {
      console.log(`The app is running at port ${PORT}`);
    });
  } catch (error) {
    console.log("Unable to start initial server.", error);
  }
};
startServer();
