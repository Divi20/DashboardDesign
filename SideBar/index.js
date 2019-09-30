$(document).ready(function() {
	$('.nav-trigger').click(function() {
		$('.side-nav').toggleClass('visible');
	});

});

window.onload = function () {

	var dP = [
		{ x: new Date(2000, 0), y: 3289000 },
		{ x: new Date(2001, 0), y: 3830000 },
		{ x: new Date(2002, 0), y: 2009000 },
		{ x: new Date(2003, 0), y: 2840000 },
		{ x: new Date(2004, 0), y: 2396000 },
		{ x: new Date(2005, 0), y: 1613000 },
		{ x: new Date(2006, 0), y: 2821000 },
		{ x: new Date(2007, 0), y: 2000000 },
		{ x: new Date(2008, 0), y: 1397000 },
		{ x: new Date(2009, 0), y: 2506000 },
		{ x: new Date(2010, 0), y: 2798000 },
		{ x: new Date(2011, 0), y: 3386000 },
		{ x: new Date(2012, 0), y: 6704000},
		{ x: new Date(2013, 0), y: 6026000 },
		{ x: new Date(2014, 0), y: 2394000 },
		{ x: new Date(2015, 0), y: 1872000 },
		{ x: new Date(2016, 0), y: 2140000 }
	];
	
	var chart = new CanvasJS.Chart("chartContainer", {
		animationEnabled: true,  
		
		title:{
			text: "Spending Trend"
		},
		axisY: {
			title: "Revenue in USD",
			valueFormatString: "#0,,.",
			suffix: "mn",
			prefix: "$"
		},
		data: [{
			type: "splineArea",
			
			
				
			markerSize: 5,
			xValueFormatString: "YYYY",
			yValueFormatString: "$#,##0.##",
			dataPoints: dP
		}]
		});
	chart.render();

	var listContent =[
		{img:"img/logo.png", name:"MasterCard", date:"No of days left = 2", amount: "8$"},
		{img:"img/logo.png", name:"Netflix", date:"No of days left = 2", amount: "8$"},
		{img:"img/logo.png", name:"Brown Thomus", date:"No of days left = 2", amount: "8$"},
		{img:"img/logo.png", name:"MasterCard", date:"No of days left = 2", amount: "8$"}
	
	];
	
	
	
	for (var i = 0; i < listContent.length; i++) {
	document.getElementById("img").src = listContent[i].img;
	document.getElementById("name").innerHTML = listContent[i].name;
	document.getElementById("date").innerHTML = listContent[i].date;
	document.getElementById("amount").innerHTML = listContent[i].amount;
	
	
	}
	
	
	
	document.getElementById("totalSpend").innerHTML = "560.00$";
	
	
}
