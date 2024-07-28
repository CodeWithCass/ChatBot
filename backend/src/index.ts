import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";

//connection & listener
connectToDatabase().then(() => {
  app.listen(5001,() => console.log(`🚀🚀🚀 Server ready`))
}).catch((err) => console.log(err));
