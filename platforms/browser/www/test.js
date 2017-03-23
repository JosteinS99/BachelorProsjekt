var express = require("express");
var app = express();
var mysql = require("mysql");

// First you need to create a connection to the db






// con.end(function(err) {
  // The connection is terminated gracefully
  // Ensures all previously enqueued queries are still
  // before sending a COM_QUIT packet to the MySQL server.
// });





function fooRoute(req, res, next) {
  res.end("Foo Route\n");
}

function fooRouteWildCard(req, res, next) {
  res.end("Foo Route  (wildcard)");
}
function postinfo(req, res, next) {
  res.end("Post info kommer her.");
}


function sqldummy(req, res, next) {
   res.end('{sqldata: "DUMMYDATA"}');

}

function sqlsporring(id) {
// koble til database
var con = mysql.createConnection({
  host: "localhost",
  user: "cola",
  password: "cola",
  database: "mydb"
});

// spørring
var dataFraSQL = con.query('INSERT INTO Users (Bruker_navn) VALUES ("Ben");');
// returner data
return dataFraSQL;

}


// POST ruter:

app.post("/postinfo/:data", postinfo);

app.post('')

// GET ruter:
app.get('/finnBruker/:id', function (req, res) {

  var con = mysql.createConnection({
  host: "localhost",
  user: "cola",
  password: "cola",
  database: "mydb"
});

// spørring
// var dataFraSQL = con.query('INSERT INTO Users (Bruker_navn) VALUES ("Ben");');
// returner data
// return dataFraSQL;

   var brukerID = req.params.id;


   var denneSporringen = "SELECT * FROM Users WHERE Bruker_id =" + brukerID + ";";

   //var denneSporringen = "SELECT * FROM Users;";

   con.query(denneSporringen, function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0]);
  
  //for (i = 0; i < results.length; i++) { 
 //   console.log(results[i]);
//}
 res.send(results[0].Bruker_navn); 
});

 
  


  

});

app.get("/wild*", fooRouteWildCard);

app.get("/foo", fooRoute);

app.get("/sql", sqlsporring);





app.get('/telefon/:nr', function (req, res) {


 var tlfNummer = req.params.nr;


    res.send({ tlfnr: tlfNummer } );

});

console.log('det funka');

app.listen(3000);