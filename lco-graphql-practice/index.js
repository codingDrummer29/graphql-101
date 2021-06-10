import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Up and running with GraphQL crash course - practie version");
});

app.listen(8082, () => console.log("Running at port 8082"));
