
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

	function onClick() {

		$demo.lazylinepainter('destroy');

		options.speedMultiplier = 1;
		options.delay = 0;
		options.ease = 'easeInOutQuad';


		$demo.lazylinepainter(options);
		$demo.lazylinepainter('paint');

	 }

	 $(window).on('click', onClick);



    /**
	* Guess Check
	*/

	var answer = document.getElementById('guess-input').name;

	// check answer and hide boxes
	function guessAnswer() {
	  $("button.guess-submit").click(function(event) {

	    if ( $('#guess-input').val() == answer) {
	      $('#correct').show();
	      $('#wrong').hide();
	    } else {
	      $('#wrong').show();
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





























