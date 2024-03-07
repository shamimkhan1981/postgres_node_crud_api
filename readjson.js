const fs = require("fs");
const jsonString = fs.readFileSync(
  "D:\\Sociometrik\\DLF_POC\\dlf_property_format.json"
);
const property = JSON.parse(jsonString);

let keys = Object.keys(property); //Get keys from javascript object

console.log(keys);

// Object.keys(property);
// Object.values(property);
// Object.entries(property);
