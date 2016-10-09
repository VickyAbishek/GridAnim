$(document).ready(function () {
	$('button').on('click', function () {
		
		/*var x = '<p>hel</p>';
		$(this).css('color','white');
		var nq = '<div class="square col"></div>';
 		$(this).removeClass('b1');
 		var sq = $(this).next().find('.square');
 		sq.addClass('col');	*/
 		
 		//$(this).next().after(x);
 		//$(this).next().next().append(nq);

 		var squarecontainer = 	$(this).next().next();
 		var addsquare = '<div class="square col"></div>';
 		squarecontainer.append(addsquare);
 		squarecontainer.find('.square').addClass('col');
 	});
});