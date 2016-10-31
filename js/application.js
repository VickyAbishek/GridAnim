var boxes = 5;
var default_color = "#000000";
var random = false;
$(document).ready(function () {
	createGrid(boxes);
});


function createGrid( boxes ){
	var cont = $('.container').length;
	if ( cont )
		$('.container').empty();

	var box = "";
	for ( var i=0; i<boxes; i++ )
	{
		for ( var j=0; j<boxes; j++ )
			box += "<div class='cell'></div>";
	}
	$('.container').append(box);
	var width = $('.container').width() / boxes;
	var height = $('.container').height() / boxes;
	$('.cell').css({'width' : width});
	$('.cell').css({'height': height});
	changeColor();
}

function changeColor() {
	$('.cell').hover( function() {
		if( random===true )
			$(this).css({"background-color": getRandomColor() });
		else
			$(this).css({"background-color": default_color });
	});
}

function changeSize () {
	var n;
	do{ 
		n = prompt("Enter the value");
	}while( isNaN(n) );
	boxes = n;
	createGrid(n);
}

function randomColor(){
	var col = "#";
	var hex = "0123456789ABCDEF"
	for(var i=0; i<6; i++)
		col += hex[Math.floor ( Math.random() * 16 )];
	default_color = col
	random = false;
	changeColor();
}

function setColor(){
	var text = "Enter hex code";
	var hexRE = /#[0-9,a-f]{6}/i;
	// regular expression used for matching hexCode and i is used for case-insensitivity
	do{
		var col = prompt(text);
		text = "Enter the value correctly, don't forget to include '#' ";
	}while( !col.match(hexRE) );
	default_color = col.match(hexRE);
	random = false;
	createGrid(boxes);
}

function randomColorForEveryCell(){
	random = true;
	createGrid(boxes);
}

function getRandomColor(){
	var col = "#";
	var hex = "0123456789ABCDEF"
	for(var i=0; i<6; i++)
		col += hex[Math.floor ( Math.random() * 16 )];
	return col;	
}

function dynamicContainer(){
	var w = prompt("Enter the width of the new container");
	var h = prompt("Enter the height of the new container");
	$('.container').css({'width' : w });
	$('.container').css({'height': h });
	createGrid(boxes);
}