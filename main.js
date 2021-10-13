//Create a reference for canvas 
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

//Give specific height and width to the car image

gc_width = 100;
gc_height = 90;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.

gc_x = 5;
gc_y = 225;

function add() {
	//upload car, and background images on the canvas.
	b_img = new Image();
	b_img.onload = ons;
	b_img.src = background_image;

	g_img = new Image();
	g_img = gm;
	g_img.src = greencar_image;
}

function ons() {
	//Define function ‘uploadBackground’
	ctx.drawImage(b_img, 0, 0, canvas.width, canvas.height);

}

function gm() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(g_img, gc_x, gc_y, gc_width, gc_height);

}


window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if (keyPressed == '38') {
		up();
		console.log("up");
	}

	if (keyPressed == '40') {
		down();
		console.log("down");
	}

	if (keyPressed == '37') {
		left1();
		console.log("left");
	}

	if (keyPressed == '39') {
		right();
		console.log("right");
	}


}


function up() {
	//Define function to move the car upward
	if (gc_y >= 0) {

		gc_y = gc_y - 10;
		console.log("up")
		gm();
		ons();

	}
}

function down() {
	//Define function to move the car downward
	if (gc_y < 570) {

		gc_y = gc_y + 10;
		gm();
		ons();
		
	}
}

function left1() {
		//Define function to move the car left side
		if (gc_x > 0) {

			gc_x = gc_x - 10;
			gm();
			ons();
			
		}
}

	function right() {
		if (gc_x < 870) {

			gc_x = gc_x + 10;
			gm();
			ons();
		}
	}


