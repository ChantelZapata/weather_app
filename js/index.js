


function convert() {
 	 var userEntry = $('.js-val').val();
 	 console.log(userEntry);
 	 var result = userEntry * (9/5) + 32;
 	 console.log(result);
 	 
 	 if(result < 10) {
 	 	$('body').css('background-color',"white");
 	 } else if( result >= 10 && result < 30){
 	 	$('body').css('background-color',"lightblue");
 	 }
}

$('.js-click').on('click', convert);



// fist you want to ge the valie of the input
// after that you want to pass the value into the converions

// if .. else


