
             /*function callAnothePage()
             {
                window.location = "secondPage.html";
             }

              */
             function BackKeyDown()
             {
                window.location = "index.html";

                // navigator.notification.alert();
                 //navigator.app.exitApp();  // For Exit Application
             }


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