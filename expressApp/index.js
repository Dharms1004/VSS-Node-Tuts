const express = require("express");

const app = express();
const PORT = 7001;

app.get("/", (request, response) => {
    response.send({ message: "Welcome to my first express App" });
});

app.get("/greetings", (request, response) => {
  const { name } = request.query;

  const message = `Welcome ${name || "there"} to greetings route`;
  response.send({ message });
});


// Run a server

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});