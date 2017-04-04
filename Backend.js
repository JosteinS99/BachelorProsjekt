var express = require("express");
var app = express();
var mysql = require("mysql");


// First you need to create a connection to the db


var path = require('path');

//app.use(express.static(__dirname)); // Current directory is root
app.use(express.static(path.join(__dirname, 'www'))); //  "public" off of current is root


  var connection = mysql.createConnection({
  host: "localhost",
  user: "cola",
  password: "cola",
  database: "mydb"
});
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


// spørring
var dataFraSQL = con.query('INSERT INTO Users (Bruker_navn) VALUES ("Ben");');
// returner data
return dataFraSQL;

}


// POST ruter:

app.post("/postinfo/:data", postinfo);

app.post('/addNewLocation/:locID/:locationName', function (req, res) {



   var locationID = req.params.locID;
   var locationName = req.params.locationName;
   console.log('Location name = ' + locationName);
   console.log('Location ID = ' + locationID);

   // validering før spørring
   //var denneSporringen = "UPDATE Users SET scanData = " + scanData + " WHERE Bruker_id =" + brukerID + ";";

  // var denneSporringen = "UPDATE Users SET scanData = 'tyolo' WHERE Bruker_id = 2;";

  var denneSporringen = "UPDATE Location SET Sted_navn = '"+ locationName +"' WHERE Sted_id = "+locationID+";";

  connection.query(denneSporringen, function (error, results, fields) {
  if (error) {
  console.log('Couldn\'t update location name on input ID');
  res.send('Couldn\'t update location name on input ID');
  throw error;
  } else {
    console.log(locationName+ ': has been added to location ID: ' +locationID);
    res.send(locationName+ ': has been added to location ID: ' +locationID);
  }
  });


  });

app.post('/InputDataen/:barcodeScan/:Kategori/:verktoy/:Sted/:datoTid/:optionalTekst', function (req, res) {

  

// spørring
// var dataFraSQL = con.query('INSERT INTO Users (Bruker_navn) VALUES ("Ben");');
// returner data
// return dataFraSQL;
    var barcodeData = req.params.barcodeScan;
    var KategoriData = req.params.Kategori;
   var verktoyData = req.params.verktoy;
   var stedData = req.params.Sted;
   var datoTidData = req.params.datoTid;
   var optionalTekstData = req.params.optionalTekst;
   console.log('barcode = ' + barcodeData);
   console.log('Kategori = ' + KategoriData);
   console.log('verktøy = ' + verktoyData);
   console.log('Sted = ' + stedData);
   console.log('dato og tid = ' + datoTidData);
    console.log('Frihåndstekst = ' + optionalTekstData);
   // validering før spørring
   //var denneSporringen = "UPDATE Users SET scanData = " + scanData + " WHERE Bruker_id =" + brukerID + ";";

  // var denneSporringen = "UPDATE Users SET scanData = 'tyolo' WHERE Bruker_id = 2;";

 // var denneSporringen = "UPDATE altdata SET Category_name = '"+ KategoriData +"', SET Tool_name = '"+verktoyData+"', SET Sted_navn = '"+stedData+"', SET Datotid = '"+datoTidData+"' WHERE Bruker_id = "+brukerID+";";
var denneSporringen = "INSERT INTO altdata (Data_id, Barcode_scan, Dato_tid, Sted_navn, Category_name, Tool_name, Optional_tekst) VALUES (NULL, '"+barcodeData+"', '"+datoTidData+"', '"+stedData+"', '"+KategoriData+"', '"+verktoyData+"', '"+optionalTekstData+"');";

  connection.query(denneSporringen, function (error, results, fields) {
  if (error) {
  console.log('INSERT funksjonen din kunne ikke legges til');
  res.send('INSERT funksjonen din kunne ikke legges til');
  throw error;
  } else {
    console.log("La inn: " +barcodeData+", " +datoTidData+", "+stedData+", "+KategoriData+", "+verktoyData+", "+optionalTekstData+". i tabbelen altdata");
    res.send("La inn: " +barcodeData+", " +datoTidData+", "+stedData+", "+KategoriData+", "+verktoyData+", "+optionalTekstData+". i tabbelen altdata");
  }
  });

}); 

/*app.post('/InputScanData/:id/:scanData', function (req, res) {

  

// spørring
// var dataFraSQL = con.query('INSERT INTO Users (Bruker_navn) VALUES ("Ben");');
// returner data
// return dataFraSQL;

   var brukerID = req.params.id;
   var scanData = req.params.scanData;
   console.log('scanData = ' + scanData);
   console.log('Bruker IDen = ' + brukerID);

   // validering før spørring
   //var denneSporringen = "UPDATE Users SET scanData = " + scanData + " WHERE Bruker_id =" + brukerID + ";";

  // var denneSporringen = "UPDATE Users SET scanData = 'tyolo' WHERE Bruker_id = 2;";

  var denneSporringen = "UPDATE Users SET scanData = '"+ scanData +"' WHERE Bruker_id = "+brukerID+";";

  connection.query(denneSporringen, function (error, results, fields) {
  if (error) {
  console.log('update user funka ikke');
  res.send('update user funka ikke');
  throw error;
  } else {
    console.log('La inn: ' +scanData+ ' i bruker ID: ' +brukerID);
    res.send('La inn: ' +scanData+ ' i bruker ID: ' +brukerID);
  }
  });

}); */ 

// GET ruter:
app.get('/finnBruker/:id', function (req, res) {

 
// spørring
// var dataFraSQL = con.query('INSERT INTO Users (Bruker_navn) VALUES ("Ben");');
// returner data
// return dataFraSQL;

   var brukerID = req.params.id;


   var denneSporringen = "SELECT * FROM Users WHERE Bruker_id =" + brukerID + ";";

   //var denneSporringen = "SELECT * FROM Users;";

   connection.query(denneSporringen, function (error, results, fields) {
  if (error) {
 
  }
  
  
  //throw error;
  console.log('The solution is: ', results[0]);
  
  //for (i = 0; i < results.length; i++) { 
 //   console.log(results[i]);
//} 
  if (results.length > 0) {
    res.send(results[0].Bruker_navn); 

  } else {
  console.log('udefinert ID');
  res.status(404).send('udefinert bruker ID: ' + brukerID);
  }
 
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

app.listen(9222);