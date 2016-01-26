
$(document).ready(function() {

    /**
	* Guess Check
	*/

	// hide messages
	$('#wrong').hide();
	$('#correct').hide();


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

	/**
	* LazyLine Painter
	*/

	var $logo = $('#sketch');

	      $logo.lazylinepainter({
	          'svgData': svgData,
	          'strokeWidth': 1,
	          'speedMultiplier': 3,
	          'strokeColor': '#b5287b',
	              'drawSequential': true,
	              'ease': 'easeInOutQuad'
	      });

          setTimeout(function(){
              $logo.lazylinepainter('paint');
          }, 10)



});

















