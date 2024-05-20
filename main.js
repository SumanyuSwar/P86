var canvas = new fabric.Canvas('myCanvas');
var x= document.getElementById("myAudio");
background_img_object = "";

function new_image()
{
    fabric.Image.fromURL('BirthdayImage.jpg', function(Img){
        background_img_object = Img;
        background_img_object.scaleToWidth(700);
        background_img_object.scaleToHeight(510);

        background_img_object.set({
            top:0,
            left:0
        });
        canvas.add(background_img_object);
    })
	
}

function playSound(){
	x.play();
}
