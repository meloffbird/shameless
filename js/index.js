
$(document).ready(function() {

	/**
	* LazyLine Painter
	*/

	var $demo = $('#sketch');

	var state = 'paint';
	var options = {
		'svgData' : svgData,
		'strokeWidth':2,
		'strokeColor': '#fff',
		'ease': 'easeInOutQuad',
		'delay': 10,
		'speedMultiplier': 1,
		'onComplete' : function(){
			$('#next').show();
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


	 $("#guess-input").on("keydown", function (e) {
		return e.which !== 32;
	});

	// check answer and hide boxes
	function guessAnswer() {
	  $("button.guess-submit").click(function(event) {

	  	var guess = $('#guess-input').val();
	  	guess = guess.toLowerCase();

	  	if ( guess == answer) {
	      $('#correct').show();
	      $('#wrong').hide();

			$demo.lazylinepainter('destroy'); 	// destory lazyline

			options.speedMultiplier = 1;
			options.delay = 0;
			options.ease = 'easeInOutQuad';

			$demo.lazylinepainter(options); // restart lazyline
			$demo.lazylinepainter('paint');

			$('button.guess-submit').hide();
			$('#next').show();

		} else {
			$('#wrong').show().fadeOut(1000);
			$('#guess-input').val(hint);
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

































