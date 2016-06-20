import * as express from "express";

const app = express();

app.listen(3000, () => {
  console.log("Server isn't listening on localhost:3000");
});
