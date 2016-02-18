

function convert() {
 	 var userEntry = $('.js-val').val();
 	 console.log(userEntry);
 	 var result = userEntry * (9/5) + 32;
 	 console.log(result);
 	 
 	 if(result < 10) {
 	 	$('body').css('background-color',"white");
 	 } else if(result >= 10 && result < 30){
 	 	$('body').css('background-color',"lightblue");
 	 } else if(result >= 30 && result < 60){
 	 	$('body').css('background-color',"blue");
 	 } else if(result >= 60 && result < 85){
 	 	$('body').css('background-color',"green");
 	 } else if(result > 85){
 	 	$('body').css('background-color',"red");
 	 }

 	 $('#blankspace').hide();
 	 $('#output').show().before(result);

};

$('.js-click').on('click', convert);



// fist you want to ge the valie of the input
// after that you want to pass the value into the converions

// if .. else


