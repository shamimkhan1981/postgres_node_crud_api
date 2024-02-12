const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const db = require("./queries");
const port = 5000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

// Now, for each endpoint, we’ll set the HTTP request method, the endpoint URL path, and the relevant function:
app.get("/propertyid/:id", db.propertyid); //17, 18, 19, 20 id's
app.get("/localityid/:id", db.localityid);
app.get("/locality", db.locality);
app.get("/catchment", db.catchment);
app.get("/catchmentid/:id", db.catchmentid);
app.get("/users", db.getUsers);
app.get("/users/:id", db.getUserById);
app.post("/users", db.createUser);
app.put("/users/:id", db.updateUser);
app.delete("/users/:id", db.deleteUser);

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}.`);
});
