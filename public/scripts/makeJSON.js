$(document).ready(function () {
	"use strict";
	listen();
});

function listen() {
	$('#submitFriends').click(function() {
		console.log("Clicked");
		parseCustom();
	})
}

function parseCustom() {
	console.log($('#studentList').html());
	var array =[];
	var first, last, fullName;
	$('#studentList').find('tr').toArray().forEach(function(ele) {
		//console.log(ele);
		//console.log($(ele));
		// var first, last, fullName;
		$(ele).find('td').toArray().forEach(function(element) {
			// var first, last;
			//console.log($(element));
				if ($(element).is(":nth-child(1)")) {
					//console.log($(this));
					//console.log("yeah?");
					//console.log("First name is: " + $(element).text());
					first = $(element).html();
				} else if ($(element).is(":nth-child(2)")) {
					//console.log("Last name is: " + $(element).text());
					last = $(element).html();
				} else {
					//var fullName = first.concat("-", last);
					fullName = first + "-" + last;
					//fullName = fullName.concat(last);
					console.log("Full name is: " + fullName);
					//console.log($(element).find('input'));
					if ($(element).find('input').is(':checked')) {
						//console.log("It's yes");
						array.push(fullName);
					} else {
						//console.log("no");
					}
				}

		});
	});
	console.log(array);

	// var text = '{
	// 	"user" : fullName,
	// 	"potential" : array
	// }';
	// var obj = JSON.parse(text);

	// localStorage.setItem('dataStorage', JSON.stringify(obj));

}