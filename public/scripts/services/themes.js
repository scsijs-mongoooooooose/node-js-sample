$("document").ready(function() {
$("button").click(function(){
var stylesheet = $("input:checked").val();
$("link:last").attr("href","media/" + stylesheet + ".css");
	});
});
