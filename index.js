const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const db = require("./queries");
const port = 5000;

// USE CORS TO PASS URL WHICH IS GET API ACCESS WITHOUT CORS ERROR
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/api", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

// Now, for each endpoint, we’ll set the HTTP request method, the endpoint URL path, and the relevant function:
app.get("/api/propertyid/:id", db.propertyid); //17, 18, 19, 20 id's
app.get("/api/localityid/:id", db.localityid);
app.get("/api/locality", db.locality);
app.get("/api/catchment", db.catchment);
app.get("/api/catchmentid/:id", db.catchmentid);
app.get("/api/users", db.getUsers);
app.get("/api/users/:id", db.getUserById);
app.post("/api/users", db.createUser);
app.put("/api/users/:id", db.updateUser);
app.delete("/api/users/:id", db.deleteUser);

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}.`);
});
