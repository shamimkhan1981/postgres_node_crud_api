# postgres_node_crud_api <br>

<br>
# INITIAL SETUP <br>
$ mkdir postgres_node_api <br>
$ cd postgres_node_api <br>
$ npm i express <br>
<br>

## TO RUN API APP (EDIT package.json ADD "start": "node index.js" THIS LINE to use npm start) <br>

### $ npm start <br>

## RUN APP WITH NODEMON TO AUTOMATIC RESTART WHILE EDIT CODE <br>

Nodemon is an open-source utility package that keeps track of the changes made to your source code and restarts your project server automatically when new modifications are made. <br>

### $ npm install -g nodemon --INSTALL NODEMON GLOBALLY <br>

### $ npm install --save-dev nodemon --INSTALL NODEMON PROJECT SPECIFIC <br>

### $ nodemon app.js OR <br>

### $ npx nodemon app.js <br>

##TUTORIAL SOURCE <br>
https://www.enterprisedb.com/postgres-tutorials/how-quickly-build-api-using-nodejs-postgresql <br>
https://blog.logrocket.com/crud-rest-api-node-js-express-postgresql/#what-restful-api <br>

## We’ll create six functions for six routes, as shown below. First, create all the functions for each route. Then, export the functions so they’re accessible: <br>

GET: / | displayHome() <br>
GET: /users | getUsers() <br>
GET: /users/:id | getUserById() <br>
POST: /users | createUser() <br>
PUT: /users/:id | updateUser() <br>
DELETE: /users/:id | deleteUser() <br>

## CREATE TABLE IN POSTGRES DB <br>

<html>
<body>
<p>
CREATE TABLE raw_data.users (ID SERIAL PRIMARY KEY, name VARCHAR(30), email VARCHAR(30));
INSERT INTO raw_data.users (name, email)
VALUES ('Jerry', 'jerry@example.com'), ('George', 'george@example.com');
  <br>
  <br>
CREATE TABLE users (ID SERIAL PRIMARY KEY, name VARCHAR(30), email VARCHAR(30));
INSERT INTO users (name, email)
  VALUES ('Jerry', 'jerry@example.com'), ('George', 'george@example.com');
  </p>
</body>
</html>

#### POST REQUEST TO CREATE USER PASS JESON VARIABLE USE IN THUNDERCIENT OR POSTMAN: <br>

http://localhost:5000/users/

{
"name": "Shamim",
"email": "shamim@abc.com"
}

#### PUT REQUEST TO UPDATE EXISTING USER WITH ID (3) DETAIL SEND IN JESON VARIABLE USE IN THUNDERCIENT OR POSTMAN: <br>

http://localhost:5000/users/3

{
"name": "Sadik",
"email": "shamim@abc.com"
}

#### DELETE REQUEST - DELETE USER WITH ID (3) DETAIL SEND IN JESON VARIABLE USE IN THUNDERCIENT OR POSTMAN: <br>

http://localhost:5000/users/3

{
"name": "Sadik",
"email": "shamim@abc.com"
}

#### GET LOCALITY DATA: <br>

http://localhost:5000/locality <br>

#### GET LOCALITY BY ID: <br>

http://localhost:5000/localityid/1 <br>

#### GET CATCHMENT DATA: <br>

http://localhost:5000/catchment <br>

#### GET CATCHMENT BY ID: <br>

http://localhost:5000/catchmentid/1 <br>
