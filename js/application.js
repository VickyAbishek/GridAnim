$(document).ready(function () {
	$('#b1').on('click' function () {
		var nq = '<div class="square"></div>';
 		//$('.main-div div').append(nq);	
 		$(this).closest('.main-div').find('.square').addClass('col');
 			});
});