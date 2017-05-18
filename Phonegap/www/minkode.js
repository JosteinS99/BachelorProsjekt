$(document).ready(function() {
  
var m;
// var scanData = " "; kanskje skrive scanmetoden her? eks. scan();

 $("#upload").click(function(event){
  console.log("I was clicked");
  });

// $(".container").scroll(function() {
// console.log('scrolling');
//     if ($(this).scrollTop()>0)
//      {
//         $('.scanButton').fadeOut();
//      }
//     else
//      {
//       $('.scanButton').fadeIn();
//      }
//  });



  $("#send").click(function(event){
    var category = $("#category").val();
    var notes = $("#note").val();
    var tool = $("#tool").val();
     m = notes + category + tool;

    console.log(m);
  });

var currentCode = "";
function getScanCode(data) {

  currentCode = data.toString();

}

$(document).on('click', '#save', function(e) {

    var n = new Date();
       var year = n.getFullYear();
       var month = n.getMonth() + 1;
       var day = n.getDate();
       
    if(month < 10) {
    month = "0" + month;
  } 
  if (day < 10) {
    day = "0" + day;
  }
  var today = year + "-" + month + "-" + day;

 //  $("#" + randomId).val(today);

   var category = $("#category").val();

   var randomId = Math.random().toString(32).slice(2);
   var tool = $("#tool").val();
   var category = $("#category").val();
   var qrfield = $('#qr').val(); 
   // var qr = $("#qrfield").val();
   var test = ("<tr class='rowbox' id='id"+randomId+"'><th id='toolbox'><input id='toolfield' type='text' class='input' name='tool' value='"+tool+"'><input id='categoryfield' type='text' class='input' name='category' value='"+category+"' placeholder='Strong tool'><input id='datefield' type='text' class='input' name='date' value='"+today+"'><input id='qrfield' type='text' class='input' name='qr' value='"+qrfield+"'></th><th class='buttons'><span name='"+randomId+"' class='material-icons delete' id='delete'>delete</span></th></tr>");

    $( "#box" ).append(test);

// ("<tr class='rowbox' id='id"+randomId+"'><th class='toolbox'><input id='"+randomId+"' type='text' class='input' disabled><input id='toolfield' type='text' class='input' name='tool' placeholder='Hammer'><input id='categoryfield' type='text' class='input' name='category' placeholder='Strong tool'><input id='datefield' type='text' class='input' name='date' placeholder='02/08/1985'><input id='qrfield' type='text' class='input' name='qr' placeholder='D554fx5D'></th><th class='buttons'><span class='material-icons succesfulUpload'>check_circle</span><span name='"+randomId+"' class='material-icons delete' id='delete'>delete</span></th></tr>");

  

// <input id='toolfield' type='text' class='input' name='tool' placeholder='Hammer'>
// <input id='categoryfield' type='text' class='input' name='category' placeholder='Strong tool'>
// <input id='datefield' type='text' class='input' name='date' placeholder='02/08/1985'>
// <input id='qrfield' type='text' class='input' name='qr' placeholder='D554fx5D'>



 //  $( "#box" ).append( "<tr class='rowbox' id='id"+randomId+"'><button id='addDiv'>Add div Inside #box ("+randomId+")</button>   #  some cool stuff #  <button href='#' id='delete' name='"+randomId+"'>remove ("+randomId+")</button></tr>");
});

$(document).on('click', '#delete', function(e) {
   var thisRowbox = "#id" + this.attributes["name"].value;
   console.log("removing: " + thisRowbox);
  $(thisRowbox).fadeOut(500, function () {
    $(this).remove();
  });

});

$(".scanButton").click(function(event){
  console.log("I was clicked");

function scan(){

     cordova.plugins.barcodeScanner.scan(
        function (result) {
         $('#scanField').val(result.text);
         $('#qr').val(result.text); 
         // scanData = result.text; 
           console.log("We got a barcode\n" +
                  "Result: " + result.text + "\n" +
                  "Format: " + result.format + "\n" +
                  "Cancelled: " + result.cancelled); 
           /* alert("We got a barcode\n" +
                  "Result: " + result.text + "\n" +
                  "Format: " + result.format + "\n" +
                  "Cancelled: " + result.cancelled); */
        },
        function (error) {
            alert("Scanning failed: " + error);
        },
        {
            preferFrontCamera : false, // iOS and Android
            showFlipCameraButton : true, // iOS and Android
            showTorchButton : true, // iOS and Android
            torchOn: true, // Android, launch with the torch switched on (if available)
            prompt : "Place a barcode inside the scan area", // Android
            resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
            formats : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
            orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
            disableAnimations : true, // iOS
            disableSuccessBeep: false // iOS
        }
     );
//myApp.popup('.popup-send');

 }
});
}); //end of jquery

