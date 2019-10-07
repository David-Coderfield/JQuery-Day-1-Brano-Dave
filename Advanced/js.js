// Start of JQuery Code
$("document").ready(function(){

	$("a").attr("href","https://www.codefactory.wien");
	$("code").css("color","red");
	$("ol li").css("background-color","#2a7b90");
	$("form textarea").attr("placeholder","Express your opinion");
	//link broken
	// $("img").attr("src","https://www.codefactory.wien/wp-content/uploads/2018/03/codefactory-vienna-footer-h.png");
	$("img").attr("src","https://codefactory.wien/wp-content/uploads/2019/05/Logo-new.png");
	//6. Change the background color to orange for all blockquote elements and the font-style to italic
	$("blockquote").css({"background-color": "orange","font-style": "italic"});
	//7. At the top of the page, change the logo color "Simple" to black and "Blog" to white
	$("#logo").css("color","#000");
	$(".gray").css("color","#fff");
	$(".date").remove();
	//9. Extend the Sidebar Menu with 3 additional items "New Templates", "Order Template" and "Contact Us"
	$("ul.sidemenu:first").append('<li><a href="http://all-free-download.com/free-website-templates/">New Templates</a></li>');
	$("ul.sidemenu:first").append('<li><a href="http://all-free-download.com/free-website-templates/">Order Templates</a></li>');
	$("ul.sidemenu:first").append('<li><a href="http://all-free-download.com/free-website-templates/">Contact Us</a></li>');
//10. Change the sentence "Be not afraid of life. Believe that life is worth living, and your belief will help create the fact." 
//into "When someone says: 'I want a programming language in which I need only to say what I wish, and done', give him a lollipop."
	$("p:contains('Be not afraid of life.')").text("When someone says: 'I want a programming language in which I need only to say what I wish, and done', give him a lollipop.");
});
// End of JQuery Code