$(document).ready(function()
{
$("#Finance").click(function()
{
$("section").load("WebContent/Finance/Finance.html",function(responseTxt,statusTxt,xhr)
{
	if(statusTxt=="success")
	{
		$("#text").load("WebContent/Finance/Opis.html",function(responseTxt,statusTxt,xhr)
				{$("#container").height( $(window).height() - 202);
				$("aside").height( $("#container").height());
				$("section").height($("#container").height());
				$("article").height( $("#container").height() - 30);});
		$("#Opis").click(function(){
			$("#text").load("WebContent/Finance/Opis.html");
		});
		$("#Korzysci").click(function(){
			$("#text").load("WebContent/Finance/Korzysci.html");
		});
		$("#Wymagania").click(function(){
			$("#text").load("WebContent/Finance/Wymagania.html");
		});
		$("#Plan").click(function(){
			$("#text").load("WebContent/Finance/Plan.html");
		});
		$("#Terminy").click(function(){
			$("#text").load("WebContent/Finance/Terminy.html");
		});
	}	
});
});
})
