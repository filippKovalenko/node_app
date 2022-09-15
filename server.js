import express from "express";
import chalk from "chalk";
import morgan from "morgan";
import mongoose from "mongoose";
import * as dotenv from 'dotenv'
import methodOverride from 'method-override'
import routerPost from "./routes/post-routes.js";
import routerContact from "./routes/contact-router.js";
import routerApiPost from "./routes/api-post-routes.js";
import createPath from "./helpers/creare-path.js";

const app = express();

app.set("view angine", "ejs");

dotenv.config()

mongoose
  .connect(process.env.MONGO_URL , { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => console.log(chalk.bgGreen("Connected DB")))
  .catch((err) => console.log(chalk.bgRed(err)));

app.listen(process.env.PORT, (err) => {
  if (err) {
    throw console.log(chalk.bgRed(err));
  }
  console.log(chalk.bgGreen( `listening port ${process.env.PORT}`));
});
 
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

app.use(express.urlencoded({ extended: false }));

app.use(express.static("styles"));

app.use(methodOverride('_method'))

app.get("/", (req, res) => {
  const title = "Home";
  res.render(createPath("index"), { title });
});

app.use(routerPost)
app.use(routerContact)
app.use(routerApiPost)

app.use((req, res) => {
  const title = "Error";
  res.status(404).render(createPath("error"), { title });
});
