$(document).ready(function() {
    // console.log("ready!");
    //   $('#succesfulUpload').hide();
 // $(".delete").click(function(event){
 // 	$("th, tr").fadeOut(500, function () {
 // 		$(this).remove();
 // 	});
 // 	event.stopPropagation();
 // });
  

//   <div id="box">
// </div>

// <button id="addDiv">Add div Inside #box</button>

$(document).on('click', '#addDiv', function(e) {
   var randomId = Math.random().toString(32).slice(2);

   var test =("<tr class='rowbox' id='id"+randomId+"'><th class='textbox'><input type='text' placeholder='MM/DD/YYYY' class='input'></th><th class='buttons'><span class='material-icons succesfulUpload'>check_circle</span><span name='"+randomId+"' class='material-icons delete' id='delete'>delete</span></th></tr>");
    $( "#box" ).append(test);
 //  $( "#box" ).append( "<tr class='rowbox' id='id"+randomId+"'><button id='addDiv'>Add div Inside #box ("+randomId+")</button>   #  some cool stuff #  <button href='#' id='delete' name='"+randomId+"'>remove ("+randomId+")</button></tr>");
});

$(document).on('click', '#delete', function(e) {
   var thisRowbox = "#id" + this.attributes["name"].value;
   console.log("removing: " + thisRowbox);
   $(thisRowbox).remove();
});





                 

  // DETTE SKAL BRUKES TIL SAVE KNAPPEN PÅ SEND SIDEN
// $("input[type='text']").keypress(function(event){
// 	console.log("Key Press!");
// 	if(event.which === 13){
// 		// console.log("You hit enter");
//   //henter ny notat fra textboxen"
// 		var noteText = $(this).val();
// 	// lag en ny tr og legg til lagringslista(table)
// 		}

//     var cloneCount = 1;
// 		var randomcount = 1;
// 		$(".rowbox").clone().appendTo("#box").attr('id', 'newID'+ cloneCount++).insertAfter("#id");
// 		$(".delete").attr('id', 'id'+ randomcount++).insertAfter("#del");
	 

//   });

}); //end of jquery

// css( "background-color", "blue")
// husk at input feltet er ready only, slett det for å teste db queries

  // var cloneCount = 1;
  //  $("button").click(function(){
  //     $("#id").clone().attr('id', 'id'+ cloneCount++).insertAfter("#id");
  //  }); 