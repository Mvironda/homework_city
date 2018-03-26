$(document).ready(function() {

	// 1 Prevent the page from jumping when any a tag is clicked - use event.preventDefault()
	$('#submit-btn').click(function(event) {
		event.preventDefault();

	// 2 Store the user input var city
	var city = $('#city-type').val().toLowerCase().trim();

	// 3 Create if statements that would display the correct background photo
	if (city === "san Francisco" || city === "sf" || city === "bay area") {	// Create if statement that would display sf.jpg	
		$('body').attr('class', 'sf');
	} else if (city === "new york" || city === "new york city" || city === "nyc") { // Create if statement that would display nyc.jpg
		$('body').attr('class', 'nyc');
	} else if (city === "los angeles" || city === "la" || city === "lax") {	// Create if statement that would display nyc.jpg
		$('body').attr('class', 'la');
	} else if (city === "austin" || city === "atx") {	// Create if statement that would display austin.jpg
		$('body').attr('class', 'austin');
	} else if (city === "sydney" || city === "syd") {	// Create if statement that would display sydney.jpg
		$('body').attr('class', 'sydney');
	} else {
		$('body').attr('class', 'citipix');
	}

	// 4 Reset the user input field after it is submitted
	$('#city-type').val('');
	});

});