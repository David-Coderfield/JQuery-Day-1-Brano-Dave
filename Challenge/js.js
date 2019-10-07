// Start of JQuery Code
$("document").ready(function(){

$.ajax({
  dataType: "json",
  url: data.json,
  data: grocery,
  success: build
});

function build(json) {
	console.log("hi");
}

	

});
// End of JQuery Code
