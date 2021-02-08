const express = require("express");
//massive is a package similar to express. we install it by typing npm i massive in the terminal. 
const massive = require("massive")
//require dotenv so that we can access env file through process
const controller = require('./controller')
require('dotenv').config()
const app = express();
//our env files are assigned to this variable process along with other files. Keeps our server port safe
//we're destructuring server port off of env
// add connection string into destructuring so we can use our api key to access our api
const { SERVER_PORT, CONNECTION_STRING } = process.env;

app.use(express.json());


massive({
  //this is connecting us to our database massive takes in an object as it's paramater. it's parameters
  //are connectionString and rejectUnauthorized.
  connectionString: CONNECTION_STRING,
  //sets connectionString to the variable above that we set for our database. 
  ssl: {
    rejectUnauthorized: false
  }  
  //this is the same as what we put into sql tab so that it specifies security prefrences.
})
.then((db)=>{
  app.set('db', db);
  console.log('db connected')
})
//then is a function that takes a callback and uses app.set which is a massive function that sets db to a snap shot of the db
//we do this every time we connect to massive this is what connects the database.
.catch((err) => console.log(err)
//.catch for error handling
);

///////////// End of Massive///////

//ENDPOINTS WOULD GO HERE

//endpoint to get all planes
app.get('/api/planes', controller.getPlanes)

//endpoint to add a plane
app.post('/api/planes', controller.addPlane)

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}`);
});



