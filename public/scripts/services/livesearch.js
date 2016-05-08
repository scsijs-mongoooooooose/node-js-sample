$('#search').keyup(function() {
	var searchField = $('#search').val();
	var myExp = new RegExp(searchField, "i");
	$.getJSON('data.json', function(data) {
		var output = '<tr>';
		$.each(data, function(key, val) {
			if ((val.name.search(myExp) != -1) ||
			(val.bio.search(myExp) != -1)) {
				output += '<td class="center">';
				output += '<h2>'+ val.name +'</h2>';
				output += '</td>';
			}
		});
		output += '</tr>';
		$('#update').html(output);
	}); //get JSON
});
