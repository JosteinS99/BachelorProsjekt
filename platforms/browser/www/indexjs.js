
 function onLoad()
             {
                  document.addEventListener("deviceready", onDeviceReady, true);
             }

             function onDeviceReady()
             {
                  // navigator.notification.alert("PhoneGap is working");
             }

             function callAnothePage()
             {
                window.location = "secondPage.html";
             }

document.addEventListener("deviceready", onDeviceReady, true);

             function onDeviceReady()
             {     
                   document.addEventListener("backbutton", BackKeyDown, true);
             }

             function BackKeyDown()
             {
                window.location = "index.html";

                // navigator.notification.alert();
                 //navigator.app.exitApp();  // For Exit Application
             }



button.onclick = function(){cordova.plugins.barcodeScanner}
cordova.plugins.barcodeScanner.scan(
      function (result) {
          alert("We got a barcode\n" +
                "Result: " + result.text + "\n" +
                "Format: " + result.format + "\n" +
                "Cancelled: " + result.cancelled);
      },
      function (error) {
          alert("Scanning failed: " + error);
      },
      {
          preferFrontCamera : true, // iOS and Android 
          showFlipCameraButton : true, // iOS and Android 
          showTorchButton : true, // iOS and Android 
          torchOn: true, // Android, launch with the torch switched on (if available) 
          prompt : "Place a barcode inside the scan area", // Android 
          resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500 
          formats : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED 
          orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device 
          disableAnimations : true // iOS 
      }
   );

cordova.plugins.barcodeScanner.encode(cordova.plugins.barcodeScanner.Encode.TEXT_TYPE, "http://www.nytimes.com", function(success) {
            alert("encode success: " + success);
          }, function(fail) {
            alert("encoding failed: " + fail);
          }
        );

function setDate() {
  var date = new Date();
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();
 


  if(month < 10) {
    month = "0" + month;
  } 
  if (day < 10) {
    day = "0" + day;
  }
  var today = year + "-" + month + "-" + day;
  document.getElementById('myDate').value =today;
}

function succesMsg() {
  alert('You successfully transfered the data to NOV');
  BackKeyDown();

}



