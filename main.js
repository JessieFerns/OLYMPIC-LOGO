canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle= "black";
ctx.lineWidth= 1.5;
ctx.rect(150, 143, 550, 300);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "blue";
ctx.lineWidth= 5;
ctx.arc(300, 260, 50, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "black";
ctx.lineWidth= 5;
ctx.arc(420, 260, 50, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "red";
ctx.lineWidth= 5;
ctx.arc(540, 260, 50, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "yellow";
ctx.lineWidth= 5;
ctx.arc(360, 320, 50, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "green";
ctx.lineWidth= 5;
ctx.arc(480, 320, 50, 0, 2*Math.PI);
ctx.stroke();