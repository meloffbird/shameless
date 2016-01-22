/* Adapted from Jake Archibald's "Animated Line Drawing in SVG"
 * http://jakearchibald.com/2013/animated-line-drawing-svg/
 */

var path = document.querySelector('.owl path');
var length = path.getTotalLength();

// Set up the starting positions
path.style.strokeDasharray = length + ' ' + length;
path.style.strokeDashoffset = length;

// Trigger a layout so styles are calculated & the browser
// picks up the starting position before animating
path.getBoundingClientRect();
// Define our transition
path.style.transition = path.style.WebkitTransition =
    'stroke-dashoffset 11s ease-in-out';
// Go!
path.style.strokeDashoffset = '0';






/* Check answer to questions */

  // DEFAULT SETTINGS
  $('#wrong').hide();
  $('#correct').hide();

  // SELECT INPUT BOX + CLEAR AFTER WRONG ANSWER
  $('input.superhero').focus(function () {
      $('#wrong').hide();
      $('#correct').hide();
      $("button.checkanswer").show();
  });

  // CHECK ANSWER
  $("button.checkanswer").click(function () {

      var superhero = $('input.superhero').val();

  //IF CORRECT ANSWER
     if ($('input.superhero').val() == 'Owl') {
          $('#correct').show();

  //IF WRONG ANSWER
      } else {
          $("button.checkanswer").hide();
          $('#wrong').show();
          $("button.checkanswer").show();
      }

  });


