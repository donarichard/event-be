import mongoose from "mongoose";
import { CONSTANTS } from "../config/constant";

export const connector = () => {
  try {
    mongoose.connect(
      CONSTANTS.MONGODB.URL,
      {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      },
      (err) => {
        if (err) {
          console.error(`👎 Error in Connecting Database 👎`, err);
          throw err;
        }
        console.info(`👍 Connected wtih Database Successfully 👍`);
      }
    );
  } catch (error) {
    console.error(`👎 Error in Connecting Database 👎`, err);
  }
};
