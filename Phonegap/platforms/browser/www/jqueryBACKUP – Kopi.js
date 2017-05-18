$(document).ready(function() {
    // console.log("ready!");
    //   $('#succesfulUpload').hide();
 $(".delete").click(function(event){
 	$("th, tr").fadeOut(500, function () {
 		$(this).remove();
 	});
 	event.stopPropagation();
 });
  


  // DETTE SKAL BRUKES TIL SAVE KNAPPEN PÅ SEND SIDEN
$("input[type='text']").keypress(function(event){
	console.log("Key Press!");
	if(event.which === 13){
		// console.log("You hit enter");
  //henter ny notat fra textboxen"
		var noteText = $(this).val();
	// lag en ny tr og legg til lagringslista(table)
		}

    var cloneCount = 1;
		var randomcount = 1;
		$(".rowbox").clone().appendTo("#box").attr('id', 'id'+ cloneCount++).insertAfter("#id");
// 		$(".delete").attr('id', 'id'+ randomcount++).insertAfter("#del");
	 
// jQuery(element).clone().attr('id',new_id).appendTo(parent_element);

  });

}); //end of jquery

// css( "background-color", "blue")
// husk at input feltet er ready only, slett det for å teste db queries

  // var cloneCount = 1;
  //  $("button").click(function(){
  //     $("#id").clone().attr('id', 'id'+ cloneCount++).insertAfter("#id");
  //  }); 