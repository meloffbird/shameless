
$(document).ready(function() {

	/**
	* LazyLine Painter
	*/


	var $demo = $('#sketch'); //make sure this is same as ID

	var state = 'paint';
	var options = {
		'svgData' : svgData,
		'strokeWidth':2,
		'strokeColor': '#fff',
		'ease': 'easeInOutQuad',
		'delay': 10,
		'speedMultiplier': .5,
		'onComplete' : function(){
			$('button.guess-submit').hide();
			$('#answer').show();
			$('#next').show();
			$('#guess-input').val(answer); // show answer in input
		}
	}

		//only fire dialog box on the homepage
		if ($('body.home').length > 0) {
			$('a.btn-ok, #dialog-overlay, #dialog-box').click(function () {
				$demo.lazylinepainter(options);
				$demo.lazylinepainter('paint');
			});
		} else {
			$demo.lazylinepainter(options);
			$demo.lazylinepainter('paint');
		}

    /**
	* Guess Check
	*/
	var answer = document.getElementById('guess-input').name;
	var hint = document.getElementById('guess-input').value;
	var count = 0;
	var countButton = document.getElementById("guess-submit");


	//display answer
	function correctShit() {
		$('#correct').show().fadeOut(3000);
		$('#wrong').hide();

		// destory lazyline
		$demo.lazylinepainter('destroy');

		options.speedMultiplier = 1;
		options.delay = 0;
		options.ease = 'easeInOutQuad';

		// restart lazyline
		$demo.lazylinepainter(options);
		$demo.lazylinepainter('paint');

		// hide submit, and reveal answer
		$('button.guess-submit').hide();
		$('p.enter').hide();
		$('#answer').show();
		$('#next').show();
		$('#guess-input').val(answer);

	}

	// count number of attempts
	countButton.onclick = function(){
	  count++;

	  if (count == 5) {
	  		$('button.guess-submit').hide();
			$('#answer').show();
			$('#next').show();
			$('#guess-input').val(answer); // show answer in input
	  }

	}


	// so that no one tries to put in spaces
	 $("#guess-input").on("keydown", function (e) {
		return e.which !== 32;
	});


	// check answer and hide boxes
	function guessAnswer() {
	  $("button.guess-submit").click(function(event) {

	  	var guess = $('#guess-input').val();
	  	guess = guess.toLowerCase();

	  	if ( guess == answer) {

	  		correctShit();

		} else {
			$('#wrong').show().fadeOut(1000);
			$('#guess-input').val(hint); //reset input value with first letter
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

































