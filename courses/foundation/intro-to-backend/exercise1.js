import express from "express";

const app = express();
const port = 3000;

// REQ : http://localhost:3000
app.get("/", (req, res) => {
  res.send("Hello from exercise 1!");
});

// REQ : http://localhost:3000/currentYear
app.get("/currentYear", (req, res) => {
  // TODO: Implement this function to return a JSON object containing the current year
  const currentYear = new Date().getFullYear();
  console.log("CURRENT-YEAR :::  "+currentYear);
  res.send(currentYear);
});

// REQ : http://localhost:3000/sum?a=5&b=8
app.get("/sum", (req,res) => {
  const {a, b} = req.query;
  console.log("a : "+a+" b : "+b);
  const sum = Number(a) + Number(b);
  res.send(sum);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});