$('#yt-masthead-content').append('<a href="#"><p class="new-tab-search">Search In New Tab</p></a>');

a = "0"

$('.new-tab-search').click(function() {
	var search_query = ( $("#masthead-search input[name=search_query]").val() );
	var replaced = search_query.split(' ').join('+');
	
	if (search_query != "") {
		var a = "http://www.youtube.com/results?search_query=" + replaced;
		chrome.runtime.sendMessage({greeting: a}, function(response) {
  			console.log(response.farewell);
		});
	};
    
});


