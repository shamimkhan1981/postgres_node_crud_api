// Fetch data and store in global variable
let url = "/catchmentid/1";
let jsondata;
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    jsondata = json;
  });

// Fetch data and store in global variable
let url_loc = "/localityid/1";
let locdata;
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    jsondata = json;
  });
