$(document).ready(function(){

//Create a <button> element on the DOM, you may do
//this in jQuery, or write it directly in the HTML
//code. Have the button text read "Generate".


//Using jQuery, append a <div> element when you click the button.

var  numClicked = 0;
$('#testButton').on('click', function(){
numClicked += 1;
$('.container div').append('<div></div>');
$('div').append('<p>' + parseInt(numClicked) + '</p>')
$('div').append('<button id="swapButton">' + "Swap" +'</button>' + '<button id="deleteButton">' + "Delete" +'</button>');
//$('div').append('<button id="deleteButton">' + "Delete" +'</button>');
});



}); //end of main ready function
