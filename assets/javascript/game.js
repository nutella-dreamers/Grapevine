$(function() {

	var actors1 = [];

	var actors2 = [];

	$("#movie-1-input").val("goodfellas");
	$("#movie-2-input").val("the matrix");

	$("#submitButton").on("click", function(e){



		e.preventDefault();
		var movie1 = $("#movie-1-input").val();
		var movie2 = $("#movie-2-input").val();


		var query1URL = "http://www.omdbapi.com/?t=" + movie1 + "&y=&plot=short&r=json";

		var query2URL = "http://www.omdbapi.com/?t=" + movie2 + "&y=&plot=short&r=json";

		var betterURL1 = "https://api.themoviedb.org/3/search/movie?api_key=f1cae2ff0d4dc888acf52ab3335afd83&language=en-US&query="+movie1+"&page=1&include_adult=false";

		var betterURL2 = "https://api.themoviedb.org/3/search/movie?api_key=f1cae2ff0d4dc888acf52ab3335afd83&language=en-US&query="+movie2+"&page=1&include_adult=false";
		var movieRequest = "";






		$.ajax({
			url: betterURL1,
		    method: "GET"
		}).done(function(response) {

			console.log(response);
			console.log(response.results[0].id);

			movieID1 = (response.results[0].id);
			movieName1 = (response.results[0].title);

			movieRequest1 = "https://api.themoviedb.org/3/movie/"+movieID1+"/credits?api_key=f1cae2ff0d4dc888acf52ab3335afd83";


			$.ajax({
		          url: movieRequest1,
		          method: "GET"
		    }).done(function(response) {
		          console.log(response);

		          actors1 = [];

		          	for (var i = 0; i < (response.cast).length; i++) {
		          		actors1.push(response.cast[i].name);
		          	}



		          	console.log(actors1);

		          

		    });
			
		});

		$.ajax({
			url: betterURL2,
		    method: "GET"
		}).done(function(response) {

			console.log(response);
			console.log(response.results[0].id);

			movieID2 = (response.results[0].id);
			movieName2 = (response.results[0].title);

			movieRequest2 = "https://api.themoviedb.org/3/movie/"+movieID2+"/credits?api_key=f1cae2ff0d4dc888acf52ab3335afd83";


			$.ajax({
		          url: movieRequest2,
		          method: "GET"
		    }).done(function(response) {
		          console.log(response);

		          actors2 = [];

		          	for (var i = 0; i < (response.cast).length; i++) {
		          		actors2.push(response.cast[i].name);
		          	}



		          	console.log(actors2);

		          	getMatch(actors1, actors2);	


		    });
			
		});





	});



function getMatch(a, b) {
    var matches = [];

    for ( var i = 0; i < a.length; i++ ) {
        for ( var e = 0; e < b.length; e++ ) {
            if ( a[i] === b[e] ) matches.push( a[i] );
        }
    }
    console.log(matches);
}




});