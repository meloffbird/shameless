$(document).ready(function() {

	// hide messages
	$('#wrong').hide();
	$('#correct').hide();


	var answer = document.getElementById('guess-input').name;


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

	function enterSubmit() {
	   $("#guess-input").keyup(function(event){
	      if(event.keyCode == 13){
	          $("#guess-submit").click();
	      }
	   });

	  guessAnswer();
	}

	enterSubmit();


// /* Adapted from Jake Archibald's "Animated Line Drawing in SVG"
// * http://jakearchibald.com/2013/animated-line-drawing-svg/
// */


	var path = document.querySelector('.content path');
	var length = path.getTotalLength();

	// Set up the starting positions
	path.style.strokeDasharray = length + ' ' + length;
	path.style.strokeDashoffset = length;

	// Trigger a layout so styles are calculated & the browser
	// picks up the starting position before animating
	path.getBoundingClientRect();
	// Define our transition
	path.style.transition = path.style.WebkitTransition =
	    'stroke-dashoffset 20s ease-in-out';
	// Go!
	path.style.strokeDashoffset = '0';



});

















