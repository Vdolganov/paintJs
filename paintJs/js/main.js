var canvas = document.getElementById("canvas");

var ctx = canvas.getContext('2d');
var draw = false;
var size = document.getElementById('size');
var realSize = 2;
var pos = [];
var showSize = document.getElementById("showSize");
var color = "000";

var black = document.getElementById("black")
var red = document.getElementById("red")
var yellow = document.getElementById("yellow")
var green = document.getElementById("green")
var blue = document.getElementById("blue")
var violet = document.getElementById("violet")
var brown = document.getElementById("brown")
var white = document.getElementById("white")
var save = document.getElementById("save")
var img = document.getElementById("img")
var clear = document.getElementById("clear")

canvas.width = 1000;
canvas.height = 500;


showSize.textContent = realSize;

clear.onclick = function(){
	ctx.clearRect(0,0,1000,500)
}

save.onclick = function(){
	var tmp = canvas.toDataURL();
	img.src = tmp;
}


  function consoleLog2(){
	draw = true;
	
} 

 function consoleLog3(){
	draw = false
}   






function consoleLog1(){
	if(draw){
      console.log(event.screenX - canvas.offsetLeft, );
   
     
    //ctx.lineTo(event.screenX - canvas.offsetLeft,event.screenY - 84);
    ctx.beginPath();
    ctx.moveTo(event.screenX - canvas.offsetLeft,event.screenY - 84);
    ctx.lineWidth = realSize;
   // ctx.lineTo(event.screenX - canvas.offsetLeft,event.screenY - 74)
    ctx.arc(event.screenX -10,event.screenY - 84, realSize, 2*Math.PI, false);
   // ctx.arcTo(90,10,90,90,20);
   // ctx.moveTo(10,10);
   // ctx.arcTo(90,10,90,90,80);
   ctx.miterLimit = 50000;
   ctx.imageSmoothingQuality = "high";
   ctx.fillStyle = "#" + color;
   ctx.lineCap = "round";
   ctx.filter = blur(1);
    ctx.fill();

    console.log(ctx)
	}
}

function changeSize(){
   realSize = size.value;
   showSize.textContent = realSize
}

function makeblack(){
	color = "000000"
}

function makered(){
	color = "f00"
}

function makeyellow(){
	color = "fe0"
}

function makegreen(){
	color = "00a629"
}

function makeblue(){
	color = "009dff"
}

function makeviolet(){
	color = "6600a6"
}

function makebrown(){
	color = "5c3701"
}

function makewhite(){
	color = "fff"
}



canvas.addEventListener('mousedown' , consoleLog2, false)

canvas.addEventListener('mouseup' , consoleLog3, false)

canvas.addEventListener('mousemove' , consoleLog1, false)

size.addEventListener('mousemove' , changeSize, false)

red.addEventListener('click', makered, false)
black.addEventListener('click', makeblack, false)
yellow.addEventListener('click', makeyellow, false)
green.addEventListener('click', makegreen, false)
blue.addEventListener('click', makeblue, false)
violet.addEventListener('click', makeviolet, false)
brown.addEventListener('click', makebrown, false)
white.addEventListener('click', makewhite, false)

/*canvas.onclick = function(){
	ctx.arc(event.screenX - canvas.offsetLeft,event.screenY - 84, 100, 360*Math.PI, false);
	ctx.fill();
	console.log("Test")
}*/

