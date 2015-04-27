function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

var names = [];
var groups = 0;
var counter = 0;

$(document).ready(function() {
	$('#numb').on('click', function(event){
		event.preventDefault();
		// $(this).removeClass();
		// $(this).addClass('.selected');
		groups = $(this).data('teamsize');
		return false;
	});
	$('#submit').on('click', function(){
		names = $('#text').val();
		$('.groupContainer').empty();
		for (var i = 0; i < groups.length; i++) {
			$('.groupContainer').append('<div class="list" id="grouper' + (i+1) + '">Group' + (i+1) + '</div>');
		}
		for (var i = 0; i < names.length; i++) {

		}
		return false;
	});


//Have to add in numbers and do math
//Have to display output somehow
});


//Haven't done the checkboxes