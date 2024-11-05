// const number = require('./constants');
// console.log(number); // 10

const PORT = 3000;
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const usersMethods = require("./user.methods");
const app = express();

app.use(morgan("dev")); // log all requests - audit log
app.use(
  cors({
    origin: "http://127.0.0.1:5500",
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// app.use(morgan('dev')); // Middlweware trebuie setate inainte de a crea orice ruta pentru a putea fi folosite pentru toate endpointurile

app.get("/users", async (req, res) => {
  let dbUsers = require("./user");

  let { age, name } = req.query;
  // //   console.log(age, name);

  //   if(age) {
  //     dbUsers = dbUsers.filter(user => user.age === Number(age));
  //   }

  //   if(name) {
  //     dbUsers = dbUsers.filter(user => user.name === name);
  //   }

  const users = await usersMethods.findMany({age, name});

  res.status(200).json(users);
});

app.get("/user/:id", (req, res) => {
  const userId = req.params.id ? Number(req.params.id) : null;
  if (isNaN(userId)) {
    res.status(400).send("Invalid user ID");
  }

  const dbUsers = require("./user");

  const user = dbUsers.find((user) => user.id === userId);

  if (!user) {
    res.status(404).send("User not found");
  }

  res.status(200).json(user);
});

app.delete("/user/:id", async (req, res) => {
    let id = req.params.id ? Number(req.params.id) : null;

    if(isNaN(id)) {
        res.status(400).send('Invalid user ID');
    }

    const deletedUser = await usersMethods.deleteOne(id);

    res.status(200).json(deletedUser);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
