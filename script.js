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
var i = 0;

$(document).ready(function() {
	$('.numb').on('click', function(){
		// $(this).removeClass();
		// $(this).addClass('.selected');
		groups = $(this).data('teamsize');
		console.log("Groups:" + groups);
		return false;
	});
	$('#submit').on('click', function(){
		names = $('#text').val();
		$('.groupContainer').empty();
		console.log(groups);
		for (i = 0; i < groups; i++) {
			console.log("here " + i);
			$('.groupContainer').append('<div class="list" id="grouper' + (i+1) + '">Group' + (i+1) + '</div>');
		}
		for (i = 0; i < names.length; i++) {
			var el = '<p>' + names[i] + '</p>';
	//Something is massively broken here! It's displaying 1 letter at a time from random names in the list...
			console.log(" Names from dom "+names[i]);
			$('#grouper' + counter).append(el);
			el = $('#grouper' + counter).children().last();
			counter++;
			if (counter > groups) {
				counter = 1;
			}
		}
		console.log(names);
		console.log('.groupContainer');
		return false;
	});


//Have to add in numbers and do math
//Have to display output somehow
});


//Haven't done the checkboxes