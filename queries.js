//Connecting to a Postgres database from Node.js
const Pool = require("pg").Pool;
require("dotenv").config();

const username = process.env.DB_USER;
const password = process.env.DB_PASS;
const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const database = process.env.DB;

// const pool = new Pool({
//   user: "postgres",
//   host: "localhost",
//   database: "gis",
//   password: "postgres",
//   port: 5432,
// });

const pool = new Pool({
  user: username,
  host: host,
  database: database,
  password: password,
  port: port,
});

// GET PROPERTY BY ID
const propertyid = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query(
    "SELECT smdata FROM property WHERE id = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

// GET LOCALITY
const locality = (request, response) => {
  pool.query(
    "SELECT * FROM catchment_locality WHERE loclty_cd IN ('IND00709400000100039')",
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

// GET LOCALITY BY ID
const localityid = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query(
    "SELECT sm_data FROM catchment_locality WHERE id = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

// GET CATCHMENT
const catchment = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query(
    "SELECT * FROM catchment WHERE catch_cd = 'MALSMCATCH1000001' ",
    // "SELECT * FROM catchment WHERE id = $1",
    // [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

// GET CATCHMENT BY ID
const catchmentid = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query(
    "SELECT sm_data FROM catchment WHERE id = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

// GET all users
const getUsers = (request, response) => {
  pool.query(
    "SELECT * FROM raw_data.users ORDER BY id ASC",
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

// GET a single user by ID
const getUserById = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query(
    "SELECT * FROM raw_data.users WHERE id = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

// POST a new user
const createUser = (request, response) => {
  const { name, email } = request.body;

  pool.query(
    "INSERT INTO raw_data.users (name, email) VALUES ($1, $2) RETURNING *",
    [name, email],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`User added with ID: ${results.rows[0].id}`);
    }
  );
};

//PUT updated data in an existing user
const updateUser = (request, response) => {
  const id = parseInt(request.params.id);
  const { name, email } = request.body;

  pool.query(
    "UPDATE raw_data.users SET name = $1, email = $2 WHERE id = $3",
    [name, email, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`User modified with ID: ${id}`);
    }
  );
};

//DELETE a user
const deleteUser = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query(
    "DELETE FROM raw_data.users WHERE id = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`User deleted with ID: ${id}`);
    }
  );
};

//Exporting CRUD functions in a REST API
module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  catchment,
  catchmentid,
  locality,
  localityid,
  propertyid,
};
