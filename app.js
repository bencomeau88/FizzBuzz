$(document).ready(function(){
	
	$('.button').on("click", function(e) {
            e.preventDefault();

		var end= $(".input").val();

	for (var i=1; i<=end; i++){
		
	// if(i % 3===0) {
		// if(i % 5===0){
			// $('#fizzBuzz').append("<li> fizzbuzz </li>");
	// 
	// }

	if (i % 3===0 && i % 5===0){
		$('#fizzBuzz').append("<li> fizzbuzz </li>");
	}
			else if (i % 3===0) {
				$('#fizzBuzz').append("<li> fizz </li>");
	}
			else if(i % 5===0){
				$('#fizzBuzz').append("<li> buzz </li>");
	}
	else{
		$('#fizzBuzz').append("<li>" + i + "</li>");
	}

	}	
	});

	
	});




