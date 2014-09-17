
var myImages=[ "img/c1.png","img/c2.png","img/c3.png"];
var currentImg=0;

$(document).ready(function(){

    //this dynamically loads the images in the html as thumbnails
    $(myImages).each(function(index){
        $('.thumbnails').append("<img src='"+ myImages[index] + "' class='thumb'/>");
    });

    Mytimer();

    $("#leftButton").click(function(){
        	console.log(currentImg);
            prev();
           
	});

    $("#rightButton").click(function(){
        	console.log(currentImg);
        	next();
	});

    $(".thumbnails").on('click', '.thumb', function(){
        var thisSlide = $(this).attr('src');
		$("#mainImg").attr('src', thisSlide);

    });


function next(){
    if (currentImg>2){
        currentImg= myImages.length-3;
        $("#mainImg").attr('src', myImages[currentImg]);
    } else {
        currentImg++;
        $("#mainImg").attr('src', myImages[currentImg]);

    }


    };

function prev(){
    // $(myImages).each(function(index){
    if (currentImg<1){
        currentImg= myImages.length-1;
        $("#mainImg").attr('src', myImages[currentImg]);
    } else {
        currentImg--;
        $("#mainImg").attr('src', myImages[currentImg]);

    }


    };


 function Mytimer(){
    setInterval(function(){next()},3000);


 }


});


