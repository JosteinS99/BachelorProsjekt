$(document).ready(function() {
  
function dataFunction () {
   var cat = $("#select").val();
   var not = $("#note").val();
}
 
 $("#upload").click(function(event){
  console.log("I was clicked");
  });

  $("#send").click(function(event){
dataFunction();
  
     var m = not;

    console.log(m);
  });

$(document).on('click', '#save', function(e) {
   var randomId = Math.random().toString(32).slice(2);

   var test =("<tr class='rowbox' id='id"+randomId+"'><th class='textbox'><input id='"+randomId+"' type='date' class='input' disabled></th><th class='buttons'><span class='material-icons succesfulUpload'>check_circle</span><span name='"+randomId+"' class='material-icons delete' id='delete'>delete</span></th></tr>");
    $( "#box" ).append(test);

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
  document.getElementById(randomId).value =today;
   

 //  $( "#box" ).append( "<tr class='rowbox' id='id"+randomId+"'><button id='addDiv'>Add div Inside #box ("+randomId+")</button>   #  some cool stuff #  <button href='#' id='delete' name='"+randomId+"'>remove ("+randomId+")</button></tr>");
});

$(document).on('click', '#delete', function(e) {
   var thisRowbox = "#id" + this.attributes["name"].value;
   console.log("removing: " + thisRowbox);
  $(thisRowbox).fadeOut(500, function () {
    $(this).remove();
  });

});


}); //end of jquery

