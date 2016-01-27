
$(document).ready(function() {

	/**
	* LazyLine Painter
	*/

	var $demo = $('#sketch');

	var state = 'paint';
	var options = {
		'svgData' : svgData,
		'strokeWidth':2,
		'strokeColor': '#b5287b',
		'ease': 'easeInOutQuad',
		'delay': 5,
		'speedMultiplier': 5
		}

	$demo.lazylinepainter(options);
	$demo.lazylinepainter('paint');

    /**
	* Guess Check
	*/

	var answer = document.getElementById('guess-input').name;

	// check answer and hide boxes
	function guessAnswer() {
	  $("button.guess-submit").click(function(event) {

	  	var guess = $('#guess-input').val();
	  	guess = guess.toLowerCase();

	  	if ( guess == answer) {
	      $('#correct').show();
	      $('#wrong').hide();

			$demo.lazylinepainter('destroy');

			options.speedMultiplier = 1;
			options.delay = 0;
			options.ease = 'easeInOutQuad';


			$demo.lazylinepainter(options);
			$demo.lazylinepainter('paint');

		} else {
			 $('#wrong').show().fadeOut(1000);
			$('#guess-input').val('');
	    }

	  });

	}

	//submit on enter
	function enterSubmit() {
	   $("#guess-input").keyup(function(event){
	      if(event.keyCode == 13){
	          $("#guess-submit").click();
	      }
	   });

	  guessAnswer();
	}

	enterSubmit();



});





























