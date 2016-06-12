
$(document).ready(function(){
	
	var count = 0;
	var toguess = random(1,101);
	var lastguess = 0;
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	

  	$('form').submit(function() {
  		count++;
  		$('#count').text(count);
  		var userguess = $('#userGuess').val();
  		if (userguess > 100 || userguess < 1) {
  			$('#feedback').text('It\'s between 1 and 100');
  		}
  		else if (userguess == toguess) {
  			$('#feedback').text('Good Job!  Play again!');
        $('#guessList').append('<li class="onthedot">' + userguess + '</li>');
  		}
  		else if (userguess < toguess && lastguess !=0 && userguess > lastguess) {
  			$('#feedback').text('Getting warmer!  Keep going higher!');
        $('#guessList').append('<li class="lower">' + userguess + '</li>');
  		}
  		else if (userguess < toguess && lastguess !=0 && userguess < lastguess) {
  			$('#feedback').text('Too low!  Go higher!');
        $('#guessList').append('<li class="lower">' + userguess + '</li>');
  		}
  		else if (userguess > toguess && lastguess !=0 && userguess > lastguess) {
  			$('#feedback').text('Too high!  Go lower!');
        $('#guessList').append('<li class="higher">' + userguess + '</li>');
  		}
  		else if (userguess > toguess && lastguess !=0 && userguess < lastguess) {
  			$('#feedback').text('Getting warmer!  Keep going lower!');
         $('#guessList').append('<li class="higher">' + userguess + '</li>');
  		}
  		else if (userguess < toguess) {
  			$('#feedback').text('Higher!');
        $('#guessList').append('<li class="lower">' + userguess + '</li>');
  		}
  		else if (userguess > toguess) {
  			$('#feedback').text('Lower!');
         $('#guessList').append('<li class="higher">' + userguess + '</li>');
  		}
  		lastguess = userguess;
  		return false;
  	});

  	$(".new").click(function() {
  		count = 0;
  		toguess = newGame(toguess);
  	});

});

function newGame(toGuess) {
	count = 0;
	$('#count').text(count);
	$('#guessList').empty();
	$('#feedback').text('Make your Guess!');
	$('#userGuess').val('');
	toGuess = random(1,101);
	return toGuess;
}

function random(min, max) {
	var toguess = Math.floor(Math.random() * (max - min) + min);
	return toguess;
}


