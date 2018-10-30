let canvas=document.querySelector("#emoji");
let ctx=canvas.getContext("2d");

const circle=(x,y,radius)=>{  
    ctx.arc(x,y,radius,0,2*Math.PI);
}

const halfcircle=(x,y,radius)=>{  
    ctx.arc(x,y,radius,0,Math.PI);
}

function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
    if (typeof stroke == "undefined" ) {
      stroke = true;
    }
    if (typeof radius === "undefined") {
      radius = 5;
    }
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();

    if (fill) {
      ctx.fill();
    }        
  }

ctx.beginPath();
circle(250,250,200);
ctx.fillStyle="#FFDD68";
ctx.fill();

ctx.beginPath();
circle(180,200,35);
ctx.fillStyle="#674D27";
ctx.fill();

ctx.beginPath();
circle(320,200,35);
ctx.fillStyle="#674D27";
ctx.fill();

ctx.beginPath();
halfcircle(250,290,110);
ctx.fillStyle="#674D27";
ctx.fill();

roundRect(ctx, 180, 330, 140, 55);
ctx.fillStyle = "#FF727F";
ctx.fill();

ctx.beginPath();
halfcircle(250,380,70);
ctx.fillStyle="#FF727F";
ctx.fill();

ctx.beginPath();
ctx.moveTo(240,330);
ctx.lineTo(260,330);
ctx.lineTo(250,430);
ctx.closePath();
ctx.fillStyle = "#E2596C";
ctx.fill();