
$(document).ready(function(){
	$("section").load("WebContent/home.html",function(){
		$("#container").height( $(window).height() - 202);
		$("aside").height( $("#container").height());
		$("section").height($("#container").height());
		$("article").height( $("#container").height() - 30) ;
		$("#X").click(function(){
			$("#text").load("WebContent/X.html");
		});
		$("#Y").click(function(){
			$("#text").load("WebContent/Y.html");
		});
		$("#Z").click(function(){
			$("#text").load("WebContent/Z.html");
		});
	});
	})
