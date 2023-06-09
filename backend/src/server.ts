import app from "./app";
import env from "../src/util/validateEnv";
import mongoose from "mongoose";

const port = env.PORT;

mongoose
  .connect(env.MONGO_CONNECTION_STRING)
  .then(() => {
    console.log("Mongoose Connected");

    app.listen(port, () => {
      console.log("server working on port :" + port);
    });
  })
  .catch(console.error);
