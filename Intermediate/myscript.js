$("form").submit(function(e) {

	e.preventDefault();
	
	
	

});


// remove all form from the page
// $("form").remove(); 


// Crate 5 new DIV's
$("article").append("<div></div> <div></div> <div></div> <div></div> <div></div>");

// add class name of 'box' to each new DIV
$("article div").addClass('box');


// Within the input field change the value to "Search for..."
$("input:text").val('Search for...');


// Change the link to "www.codefactory.wien"
$("a").attr("href",'www.codefactory.wien');



